'use strict';

class Notes {
  constructor (opts) {
    this.action = opts.command.action;
    this.payload = opts.command.payload;
  }

  add (payload) {
    console.log(`Adding Note: ${payload}`);
  }

  execute() {
    // insert an else if in this area 
  }
}

module.exports = Notes;

// This is the old way with constructors and protoypes

// Establishing a constructor function 
// function Notes(opts) {
//   this.action = opts.command.action;
//   this.payload = opts.command.payload;
// }

// // Prototype that will create an object representing a note
// Notes.prototype.add = function (payload) {
//   console.log(`Adding Note: ${payload}`);
// };

// Prototype that executes the action 
// Notes.prototype.execute = function () {
// use an if/else within this function 
// };

// Export constructor function
// module.exports = Notes;