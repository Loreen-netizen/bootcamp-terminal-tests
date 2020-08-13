let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe("yearsAgo", function(){
    it("should return 2 for 2018",function(){
        assert.equal(2,yearsAgo(2018))
    })
    it("should return 10 for 2010",function(){
        assert.equal(10,yearsAgo(2010))
    })
    it("should return 20 for 2000",function(){
        assert.equal(20,yearsAgo(2000))
    })
    
    });