'use strict';

require('@code-fellows/supergoose');

const Notes = require('../lib/notes.js');

const notes = new Notes();
jest.spyOn(notes, 'add');

describe('Note Module', () =>  {
  
  it('execute() does nothing with invalid options', () => {
    return notes.execute({})
      .then(() => {
        expect(notes.add).not.toHaveBeenCalled();
      });
  });

  it('notes() can return a saved note', () => {
    const action = 'add';
    const payload = 'test note';
    return notes.execute({ action, payload} )
      .then(savedNote => {
        expect(savedNote.category).toBe('general');
        expect(savedNote.text).toBe('test note');
      });
  });

});



// test('tests are alive', () => {
//   expect(true).toBe(true);
// });

// test('Add a nice note', () => {
//   let notes = new Notes();
//   let command = notes.add({ a: 'test' });
//   expect(command.action).toBe('add');
// });

