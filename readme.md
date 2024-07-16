# DAYAN
create services for people to pick up and earn money, uber but for services, for example: take out rubish, clean carpet, do lawn, deliver things from shop, clean my room, etc.

### prerequisites
- docker
- node/npm
- some brain cells

### server
- npm install
- npm run up # runs docker containers
- npm run generate # generates prisma schema
- npm run push # pushes changes to database
- npm run start
- npm run studio # separate terminal, optional database viewer using apollo studio


### mobile
- npm install
- npm run generate # pulls db schema and generates graphql models/hooks
- npm run start # or npm run ios/android
