/**
 * This service has relevant functions/implementation which return an Universally Unique Identifier (UUID)
 * 
 * @author Dhrubo
 * @license MIT
 */

'use strict'

class UUIDService {

    constructor(){
        this.uuid1 = require('uuid/v1');
        this.uuid4 = require('uuid/v4');
    }
     /** 
     * This function version type, either v1 or v4 and generates an Universally Unique identifier
     * 
     * @param {String} version
     * @returns {String} uuid  
     * 
     * */
    getUUIDByVersion(version){        
        var uuid = null;
        if(version == this.V1){
            uuid = this.uuid1();
        } else if (version == this.V4) {
            uuid = this.uuid4();
        }
        return uuid;
    }

    /** 
     * This function takes version type and generates TYPE 4 Universally Unique identifier. This
     * avoids identification of computer and mac address of systems. However with little drawback that  
     * there is a chance of duplication , but with stattistics i.e. 2^128 combincation which 
     * in other words if we try trillions of id generation per secon , we may face duplication.     
     * 
     * @param {String} version
     * @returns {String} hashedString  
     * 
     * */
    getUUID(version){           
        return this.getUUIDByVersion(this.V4);        
    }

    // returns hashing version code 
    V1(){
        var str = 'v1';
        return str;
    }

    // returns hashing version code 
    V4(){
        var str = 'v4'
        return str;
    }
}

module.exports = UUIDService;
