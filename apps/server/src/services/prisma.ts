import { PrismaClient } from '@prisma/client'
import { TaskLocation } from '@prisma/client/wasm'

type TaskLocationWithExtra = TaskLocation & {
  location: {
    latitude: number
    longitude: number
  }
}

const prismaExtended = new PrismaClient().$extends({
  model: {
    taskLocation: {
      async create(data: {
        taskId: string
        altitude: number
        location: {
          latitude: number
          longitude: number
        }
      }) {
        // Create an object using the custom types from above
        const taskLocation = {
          taskId: data.taskId,
          altitude: data.altitude
        }

        // Insert the object into the database
        const point = `POINT(${data.location.longitude} ${data.location.latitude})`
        await prismaExtended.$queryRaw`
          INSERT INTO "TaskLocation" (taskId, altitude, location) VALUES (${taskLocation.taskId}, ${taskLocation.altitude}, ST_GeomFromText(${point}, 4326));
        `
        // Return the object
        return taskLocation
      },
      async findClosestPoints(latitude: number, longitude: number) {
        // Query for clostest points of interests
        const result = await prisma.$queryRaw<
          {
            id: string | null
            taskId: string | null
            altitude: number | null
            st_x: number | null
            st_y: number | null
          }[]
        >`SELECT id, taskId, altitude, ST_X(location::geometry), ST_Y(location::geometry) 
            FROM "TaskLocation" 
            ORDER BY ST_DistanceSphere(location::geometry, ST_MakePoint(${longitude}, ${latitude})) DESC`

        // Transform to our custom type
        const taskLocations: TaskLocationWithExtra[] = result.map((data: any) => {
          return {
            id: data.id ?? '',
            taskId: data.taskId ?? '',
            altitude: data.altitude ?? 0,
            location: {
              latitude: data.st_x ?? 0,
              longitude: data.st_y ?? 0
            }
          }
        })

        // Return data
        return taskLocations
      },
      async findTaskLocationByTaskId(id: string) {
        // Query for clostest points of interests
        const result = await prisma.$queryRaw<
          {
            id: string | null
            taskId: string | null
            altitude: number | null
            st_x: number | null
            st_y: number | null
          }[]
        >`SELECT id, taskId, altitude, ST_X(location::geometry), ST_Y(location::geometry) 
            FROM "TaskLocation" 
            WHERE taskId = ${id}`

        if (result.length > 0) {
          const data = result[0]
          return {
            id: data.id ?? '',
            taskId: data.taskId ?? '',
            altitude: data.altitude ?? 0,
            location: {
              latitude: data.st_x ?? 0,
              longitude: data.st_y ?? 0
            }
          }
        }
        return null
      }
    }
  }
})

export type ExtendedPrismaClient = typeof prismaExtended

let _prisma: typeof prismaExtended

if (process.env.NODE_ENV === 'production') {
  _prisma = prismaExtended
} else {
  if ((global as any).prisma == null) {
    ;(global as any).prisma = prismaExtended
  }
  _prisma = (global as any).prisma
}

export const prisma = _prisma

export async function removePushId(pushIds: string[]): Promise<void> {
  for (const pushId of pushIds) {
    const user = await prismaExtended.user.findFirst({
      where: {
        pushId
      }
    })
    if (user != null) {
      await prismaExtended.user.update({
        where: {
          id: user.id
        },
        data: {
          pushId: null
        }
      })
    }
  }
}
