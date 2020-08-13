let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe("findItemsOver20", function () {
    it("should return ALL items with quantity greater than 20", function () {
        assert.deepEqual([
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
        ], findItemsOver20([
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
            { name: 'apples', qty: 3 },
        ]))
    });


});