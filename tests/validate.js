const Ajv = require("ajv")
// options can be passed, e.g. {allErrors: true}
//const ajv = new Ajv() 

//import schema from 'schema.json';
const schema = require('./schema/prettier.schema.json');


const configSolidity = {
  arrowParens: 'always',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  endOfLine: 'lf',
  printWidth: 80,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  quoteProps: 'as-needed',
  proseWrap: 'always',
  semi: true,
  overrides: [
    {
      files: '*.sol',
      options: {
        printWidth: 80,
        tabWidth: 4,
        useTabs: false,
        singleQuote: false,
        bracketSpacing: true,
        explicitTypes: 'always',
      },
    },
  ],
};


function isValid(schema, configSolidity) {
  const ajv = new Ajv();
  const valid = ajv.validate(schema, configSolidity);

  if (!valid) {
    console.log(ajv.errors);
    return false;
  }

  return true;
  console.log('Successfully Validated Configruation File');
}

//const validate = ajv.compile(schema)
//const valid = validate(configSolidity)
//if (!valid) console.log(validate.errors)
