const Ajv = require("ajv");
// options can be passed, e.g. {allErrors: true}
const path = require('path');

//import schema from 'schema.json';
const schema = require('../test_validate/prettier.config.schema.json');
const configSolidity = require('./config.test.js')
//import * as configSolidity from './config.test.js';
//configSolidity();

function isValid(schema, configSolidity) {
  const ajv = new Ajv();
  const isValid = ajv.validate(schema, configSolidity);

  if (!isValid) {
    this.console.log(ajv.errors);
    return false;
  }
  this.console.log(ajv.validate)
  this.console.log(isValid)
  this.console.log('Successfully Validated Configuration File');
  return true;
};
