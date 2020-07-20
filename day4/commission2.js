//console.log("hello");
var sale=prompt("enter sale");
var com;
if(sale>100)
{

    sale>=0 && sale<=5000?com=2:sale>=5001 && sale<=10000?com=5:sale>=10001 && sale<=20000?com=7:com=10;
    console.log(com*sale/100);
}
else
sale=prompt("enter sale");
