const fs = require('fs');
const prettier = require('prettier');
const makeData = require('./makeData');

if (process.env.SCRIPT === 'true') {
  prettier.resolveConfig(`${__dirname}../.prettierrc.js`).then((options) => {
    // eslint-disable-next-line no-param-reassign
    options.parser = 'babel';
    ['../src'].forEach((dir) => {
      fs.writeFileSync(
        `${__dirname}/${dir}/config.js`,
        prettier.format(makeData(dir), options),
      );
    });
  });
}
