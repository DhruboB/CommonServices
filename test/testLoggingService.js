'use strict'

var expect = require('chai').expect;
var log = require('../LoggingService.js');

// testing Logger apis, should successfully run and print given message to output stream e.g. console 
describe('#LoggingService',function(){
    it('should print the info message',function(){
        log.info('Printing INFO message from mocha framework to test logger framework.');        
    })

    it('should print the info message',function(){
        log.error('Printing ERROR message from mocha framework to test logger framework.');        
    })

    it('should print the info message',function(){
        log.debug('Printing DEBUG message from mocha framework to test logger framework.');        
    })

    it('should set the logging level to desired log level',function(){
        log.debug('Log level change test starts ... this line will be printed');
        log.setLevel('INFO');
        log.debug('This line must not be printed to pass the test case');
    })

})