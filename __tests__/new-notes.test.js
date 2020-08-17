'use strict';

require('@code-fellows/supergoose');

const Notes = require('../lib/notes.js');

const notes = new Notes();
jest.spyOn(global.console, 'log');

const notesModel = require('../lib/model/notes-schema.js');

jest.spyOn(global.console, 'log');

beforeEach(async() => {
  return notesModel.deleteMany({});
});

it ('should log properly after valid add', async () => {
  await notes.execute( { action: 'add', payload: 'test this out' });
  expect(console.log).toHaveBeenCalledWith('Noted saved','test this out');
});

it('should delete with good id', async () => {
  const addedNote = await notes.execute( {action: 'add', payload : 'test this out'});
  await notes.execute( {action: 'delete', payload: addedNote._id});
  expect(console.log).toHaveBeenCalledWith('Deleted note', addedNote._id);
});