//console.log("table");
var n=prompt("enter number");

var text=document.querySelector("h3");

for(var i=1;i<=10;i++)
{
    line=`${n}  x  ${i} = ${n*i}  `;
    
    console.log(line);
    text.innerHTML+=line;
    text.innerHTML+="<br></br>";

}