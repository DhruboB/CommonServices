/**
 * This is unit testcase implementation for all functions of ChecksumService.js
 * 
 * @author Dhruo
 * @license MIT
 */

 'use strict'

var expect = require('chai').expect;
// const LoggingService = require('../LoggingService.js');
// let log = new LoggingService('testChecksumSeervice');

const ChecksumService = require('../ChecksumService.js');
let service = new ChecksumService();
const crypto = require('crypto-js');

describe('Testing Checksum Service', function(){
    it('it shpould return SHA256 checksum for a given message',function(){
        var checksum = service.getChecksumByAlgo('Dhrubo', service.SHA256).toString();        
        var localcs = getLocalChecksumSHA256('Dhrubo').toString();
        expect(checksum).to.equals(localcs);
    }) 
    it('it shpould return SHA512 checksum for a given message',function(){
        var checksum = service.getChecksumByAlgo('Dhrubo', service.SHA512).toString();        
        var localcs = getLocalChecksumSHA512('Dhrubo').toString();
        expect(checksum).to.equals(localcs);
    })
    it('it shpould return SHA256 checksum for a given message',function(){
        var checksum = service.getChecksum('Dhrubo').toString();        
        var localcs = getLocalChecksumSHA256('Dhrubo').toString();
        expect(checksum).to.equals(localcs);
    }) 
});

// This function calculates a checksum for a given message based on SHA-256 algorithm.
function getLocalChecksumSHA256(message){
    var checksum = crypto.SHA256(message); 
    return checksum;
}

// This function calculates a checksum for a given message based on SHA-512 algorithm.
function getLocalChecksumSHA512(message){
    var checksum = crypto.SHA512(message); 
    return checksum;
}
