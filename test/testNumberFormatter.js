'use strict'

var expect = require('chai').expect;
var numFormatter = require('../NumberFormatter.js');

// test case for function in app.js
describe('#numFormatter',function(){
    it('should convert single digits', function(){
        var result = numFormatter(1);
        expect(result).to.equal('1');
    })
})

// test case for function in app.js
describe('#numFormatter',function(){
    it('should convert double digits', function(){
        var result = numFormatter(12);
        expect(result).to.equal('12');
    })

    it('should convert tripple digits', function(){
        var result = numFormatter(100);
        expect(result).to.equal('100');
    })

    it('should convert 4 digits', function(){
        var result = numFormatter(32456);
        expect(result).to.equal('32,456');
    })
})