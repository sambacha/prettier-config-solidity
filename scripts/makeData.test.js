require('jest-mock-now')();
const makeData = require('./makeData');

test('makeData to match snapshot', () => {
  expect(makeData('../src')).toMatchSnapshot();
});
