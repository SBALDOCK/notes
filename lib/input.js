'use strict';

// Third party libraries to help - Minimist wants an array of strings with specific structural requirements
const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.command = this.parse(args);
  }

  parse(args) {
    let argsMap = {
      a: 'add', 
      add: 'add',
    };
    console.log(Object.keys(args));

    let arg = Object.keys(args).filter(arg => argsMap[arg])[0];
  
    const command = {
      action: argsMap[arg],
      payload: args[arg],
    };
  
    if(command.action === undefined || command.payload === true) {
      console.log('bad input');
    } else {
      console.log('good input');
    }
  
    return command;

  }

  valid () {
    return !!(this.command.action && this.command.payload);
  }

}

module.exports = Input;

// This is the old way with constructors and prototypes

// constructor 
// function Input() {
// capture and validate user input
// console.log(process.argv.slice(2));
//   const args = minimist(process.argv.slice(2));
//   this.command = this.parse(args);
// }

// Export constructor
// Input.prototype.parse = function(args) {

// let argsMap = {
//   a: 'add',
//   add: 'add',
// };

//   console.log(Object.keys(args));

//   let arg = Object.keys(args).filter(arg => argsMap[arg])[0];

//   const command = {
//     action: argsMap[arg],
//     payload: args[arg],
//   };

//   if(command.action === undefined || command.payload === true) {
//     console.log('bad input');
//   } else {
//     console.log('good input');
//   }

//   return command;
// };

// Input.prototype.valid = function () {
//   return !!(this.command.action && this.command.payload);
// };


