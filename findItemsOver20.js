var findItemsOver20 = function (objectListArray) {
    var listItemsOver20 = [];
    for (let i = 0; i < objectListArray.length; i++) {
        var listItemName = objectListArray[i];
        var listItemQuantity = objectListArray[i].qty;
        if (listItemQuantity > 20) {
            listItemsOver20.push(listItemName)
        };
    }
    return listItemsOver20;
};




var findItemsOver = function (objectListArray, threshold) {
    var listItemsOverThreshold = [];
    for (let i = 0; i < objectListArray.length; i++) {
        var listItemName = objectListArray[i];
        var listItemQuantity = objectListArray[i].qty;
        if (listItemQuantity > threshold) {
            listItemsOverThreshold.push(listItemName)
        };
        console.log(listItemsOverThreshold);
    }
    return listItemsOverThreshold;
};

module.exports = findItemsOver20;









