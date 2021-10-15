const isStr = require('./utils/isStr.js');

function isUpper(string){
	if(isStr(string)){
		return string === string.toUpperCase();
	}
	else{
		throw new TypeError("Failed to execute 'isUpper': Argument must be a string");
	}
}

module.exports = isUpper;
