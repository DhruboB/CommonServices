/**
 * This is Checksum Service to calculate MAC and provides the vlue for authenticity of the message. 
 * 
 * @author Dhrubo
 * @license MIT
 */

 'use strict';

 const crypto = require('crypto-js');
 
 class ChecksumService {

    constructor(){
    
    }
    /** 
     * This function takes a message , preferably string or JSON object, and hashing algorithm and then calculates one way 
     * hashing output usually an unique 32 bit string.
     * 
     * @param {String} message
     * @param {String} algorithm
     * @returns {String} hashedString  
     * 
     * */
    getChecksumByAlgo(message,algorithm){
        var checksum = null;
        if(algorithm == this.SHA256){
            checksum = crypto.SHA256(message); 
        } else if (algorithm == this.SHA512) {
            checksum = crypto.SHA512(message); 
        }
        return checksum
    }

    /** 
     * This function takes a message , preferably string or JSON object, and calculates one way 
     * hashing output using SHA256 algorithm. This is a default hashing function for the project.
     * 
     * @param {String} message
     * @param {String} algorithm
     * @returns {String} hashedString  
     * 
     * */
    getChecksum(message){           
        return this.getChecksumByAlgo(message, this.SHA256);        
    }

    // returns hashing algorithm code 
    SHA256(){
        var str = 'SHA256';
        return str;
    }

    // returns hashing algorithm code 
    SHA512(){
        var str = 'SHA512'
        return str;
    }
 }

 module.exports = ChecksumService;


