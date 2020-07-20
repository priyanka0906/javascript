//console.log("hello");

var sale=prompt("Enter sale");
var commission;
if(sale>=0 && sale<=5000)
commission=2;
else if(sale>=5001 && sale<=10000)
commission=5;
else if(sale>=10001 && sale<=20000)
commission=7;
else 
commission=10;

console.log(commission*sale/100);
