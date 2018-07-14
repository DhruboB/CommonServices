/**
 * Returns an formatted number value upon calling this api
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
'use strict'

module.exports = function(number,locale){    
    return number.toLocaleString(locale);
}