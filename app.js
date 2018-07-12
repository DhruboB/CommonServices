'use strict';

/**
 * Returns an UUID version 1 value upon calling this api
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */

 module.exports = function(number,locale){
     var uuid = 100;
     return number.toLocaleString(locale);
 }