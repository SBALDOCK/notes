'use strict';

const Notes = require('../lib/notes.js');

test('tests are alive', () => {
  expect(true).toBe(true);
});

test('Add a nice note', () => {
  let notes = new Notes();
  let command = notes.add({ a: 'test' });
  expect(command.action).toBe('add');
});

