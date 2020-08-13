let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe("countAllFromTown", function(){
    it("should return 3 for 3 regNumbers from Stellenbosch",function(){
        assert.deepEqual(3,countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'))
    });
    it("should return 1 for 1 regNumber from Stellenbosch",function(){
        assert.deepEqual(1,countAllFromTown('CL 124,CY 567,CA 345, CJ 456,CY 341','CL'))
    });
    
    
    });