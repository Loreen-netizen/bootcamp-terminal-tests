var allPaarl = function (listOfRegNumbers) {

    var paarl = [];
    var list = listOfRegNumbers.split(", ");
    for (var i = 0; i < list.length; i++) {
        if (list[i].startsWith("CJ")) {
            paarl.push(list[i])
        }
    }
    return paarl;
}
module.exports = allPaarl;
