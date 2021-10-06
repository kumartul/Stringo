const changeCase = require('./src/changeCase.js');
const chunk = require('./src/chunk.js');
const clear = require('./src/clear.js');
const distance = require('./src/distance.js');
const has = require('./src/has.js');
const removeWhitespace = require('./src/removeWhitespace.js');

class Stringo{
    constructor(){
        this.changeCase = changeCase;
        this.chunk = chunk;
        this.clear = clear;
        this.distance = distance;
        this.has = has;
        this.removeWhitespace = removeWhitespace;
    }
}

module.exports = Stringo;