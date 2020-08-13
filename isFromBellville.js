var isFromBellville = function(registrationNumber){
    if( registrationNumber.startsWith("CY")){ 
      return true;
    }
    else{ 
     return false;
    }
  };
  module.exports  = isFromBellville;