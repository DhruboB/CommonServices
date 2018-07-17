/**
 * This is unit testcase implementation for all functions of uuidService.js
 * 
 * @author Dhrubo
 * @license MIT
 */

'use strict'

var expect = require('chai').expect;

const UUIDService = require('../UUIDService.js');
let service = new UUIDService();
const uuid1 = require('uuid/v1');
const uuid4 = require('uuid/v4');

describe('Testing UUID Service', function(){
    it('it shpould return type version 1 UUID',function(){
        var uuid = service.getUUIDByVersion(service.V1).toString();        
        var localuuid = uuid1();
        expect(uuid).not.equals(localuuid);
    }) 
    it('it shpould return type version 4 UUID',function(){
        var uuid = service.getUUIDByVersion(service.V4).toString();        
        var localuuid = uuid4();
        expect(uuid).not.equals(localuuid);
    })
    it('it shpould return type V4 UUID by default',function(){
        var uuid = service.getUUID().toString();        
        var localuuid =uuid4();
        expect(uuid).not.equals(localuuid);
    }) 
});

