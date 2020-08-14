'use strict';

const NotesModel = require('./notes-schema.js');

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

    const nc = new NotesCollection();
    const saved = await nc.create({ text, category });
    console.log('Note Saved', note.text);
    return saved;
  }
  
  async list(category) {
    let query = category ? { category} : {};
    let notes = await NotesModel.find(query);
    notes.forEach(note => {
      console.log(note.text);
      console.log('');
      console.log(` Category: ${note.category}\t ID: ${note.id}`);
      console.log('--------------------------------\n');
    });
    return;
  }

  async delete(id) {
    await NotesModel.findByIdAndDelete(id)
      .then(() => console.log('Deleted Note', id));
  }
}

module.exports = Notes;

