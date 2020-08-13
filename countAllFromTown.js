var countAllFromTown = function(regNumbersString, town){
    var regNumbersArray = regNumbersString.split(",");
    var fromThisTown = [];
    
    for( let i = 0 ; i < regNumbersArray.length ; i++){
      var finalRegNumber = regNumbersArray[i].trim();
      if(finalRegNumber.startsWith(town)){
     fromThisTown.push(finalRegNumber)}
    
    }
    return fromThisTown.length;
  };

  module.exports = countAllFromTown;