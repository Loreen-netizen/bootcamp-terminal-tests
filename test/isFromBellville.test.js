let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe("isFromBellville", function(){
it("should return true for a Bellville regNumber",function(){
    assert.equal(true,isFromBellville("CY 123 567"))
})
it("should return false for a regNumber not from Bellville",function(){
    assert.equal(false,isFromBellville("CA 123 567"))
})

});