'use strict';

// Third party libraries to help

const minimist = require('minimist');

function Input() {
  // Get the -x style of arguments from the user
  const args = minimist(process.argv.slice(2));

  //use the args to create our properties with helper methods
  this.method = this.getMethod(args.m); 
}

// Prototype to 
Input.prototype.getMethod = function (method = '') {
  let validMethods = /get|put|patch|post|delete/i;
  return validMethods.test(method) ? method : 'GET';
};

// Export constructor function
module.exports = Input;

