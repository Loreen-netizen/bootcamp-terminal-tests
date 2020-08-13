
var fromWhere = function(registrationNumber){

    if(registrationNumber ==="CY"){return "Bellville"}else 
    if(registrationNumber === "CJ"){return "Paarl"}else 
      if(registrationNumber==="CA"){return "Cape Town"}else
                                 {return "Some other place!"}
  };
  fromWhere();

  module.exports = fromWhere;