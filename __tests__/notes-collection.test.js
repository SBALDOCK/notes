'use strict';

require('@code-fellows/supergoose');

const NotesCollection = require('./lib/models/notes-collection.js');

describe('Notes collection', () => {
  it('should create - sunny day', async () => {
    const notesCollection = new NotesCollection();
    const noteData = { text: 'Celebrate victory', category: 'Reasons to celebrate'};
    const note = await notesCollection.create(noteData);
    expect(note._id).toBeDefined();
    compareProps(noteData, note);
    compareProps(note, noteData);
  });

  it('should create with no category given', async () => {
    const notesCollection = new NotesCollection();
    const noteData = {text: 'Generic Note' };
    const note = await notesCollection.create(noteData);
    expect(note._id).toBeDefined();
    compareProps(noteData, note);
    expect(note.category).toBe('general');
  });
  
  it('should delete with good id', async () => {
    const notesCollection = new NotesCollection();
    const noteData = { text: 'Generic Note' };
    const note = await notesCollection.create(noteData);
    await notesCollection.delete(note._id);
    const deleteNote = await notesCollection.get( {'_id':note._id});
    expect(true).toBe(false);
    expect(deleteNote).toBeFalsey();
  });

  it.skip('should delete wth bad id', async () => {
    const notesCollection = new NotesCollection();
    const noteData = { text: 'Generic Note' };
    const note = await notesCollection.create(noteData);
    await notesCollection.delete(note._id);
    const deletedNote = await notesCollection.get({ '_id': 'total junk' });
    expect(deletedNote).not.toBeUndefined();
  });

});


function compareProps(one, other) {
  for (const key in one) {
    expect(one[key]).toBe(other[key]);
  }
}