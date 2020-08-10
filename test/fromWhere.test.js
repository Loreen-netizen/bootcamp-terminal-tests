let assert = require("assert");
let fromWhere = require("../fromWhere");

describe("fromWhere", function(){
    it("should return Cape Town for regNumber starting with CA",function(){
        assert.equal("Cape Town",fromWhere('CA'))
    });
    it("should return Paarl for regNumber starting with CJ",function(){
        assert.equal("Paarl",fromWhere('CJ'))
    });
    it("should return Bellville for regNumber starting with CA",function(){
        assert.equal("Bellville",fromWhere('CY'))
    });
    it("should return Some other place! for regNumber starting with any other letters",function(){
        assert.equal("Some other place!",fromWhere('CF'))
    });
    
    
    });