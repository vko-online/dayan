# DAYAN
create services for people to pick up and earn money, uber but for services, for example: take out rubish, clean carpet, do lawn, deliver things from shop, clean my room, etc.

### Demo
https://github.com/user-attachments/assets/86bec8a1-dfb5-41bd-8de3-27e68e1dba8e




### Prerequisites
- docker
- node/npm
- ios/android build tools

### Uses npm monorepo, start from
- npm install # installs server/mobile/web dependencies

### Server - in order
- npm run up # runs docker containers
- npm run generate # generates prisma schema
- npm run push # pushes changes to database
- npm run start
- npm run studio # separate terminal, optional database viewer using apollo studio


### Mobile - in order
- npm run generate # pulls db schema and generates graphql models/hooks
- npm run start # or npm run ios/android


-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "postgis";