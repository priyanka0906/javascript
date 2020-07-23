//console.log("hello");
function Clock(){
    var date=new Date;
    var time=date.toLocaleTimeString();
    clock.innerHTML=time;
}

setInterval(Clock,1000);
var name=prompt("enter your name");

var text=document.querySelector('h1');
var clock=document.querySelector('h2');

  
text.innerHTML= `Welcome ${name}!!`;

function myfunc(){
    var element=document.body;
    element.classList.toggle("dark");
}