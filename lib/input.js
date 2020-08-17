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
      list: 'list',
      l: 'list',
      d: 'delete',
      delete: 'delete',
    };

    const betterName = Object.keys(args).find(key => argsMap[key]);
    const category = args.c|| args.category;
    const action = argsMap[betterName];
    const payload = typeof args[betterName] === 'string' ? args[betterName] : undefined;

    return {
      action, payload, category }; // same as action:action
 
  }

  valid () {
   
    if (!this.command.action) {
      return false;
    }
    if ( this.command.action.match(/add|delete/i) ) {
      return !! this.command.payload;
    }

    return !! this.command.action;
  }
}

module.exports = Input;






