const isStr = require('./utils/isStr.js');

function isLower(string){
	if(isStr(string)){
		return string === string.toLowerCase();
	}
	else{
		throw new TypeError("Failed to execute 'isLower': Argument must be a string");
	}
}

module.exports = isLower;
