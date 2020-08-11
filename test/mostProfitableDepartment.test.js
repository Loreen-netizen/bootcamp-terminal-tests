let assert = require("assert");
let mostProfitableDepartment = require("../mostProfitableDepartment");

describe("mostProfitableDepartment", function () {
    it("should return department with highest sales", function () {
        assert.deepEqual('hardware', mostProfitableDepartment([
            {department: 'hardware', sales: 4500, day: 'Monday'},
            {department: 'outdoor', sales: 1500, day: 'Monday'},
            {department: 'carpentry', sales: 5500, day: 'Monday'},
            {department: 'hardware', sales: 7500, day: 'Tuesday'},
            {department: 'outdoor', sales: 2505, day: 'Tuesday'},
        ]))
    });

    it("should return d'outdoor' department", function () {
        assert.deepEqual('outdoor', mostProfitableDepartment([
            {department: 'hardware', sales: 4500, day: 'Monday'},
            {department: 'outdoor', sales: 11500, day: 'Monday'},
            {department: 'carpentry', sales: 5500, day: 'Monday'},
            {department: 'hardware', sales: 7500, day: 'Tuesday'},
            {department: 'outdoor', sales: 24505, day: 'Tuesday'},
        ]))
    });


});