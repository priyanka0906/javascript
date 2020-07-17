var num=prompt("Enter a number");

function odd_even(num){
    if(num%2==0)
    result="even";
    else
    result="odd";
    
    return result;

}

res=odd_even(num);
console.log(`The number entered is ${num} and Number is ${res}`);