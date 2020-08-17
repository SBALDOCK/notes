'use strict';

require('@code-fellows/supergoose');

const Notes = require('../lib/notes.js');

const notes = new Notes();
jest.spyOn(notes, 'add');

const notesModel = require('../lib/model/notes-schema.js');

beforeEach(async() => {
  return notesModel.deleteMany({});
});

describe('Note Module', () =>  {
  
  it('execute() does nothing with invalid options', () => {
    return notes.execute({})
      .then(() => {
        expect(notes.add).not.toHaveBeenCalled();
      });
  });

  it('notes() can add a note', () => {
    const action = 'add';
    const payload = 'test note';
    return notes.execute( { action, payload })
      .then(results => {
        expect(notes.add).toHaveBeenCalled();
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

describe('List', () => {
  it('should do return list of ALL notes when executing a list command with no category', async () => {
    await notes.execute({ 
      action: 'add',
      payload: 'first note',
    });

    await notes.execute({
      action: 'add',
      payload: 'secdond note',
    });

    const list = await notes.execute({
      action: 'list',
    });

    expect(list.length).toBe(2);

    expect(list[0].text).toBe('first note');
    expect(list[1].text).toBe('second note');

    expect(true);
  });
});



