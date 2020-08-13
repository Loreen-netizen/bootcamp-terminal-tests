let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe("findItemsOver", function () {
    it("should return ALL items with quantity greater than threshold of 30", function () {
        assert.deepEqual([
            { name: 'pears', qty: 37 },
        ], findItemsOver([
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
            { name: 'apples', qty: 3 },
        ],30))
    });


});