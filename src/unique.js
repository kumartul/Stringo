const isStr = require('./utils/isStr.js');

const Arrayism = require('arrayism');
const asm = new Arrayism();

// Function: Returns the unique characters in a string
function unique(string, caseSensitive=true){
    if(isStr(string)){
        return caseSensitive ? asm.unique(string.split("")) : asm.unique((string.toLowerCase()).split(""));
    }
    else{
        throw new TypeError("Failed to execute 'unique': The argument must be a string");
    }
}

module.exports = unique;