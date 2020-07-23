//console.log("hello");
const colors=['red','blue','yelllow','green','pink','skyblue','orange'];


doc=document.querySelector("body");
var i=0;
function change() {
   doc.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
  }
  setInterval(change, 5000);