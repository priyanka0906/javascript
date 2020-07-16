//  string

/* 
toLowercase()
toUpperCase()
charAt()
concat()
search() 
slice()
split()
startsWith()
endsWith()
indexOf()
lastIndexOf()
replace()
substr()
substring
trim()
*/
var str="The brown fox jumps over the lazy frog!!";
// search() : Searches a string for a specified value, or regular expression, and returns the position of the match
console.log(str.search("The"));

// slice : The slice() method extracts parts of a string and returns the extracted parts in a new string.
 var newStr = str.slice(0,20);
 console.log(newStr);

 // startsWith : The startsWith() method determines whether a string begins with the characters of a specified string.

//This method returns true if the string begins with the characters, and false if not.
console.log(str.startsWith("The"));

// replace(): The replace() method searches a string for a specified value, or a regular expression, and returns a new s

 var newstr=str.replace("frog","rat");
console.log(str);
console.log(newstr);

// substr() : The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.

var substring=str.substr(3,9);
console.log(substring);

// substring(): The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.

var text=str.substring(3,9);
console.log(text);

// trim() :The trim() method removes whitespace from both sides of a string.
var str2="        Hello World!!!!!!!!          ";
console.log(str2.length);
var str3=(str2.trim());
console.log(str3.length);
console.log(str3);

// Arrays
/*
fill()
filter()
find() : Returns the value of the first element in an array that pass a test
findIndex() : Returns the index of the first element in an array that pass a test
forEach():Calls a function for each array element
from()
indexOf()
join()
map()
lastIndexOf()
reduce():Reduce the values of an array to a single value (going left-to-right)
reverse()
slice()
sort()
splice()
*/
 
// fill(): The fill() method fills the specified elements in an array with a static value.
var fruits=['apple','mango','orange','banana'];
fruits.fill("kiwi");
console.log(fruits);

// from() : Creates an array from an object
var arr=Array.from("ABCDEF");
console.log(arr);

// indexOf(): The indexOf() method searches the array for the specified item, and returns its position.
var fruit=['apple','mango','orange','banana'];
console.log(fruit.indexOf("mango"));

// reverse() : The reverse() method reverses the order of the elements in an array.
fruit.reverse()
console.log(fruit);

// slice: he slice() method returns the selected elements in an array, as a new array object.
var f=fruit.slice(1,3);
console.log(f);

//sort(): The sort() method sorts the items of an array.By default, the sort() method sorts the values as strings in alphabetical and ascending order.
console.log(fruit.sort());

// slice():The splice() method adds/removes items to/from an array, and returns the removed item(s).
 fruit.splice(2,0,"kiwi","melon");  // adding elements
 console.log(fruit);

 console.log(fruit.splice(2,1)); //removing element

