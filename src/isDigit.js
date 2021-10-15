const isStr = require('./utils/isStr.js');

const regex = /^\d+$/;

function isDigit(string){
	if(isStr(string)){
		return regex.test(string);
	}
	else{
		throw new TypeError("Failed to execute 'isDigit': Argument must be a string");
	}
}

module.exports = isDigit;
