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
    
    constructor(){
        // using bynyan base logging framework implementation as it provides lot of useful information with JSON format. 
        // This will be useful while parsing and extracting logging events by ELK stack. Though, it is flexible enough 
        // to change base logging implementation by changing below line.
        var bunyan = require('bunyan');
        this.log = bunyan.createLogger({name: 'Logger', level: 'debug'});
        this.log.info('Project specific Logger is created.');
    }   

    // for INFO messages
    info(msg){
        this.log.info(msg);
    }
    // for DEBUG messages
    debug(msg){
        this.log.debug(msg);
    }
    // for ERROR messages
    error(msg){
        this.log.error(msg);
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
    // Integrating with central logging system Agent will be implemented below. So, any 
    // log(preferrably, INFO, WARNING & ERROR) can be delegated accordingly. 

}

module.exports = LoggingService;