#!/bin/bash

# this file downloads OpenAPI doc and generates a client using autorest

# clean up directory
rm edit.json
rm -rf src/lib

# download and transform the OpenAPI doc
curl -O https://app.amphoradata.com/swagger/v1/swagger.json
jq 'del(."x-generator")' <<< cat swagger.json >> edit.json # remove x-generator, autorest doesn't like it

# generate the client using autorest
autorest --input-file=edit.json --nodejs config.yaml

# clean up
rm swagger.json
rm edit.json