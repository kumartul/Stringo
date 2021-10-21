const isStr = require('./utils/isStr.js');

const constants = require('./utils/constants.js');
const validator = require('validator');

// Function: Returns the position of the letter in the alphabet series
function position(letter){
	if(isStr(letter)){
		if(validator.default.isAlpha(letter)){
			return constants.LOWER_ALPHABETS.indexOf(letter.toLowerCase()) + 1;
		}
	}
}

module.exports = position;
