var mostProfitableDepartment = function(salesDataArray){
    var totalSalesMap = {};
    var highestSales = 0;
    var highestSellingDept = " ";
    for( let i = 0 ; i < salesDataArray.length ; i++){
    var eachDept = salesDataArray[i].department;
    var eachDeptSales = salesDataArray[i].sales;
      if(totalSalesMap[eachDept] === undefined){totalSalesMap[eachDept] = 0}
    else {totalSalesMap[eachDept] += eachDeptSales};
      //console.log(totalSalesMap);
    // console.log(totalSalesMap[eachDept])
    }
    for( let eachDept in totalSalesMap){
    if ( totalSalesMap[eachDept] > highestSales){ 
      highestSales = totalSalesMap[eachDept];
   highestSellingDept = eachDept}
      //console.log(highestSellingDept);
    }
      return highestSellingDept;
    };
  
  module.exports = mostProfitableDepartment;
  
  
  
  
  
  
  
  