#!/bin/sh
npx ajv-cli migrate -s tests/schema/prettier.schema.json -o tests/schema/migrated_schema.json
