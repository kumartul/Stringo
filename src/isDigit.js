const isStr = require('./utils/isStr.js');

const regex = /^\d+$/;

function isDigit(input){
	if(isStr(input)){
		return regex.test(input);
	}
	else{
		throw new TypeError("Failed to execute 'isDigit': Argument must be a string");
	}
}

module.exports = isDigit;
