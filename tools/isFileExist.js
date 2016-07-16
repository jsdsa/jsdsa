/**
 Checks if the given file exist or not
  */

/** Require calls */
var fs = require('fs');

/**
 *  isFileExist:
 *      Checks if the given file exists or not 
 *
 *  Required:
 *  @param {String} [file] path of the file to check
 *
 *  Optional:
 *  @param {Function} [cb] callback function
 *
 *  @returns {Function} `if` file exists, Return `true`
 *                  `else` Return `false` as argument in the callback
 */
function isFileExist(file, cb) {
	cb = cb || function (o){ return o; };
	var isExist = false;
	try {
		fs.statSync(file);
		isExist = true;
	} catch (e) {}
	return cb(isExist);
}

/** Export the `isFileExist` function */
module.exports.isFileExist = isFileExist;
