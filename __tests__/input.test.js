'use strict';

// Mocks minimist in order to pass test without actually inputting user data (I think)
jest.mock('minimist');
const minimist = require('minimist');

minimist.mockImplementation(() => {
  return {
    a: 'This is a note',
  };
});


const Input = require('../lib/input.js');

test('tests are alive', () => {
  expect(true).toBe(true);
});

test('parse should give us good command', () => {
  let input = new Input();
  let command = input.parse({ a: 'test' });
  expect(command.action).toBe('add');
});

//or

// it ('should do something', () => {
//   expect(false).toBe(true);
// });