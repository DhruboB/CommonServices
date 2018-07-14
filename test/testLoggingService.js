'use strict'

var expect = require('chai').expect;
const loggingService = require('../LoggingService.js');
var log = new loggingService();

// testing Logger apis, should successfully run and print given message to output stream e.g. console 
describe('#LoggingService',function(){
    it('should print the info message',function(){
        log.info('Printing INFO message from mocha framework to test logger framework.');        
    })

    it('should print the error message',function(){
        var logger = log.getLogger();
        log.error('Printing ERROR message from mocha framework to test logger framework.');        
    })

    it('should print the debug message',function(){
        log.debug('Printing DEBUG message from mocha framework to test logger framework.');        
    })

    it('should set the logging level to desired log level',function(){
        log.debug('Log level change test starts ... this line will be printed');
        log.setLevel('INFO');
        log.debug('This line must not be printed to pass the test case');
    })

})