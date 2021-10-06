const changeCase = require('./src/changeCase.js');
const chunk = require('./src/chunk.js');
const clear = require('./src/clear.js');
const distance = require('./src/distance.js');
const has = require('./src/has.js');
const removeWhitespace = require('./src/removeWhitespace.js');
const reverse = require('./src/reverse.js');
const sort = require('./src/sort.js');
const words = require('./src/words.js');

class Stringo{
    constructor(){
        this.changeCase = changeCase;
        this.chunk = chunk;
        this.clear = clear;
        this.distance = distance;
        this.has = has;
        this.removeWhitespace = removeWhitespace;
        this.reverse = reverse;
        this.sortChars = sort.sortChars;
        this.sortWords = sort.sortWords;
        this.words = words;
    }
}

module.exports = Stringo;