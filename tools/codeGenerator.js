/**
 * CodeGenerator:
 *  Description: Used to generate the outline of the code required for jsdsa
 *  Contributors: <@ironmaniiith aalekhj2507@gmail.com>
 */

/** Require calls */
var inquirer = require('inquirer'),
    fs = require('fs');

/** Cache methods or assign Globals */
var VARTYPES = ['Required', 'Optional', 'Undocumented'],
    VARCHOICES = ['String', 'Array', 'Number', 'Boolean', 'Object', 'Function', 'Null', 'Other'],
    slice = Array.prototype.slice,
    splice = Array.prototype.splice,
    getKeys = Object.keys,
    nonEmpty = function(e){ return e !== '' },
    simpleReturn = function(o){ return o },
    prettify = function(){ console.log(JSON.stringify.apply(null, slice.call(arguments))) },
    sections = [];

/**
 *  commentify:
 *      Add multiline comment (like what is applied to this description) to a section texts array
 *
 *  Required:
 *  @param {Array} [sectionTexts] Array containing the exact structure that needs to be written in file
 *
 *  @returns {Array} Modified sectionTexts array
 */
function commentify(sectionTexts) {
    var newSectionTexts = [],
        length = sectionTexts.length;

    newSectionTexts.push('/**');
    sectionTexts.forEach(function(val){
        newSectionTexts.push(' * ' + val);
    });
    newSectionTexts[length] = ' */'; // Last line need to be comments' closing
    return newSectionTexts;
}

/**
 *  constructSection: 
 *      Construct the section object for inquirer according to the info object
 *
 *  Required:
 *  @param {Object} [info] A single info object
 *
 *  Optional:
 *  @param {Function} [cb] The callback function that will be combined with section object 
 *
 *  @returns {Function} Returns the callback
 */
function constructSection(info, cb) {
    cb = cb || simpleReturn;
    !!info['main'] && (info = info['main']);
    var section = [];

    for (var key in info) {
        var type = 'input',
            message = info[key],
            details = {
                name: key,
                type: type,
                message: message
            };
        if (typeof message === 'object') { // supports object assignment other params
            for (var detail in message) {
                details[detail] = message[detail];
            }
        }
        section.push(details);
    }
    return cb(section);
}

var infos = [
        { /* Zeroth section bhagwan ke naam, I am an Indian B-) */
            main: {

            },
            extras: {
                seperator: '',
                prefix: '',
                suffix: '',
                startWith: '',
                endWith: '',
                replacer: '' // If replacer is present, then above may not be required
            }
        },
        { /* First section, the introduction section */
            main: {
                '<Name>' : 'Name of the Algorithm/DataStructure [M]:', // Name should always be first
                'Class' : 'Class (Ex. Sorting) [O]:',
                'Data Structure' : 'Data Structure involved (Ex. Array) [O]:',
                'Time Complexity' : 'Time Complexity (Ex. O(logn)) [O]:',
                'Description' : 'Description [O]:',
                'Resources' : 'Resource [O]:',
                'Extras' : 'Extras (any extra relevant info or link) [O]:',
                'Contributors' : 'Your Name and Emailid (add yourself as contributor) [O]:'
            },
            extras: {
                seperator: ': ',
                prefix: ' ',
                suffix: '\n',
                startWith: '',
                endWith: ''
            }
        },
        { /* Second section, the Require Calls section */
            main: {
                '<Var>' : 'Enter the variable name to store the module [M]:',
                '<ModuleName>': 'Name of the Module to require [M]:'
            },
            extras: {
                intro: '/** Require calls */\n',
                prefix: '    ',
                suffix: ',\n',
                startWith: 'var ',
                endWith: ';',
                replacer: '<Var> = require(\'<ModuleName>\')',
                multiple: true
            }
        },
        { /* Third section, cache the methods to call later */
            main: {
                '<Var>': 'Enter the variable name to store method/value [M]:',
                '<Method>': 'Method to Cache/Value of Global variable [M]:'
            },
            extras: {
                intro: '/** Cache methods or assign Globals */\n',
                prefix: '    ',
                suffix: ',\n',
                startWith: 'var ',
                endWith: ';',
                replacer: '<Var> = <Method>',
                multiple: true
            }
        },
        { /* Fourth section, give the function name and description */
            main: {
                '<FunctionName>': 'Name of the Function [M]:' ,
                '<ShortDescription>': 'Short description of the function [O]:'
            },
            extras: {
                replacer: ' <FunctionName>:\n     <ShortDescription>\n'
            }
        },
        { /* Fifth section, give parameter type, name and description */
            main: {
                '<ParamName>': 'Give the parameter name [M]:',
                '<Type>': {
                    type: 'rawlist',
                    message: 'Type of parameter [M]:',
                    choices: VARTYPES
                },
                '<VarType>': {
                    type: 'list',
                    message: 'Variable type of parameter [M]:',
                    choices: VARCHOICES
                },
                '<ShortParamDescription>': 'Short description for this parameter [O]:'
            },
            extras: {
                replacer: ' <Type>\n @param {<VarType>} [<ParamName>] <ShortParamDescription>\n',
                multiple: true
            }
        },
        { /* Sixth section, export module */
            main: {
                '<FunctionName>': {
                    type: 'input',
                    message: 'Name of the function to export [O]:',
                    default: function(){ return 'testFunc' }
                },
                '<ModuleName>': {
                    type: 'input',
                    message: 'Name of the module to export [O]:',
                    default: function(){ return 'testModule' }
                }
            },
            extras: {
                prefix: '',
                suffix: ';\n',
                intro: '/** Export the function as module */\n',
                replacer: 'module.exports.<ModuleName> = <FunctionName>'
            }
        }
    ];

/** Construct each section from infos object */
infos.forEach(function(val){
    var section = constructSection(val);
    sections.push(section);
});

/**
 *  sentenceGenerator:
 *      Construct the sentence with the given key, value and seperator from info object
 *
 *  Required:
 *  @param {String} [key] Key from the info object
 *  @param {String} [value] Corresponding value of the given key in info object
 *  @param {String} [seperator] The seperator used for generating the sentence
 *
 *  @returns {String} The sentence generated based on the key, value and seperator pairs
 */
function sentenceGenerator(key, value, seperator) {
    var start = key[0],
        end = key[key.length - 1];

    if (start === '<' && end === '>') {
        return value + seperator;
    } else if (start === '<') {
        return value + seperator;
    } else if (end === '>') {
        return value;
    } else {
        return key + seperator + value;
    }
}

function run(section, index, sections) {
    inquirer.prompt(section).then(function(answers){
        prettify(answers, null, '  ');
        if (sections[++index]) {
            run.call(null, sections[index], index, sections);
        }
    });
}
run(sections[1], 1, sections);
