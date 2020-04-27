rm -rf generated/src
rm -rf generated/test
rm -rf generated/docs
rm -rf generated/dist
docker-compose run generator

pushd src/sdk
npm i
npm run build