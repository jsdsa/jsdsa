/**
 *  Description: Writes the given text in the given file, supports append and write operation
 *  Contributors: <@ironmaniiith aalekhj2507@gmail.com>
 */

/** Require calls */
var fs = require('fs');

/**
 *  fileWriter:
 *      Writes the given text in the given file
 *
 *  Required:
 *  @param {String} [file] file in which the text has to be written
 *  @param {String} [text] text to be written
 *  
 *  Optional:
 *  @param {String} [mode] Mode in which file needs to be written ({'a': append, 'w': write}), default: 'a'
 *  
 *  @returns {Boolean} `if` file is successfully written, Return `true`
 *                     `else` Return `false`
 */
function fileWriter(file, text, mode) {
    mode = mode || 'a';
    switch (mode) {
        case 'a':
            try {
                var x = fs.appendFileSync(file, text);
            } catch (e) { return false }
            break;
        case 'w':
            try {
                var x = fs.writeFileSync(file, text);
            } catch (e) { return false }
            break;
    }
    return true;
}

/** Export the `fileWriter` function */
module.exports.fileWriter = fileWriter;
