//console.log("hello");

var n=prompt("enter number");
for(var i=2;i<=n;i++)
{
    for(var j=2;j<=i;j++)
    {
       if(i%j==0)
       break;
    }
    if(i==j)
    {
        console.log(i);
    }
}