let assert = require("assert");
let countRegNumber = require("../countRegNumber")

describe("countRegNumber", function(){
    it("should return 3 for string of 3 regNumbers",function(){
        assert.equal(3,countRegNumber('CA 182736,CY 523519,CJ 812328'))
    })
    it("should return 6 for string of 6 regNumbers",function(){
        assert.equal(6,countRegNumber('CA 182736,CY 523519,CJ 812328, CY 182736,CY 723519,CA 812328'))
    })
    
    });