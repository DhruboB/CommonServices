/**
 * This is a wrapper Logger within a project on top of all internal logging implementnation by any standard Logging module. 
 * SL4J and logback  will be used undetlying , however it is pretty easy to change any logging implementation module any time in 
 * future. 
 * This Logger wrapper will take care  of any project specific implementation which is frequently used within application. For example, 
 * delegating all messages to a central logging system e.g. ELK
 * 
 * Just for simplicity, this Logger will only expose minimum logging apis for developers. Intentionally avoiding to provide too many 
 * options to developers just to log informatin.
 */

'use strict'

// using bynyan base logging framework implementation as it provides lot of useful information with JSON format. 
// This will be useful while parsing and extracting logging events by ELK stack. Though, it is flexible enough 
// to change base logging implementation by changing below line.
var bunyan = require('bunyan');
var log = bunyan.createLogger({name: 'Logger', level: 'debug'});
log.info('Project specific Logger is created.');

// for INFO messages
exports.info = function(msg){
    log.info(msg);
}
// for DEBUG messages
exports.debug = function(msg){
    log.debug(msg);
}
// for ERROR messages
exports.error = function(msg){
    log.error(msg);
}
// exposing this api to set Logging level if at all required.
exports.setLevel = function(level){
    log.level(level);
}