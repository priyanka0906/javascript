//console.log("hello");
let n=prompt("enter a number");
var arr=[];
for(var i=1;i<=n;i++)
  arr.push(i);

odd_num=arr.filter((x)=>{
    return x%2===1;
})

console.log(odd_num);

cubes=odd_num.map((num)=>{
    return num**3;
})

console.log(cubes);