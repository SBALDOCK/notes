const NotesModel = require('./notes-schema.js');

// make a collection

class NotesCollection {

  create(text) {
    const newNote = new NotesModel(text);
    return newNote.save();
  }
  
  async delete(id) {
    try {
      await NotesModel.findByIdAndDelete(id);
    } catch(err) {
      return Promise.resolve(false);
    }
  }
  
  get(query) {
    return NotesModel.find(query);
  }
  
}

module.exports = NotesCollection;