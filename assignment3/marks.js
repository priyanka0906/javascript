marks=prompt("Enter your marks");

// using conditional statements

if(marks>=80)
grade='A';
else if(marks<80 && marks>=60)
grade='B';
else if(marks<60 && marks>=40)
grade='C';
else if(marks<40 && marks>=20)
grade='D';
else
grade='E';

console.log(`Marks are ${marks} and grade is ${grade}`);


// using ternary operator
/*marks>=80?grade='A':
(marks<80 && marks>=60)?grade='B':
(marks<60 && marks>=40)?grade='C':
(marks<40 && marks>=20)?grade='D':grade='E';


console.log(`Marks are ${marks} and grade is ${grade}`);
*/