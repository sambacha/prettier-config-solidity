import defaultExport from '@uniswap/token-lists';

import Ajv from 'ajv';
import * as data from './tokens.json';

var ajv = new Ajv();
var valid = ajv.addSchema(defaultExport.schema, 'mySchema').validate('mySchema', data.default);
if (!valid) {
  throw new Error(ajv.errorsText());
}
