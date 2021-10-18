const isStr = require('./utils/isStr.js');

// Python-style string slicing
function pySlice(string, sliceCode){
	if(isStr(string) && isStr(sliceCode)){
		// [0:0:0]
	}
	else{
		throw new TypeError("Failed to execute 'pySlice': Both the arguments must be a string");
	}
}

module.exports = pySlice;
