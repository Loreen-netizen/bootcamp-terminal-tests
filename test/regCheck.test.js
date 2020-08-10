let assert = require("assert");
let regCheck = require("../regCheck");

describe("regCheck", function(){
    it("should return true for a regNumber from Gauteng",function(){
        assert.equal(true,regCheck('DV 23 NB GP', 'GP'))
    })
    it("should return false for a regNumber matched with wrong town",function(){
        assert.equal(false,regCheck('DV 23 LP GP', 'MP'))
    })
    
    });