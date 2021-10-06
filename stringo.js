const changeCase = require('./src/changeCase.js');
const chunk = require('./src/chunk.js');
const clear = require('./src/clear.js');
const distance = require('./src/distance.js');
const has = require('./src/has.js');
const removeWhitespace = require('./src/removeWhitespace.js');
const reverse = require('./src/reverse.js');
const sort = require('./src/sort.js');
const words = require('./src/words.js');
const breakStr = require('./src/breakStr.js');
const has = require('./src/has.js');
const insert = require('./src/insert.js');
const nth = require('./src/nth.js');

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
        this.breakStr = breakStr;
        this.has = has;
        this.insertBefore = insert.insertBefore;
        this.insertAfter = insert.insertAfter;
        this.nth = nth;
    }
}

module.exports = Stringo;