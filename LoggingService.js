/**
 * This is a wrapper Logger within a project on top of all internal logging implementnation by any standard Logging module. 
 * winstone/bunyan will be used underlying , however it is pretty easy to change any logging implementation module any time in 
 * future. 
 * This Logger wrapper will take care  of any project specific implementation which is frequently used within application. For example, 
 * delegating all messages to a central logging system e.g. ELK
 * 
 * Just for simplicity, this Logger will only expose minimum logging apis for developers. Intentionally avoiding to provide too many 
 * options to developers just to log informatin.
 * 
 * @author Dhrubo
 * @license MIT
 */

'use strict'

class LoggingService {
    
    constructor(loggerName){
        // using bynyan base logging framework implementation as it provides lot of useful information with JSON format. 
        // This will be useful while parsing and extracting logging events by ELK stack. Though, it is flexible enough 
        // to change base logging implementation by changing below line.
        // super();
        // uncomment below line to use "bunyan" node module
        var logmodule = require('bunyan');
        // uncomment below line to use "winston" node module
        // var logmodule = require('winston');

        this.log = logmodule.createLogger({name: loggerName, level: 'debug'});
        this.log.info('Project specific Logger is created.');
    }   

    // for INFO messages
    info(message){
        this.delegateLogToELK(message);
        this.log.info(message);
    }
    // for DEBUG messages
    debug(message){
        this.log.debug(message);
    }
    // for ERROR messages
    error(message){
        this.delegateLogToELK(message);
        this.log.error(message);
    }
    // exposing this api to set Logging level if at all required.
    setLevel(level){
        this.log.level(level);
    }

    // This method may be bad as it exposes underlying logger. Still, it may be 
    // useful when if any further flexibility is required that can not be forseen.
    getLogger(){
        return this.log;
    }

    // TODO 
    // Integration with central logging system (e.g. ELK) will be implemented below. So, any 
    // log(preferrably, INFO, WARNING & ERROR) can be aynchronously delegated accordingly. 
    delegateLogToELK(message){
        // TODO This should be asynchronous implementation
    }

}

module.exports = LoggingService;