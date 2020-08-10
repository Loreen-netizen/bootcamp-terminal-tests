let assert = require("assert");
let transportFee = require("../transportFee");

describe("transportFee", function(){
    it("should return R20 for Morning shift",function(){
        assert.equal("R20",transportFee("morning"))
    });
    it("should return R10 for Morning shift",function(){
        assert.equal("R10",transportFee("afternoon"))
    });
    it("should return free for Morning shift",function(){
        assert.equal("free",transportFee("night"))
    });
    
    
    });