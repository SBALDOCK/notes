'use strict';

// No longer being used
// const NotesModel = require('./model/notes-schema.js');

const NotesCollection = require('./model/notes-collection.js');

class Notes {
  constructor () {
    this.collection = new NotesCollection();
  }

  async execute(command) {

    switch (command.action) {
    case 'add':
      return this.add(command.payload, command.category);
    case 'list':
      return this.list(command.category);
    case 'delete':
      return this.delete(command.payload);
    default:
      return Promise.resolve();
    }
  }

  async add (text, category) {
    const addedNote = await this.collection( { text, category });
    console.log('Note saved', text);
    return addedNote;
  }
  
  async list(category) {
    let query = category ? { category} : {};
    const notes = await this.collection.get(query);

    notes.forEach(note => {
      console.log(note.text);
      console.log('');
      console.log(` Category: ${note.category}\t ID: ${note.id}`);
      console.log('--------------------------------\n');
    });
  }

  async delete(id) {
    await this.collection.delete(id);
    console.log('Deleted Note', id);
  }
}

module.exports = Notes;

