let assert = require("assert");
let allPaarl = require("../allPaarl");

describe("allPaarl", function(){
    it("should return all regNumbers from Paarl",function(){
        assert.deepEqual([ 'CJ 678 543', 'CJ 67890' ], allPaarl("CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864"))
    })
    it("should return all Paarl RegNumbers in array",function(){
        assert.deepEqual(["CJ 900"], allPaarl("CJ 900, CA 34567, CA 67890, CN 7864"))
    })
    
    });