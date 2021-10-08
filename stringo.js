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
const count = require('./src/count.js');
const join = require('./src/join.js');
const random = require('./src/random.js');
const remove = require('./src/remove.js');
const shuffle = require('./src/shuffle.js');
const unique = require('./src/unique.js');

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
        this.insertBefore = insert.insertBefore;
        this.insertAfter = insert.insertAfter;
        this.nth = nth;
        this.count = count;
        this.join = join;
        this.random = random;
        this.remove = remove;
        this.shuffle = shuffle;
        this.unique = unique;
    }
}

module.exports = Stringo;
