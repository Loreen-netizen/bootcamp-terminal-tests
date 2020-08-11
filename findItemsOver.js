var findItemsOver = function (objectListArray, threshold) {
    var listItemsOverThreshold = [];
    for (let i = 0; i < objectListArray.length; i++) {
        var listItemName = objectListArray[i];
        var listItemQuantity = objectListArray[i].qty;
        if (listItemQuantity > threshold) {
            listItemsOverThreshold.push(listItemName)
        };
    }
    return listItemsOverThreshold;
};

module.exports = findItemsOver;