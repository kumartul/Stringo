const validator = require('validator');
const isStr = require('./utils/isStr.js');

// Checks if the string is an alphanumeric string or not
function isAlpha(input){
	if(isStr(input)){
		return validator.default.isAlpha(input);
	}
	else{
		throw new TypeError("Failed to execute 'isAlpha': Argument must be a string");
	}
}

module.exports = isAlpha;
