import { createWriteStream, unlink } from 'fs'
import { GraphQLError } from 'graphql'
import { type FileUpload } from 'graphql-upload/Upload.mjs'
import path from 'path'
import shortId from 'shortid'
import { UPLOADS_URL } from 'src/constants/uploads.ts'
import type { File } from 'src/models/index.ts'
import { prisma } from 'src/services/prisma.ts'

export async function saveFile(file: FileUpload): Promise<File> {
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const { createReadStream, mimetype, filename } = await file
  const stream = createReadStream()
  const storedFileName = `${shortId.generate()}-${filename}`
  const storedFileUrl = path.join(process.cwd(), process.env.UPLOADS_DIR as string, storedFileName)
  let fileSize = 0
  try {
    return await new Promise<File>((resolve, reject) => {
      // Create a stream to which the upload will be written.
      const writeStream = createWriteStream(storedFileUrl)

      // When the upload is fully written, resolve the promise.
      writeStream.on('finish', () => {
        prisma.file
          .create({
            data: {
              name: storedFileName,
              path: UPLOADS_URL(storedFileName),
              size: fileSize,
              type: mimetype
            }
          })
          .then(resolve)
          .catch(console.error)
      })

      stream.on('data', chunk => {
        fileSize += Buffer.from(chunk).byteLength
      })

      // If there's an error writing the file, remove the partially written file
      // and reject the promise.
      writeStream.on('error', error => {
        unlink(storedFileUrl, () => {
          fileSize = 0
          reject(error)
        })
      })

      // In Node.js <= v13, errors are not automatically propagated between piped
      // streams. If there is an error receiving the upload, destroy the write
      // stream with the corresponding error.
      stream.on('error', error => writeStream.destroy(error))

      // Pipe the upload into the write stream.
      stream.pipe(writeStream)
    })
  } catch {
    throw new GraphQLError('Failed to upload file')
  }
}

export async function deleteFileById(id: string): Promise<boolean> {
  return await new Promise((resolve, reject) => {
    prisma.file
      .findFirst({
        where: {
          id
        }
      })
      .then((file: any) => {
        if (file) {
          unlink(file.path, err => {
            if (err != null) {
              return reject(err)
            }
            return resolve(true)
          })
        }
        return reject(new Error('File not found'))
      })
      .catch(reject)
  })
}

export async function deleteFile(url: string): Promise<boolean> {
  return await new Promise((resolve, reject) => {
    unlink(url, err => {
      if (err != null) {
        reject(err)
        return
      }
      resolve(true)
    })
  })
}
