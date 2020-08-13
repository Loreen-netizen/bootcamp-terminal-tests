let assert = require("assert");
let isWeekday = require("../isWeekday");

describe("isWeekday", function(){
    it("should return true for Monday",function(){
        assert.equal(true,isWeekday('Monday'))
    })
    it("should return true for Wednesday",function(){
        assert.equal(true,isWeekday('Wednesday'))
    })
    it("should return false for Sunday",function(){
        assert.equal(false,isWeekday('Sunday'))
    })
    
    });