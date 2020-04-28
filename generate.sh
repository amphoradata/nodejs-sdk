rm -rf src/sdk/node_modules
rm -rf src/lib
rm -rf src/sdk

docker-compose run generator

pushd src/sdk
npm i
npm run build