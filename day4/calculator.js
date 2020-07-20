//console.log("calculator");

var operator=prompt("which operation do you want to perform(enter 1:addition 2:subtraction 3:multiplication 4:division 5:squareroot ");

if(operator==1)
{
    var num1=prompt("enter number 1");
    var num2=prompt("enter number2");
    console.log(+num1+ +num2);
}
else if(operator==2)
{
    var num1=prompt("enter number 1");
    var num2=prompt("enter number2");
    console.log(num1-num2);
}

else if(operator==3)
{var num1=prompt("enter number 1");
var num2=prompt("enter number2");
    console.log(num1*num2);
}

else if(operator==4)
{var num1=prompt("enter number 1");
var num2=prompt("enter number2");
    console.log(num1/num2);
}

else if(operator==5)
{
    var num=prompt("enter a number");
    console.log(Math.sqrt(num));
}

