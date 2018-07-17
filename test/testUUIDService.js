/**
 * This is unit testcase implementation for all functions of uuidService.js
 * 
 * @author Dhruo
 * @license MIT
 */

 'use strict'

var expect = require('chai').expect;

const UUIDService = require('../UUIDService.js');
let service = new UUIDService();

describe('Testing UUID Service', function(){
    it('it shpould return type version 1 UUID',function(){
        var uuid = service.getUUIDByVersion(service.V1).toString();  
    }) 
    it('it shpould return type version 4 UUID',function(){
        var uuid = service.getUUIDByVersion(service.V4).toString();   
    })
    it('it shpould return type V4 UUID by default',function(){
        var uuid = service.getUUID().toString();       
    }) 
});

