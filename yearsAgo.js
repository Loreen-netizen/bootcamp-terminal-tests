var yearsAgo = function(year){
    var date = new Date ();
      var whichYear = date.getFullYear();
      var result = whichYear - (year) ; 
      return result                       };
    
module.exports = yearsAgo;    