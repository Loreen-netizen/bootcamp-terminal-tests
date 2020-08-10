var regCheck = function(registration,town){
    if (registration.startsWith(town) || registration.endsWith(town))
      {return true}
    else {return false}
    };
    
    regCheck('CY189-012', 'CY');
 
module.exports = regCheck;
     
    
    
    
    
    
    
    
    