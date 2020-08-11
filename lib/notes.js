'use strict';

// Establishing a constructor function
function Notes() {

}

// Prototype that will create an object representing a note
Notes.prototype.add = function (ID, text) {

};

// Prototype that executes the action 
Notes.prototype.execute = function (method = '') {
  let validMethods = /get|put|patch|post|delete/i;
  return validMethods.test(method) ? method : 'GET';
};

// Export constructor function
module.exports = Notes;