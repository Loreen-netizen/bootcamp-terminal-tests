let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe("totalPhoneBill", function(){
    it("should return R7.45 for 2 calls and 3 sms'",function(){
        assert.equal("R7.45",totalPhoneBill('call, sms, call, sms, sms'))
    });
    it("should return R for 1 call and 2 sms'",function(){
        assert.equal("R4.05",totalPhoneBill('call, sms, sms'))
    });
    it("should return R0.65 for 1 sms",function(){
        assert.equal("R0.65",totalPhoneBill(' sms'))
    });
    
    
    });