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
    infos = [
        { /* Zeroth section bhagwan ke naam, I am an Indian B-) */

        },
        { /* First section, the introduction section */
            'Name' : 'Name of the Algorithm/DataStructure [M]:', // Name should always be first
            'Class' : 'Class (Ex. Sorting) [O]:',
            'Data Structure' : 'Data Structure involved (Ex. Array) [O]:',
            'Time Complexity' : 'Time Complexity (Ex. O(logn)) [O]:',
            'Description' : 'Description [O]:',
            'Resources' : 'Resource [O]:',
            'Extras' : 'Extras (any extra relevant info or link) [O]:',
            'Contributors' : 'Your Name and Emailid (add yourself as contributor) [O]:'
        },
        { /* Second section, the Require Calls section */
            '<ModuleName>': 'Name of the Module to require [M]:',
            '<Var>' : 'Enter the variable name to store the module [M]:'
        },
        { /* Third section, cache the methods to call later */
            '<Method>': 'Method to Cache/Value of Global variable [M]:',
            '<Var>': 'Enter the variable name to store it [M]:'
        },
        { /* Fourth section, give the function name and description */
            '<FunctionName>': 'Name of the Function [M]:' ,
            '<ShortDescription>': 'Short description of the function [O]:'
        },
        { /* Fifth section, give parameter type, name and description */
            '<ParamName>': 'Give the parameter name [M]:',
            '<Type>': {
                type: 'rawlist',
                'message': 'Type of parameter [M]:',
                'choices': VARTYPES
            },
            '<VarType>': {
                'type': 'list',
                'message': 'Variable type of parameter [M]:',
                'choices': VARCHOICES
            },
            '<ShortParamDescription>': 'Short description for this parameter [O]:'
        },
        { /* Sixth section, export module */
            '<FunctionName>': {
                type: 'input',
                message: 'Name of the function to export [O]:',
                'default': function(){ return 'testFunc' }
            },
            '<ModuleName>': {
                type: 'input',
                message: 'Name of the module to export [O]:',
                'default': function(){ return 'testModule' }
            }
        }
    ];

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

/** Construct each section from infos object */
infos.forEach(function(val){
    var section = constructSection(val);
    sections.push(section);
});

function prettify() {
    var args =  slice.call(arguments);
    console.log(JSON.stringify.apply(null, args));
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
