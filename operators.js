//this code prints hello world
//double slash for single line
// this is for multi line /* */
// console.log("Hello World");

//artimetic operators
// let a = 5;
// let b = 2;

// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b);

//unary operator
// let a = 5;
// let b = 2;

// console.log("a", a, " & b = ", b);
// console.log("a-- =", a--);
// console.log("a =", a);

//assignment operator
// let a = 5;
// let b = 2;

// a += 4; //a = a + 4
// console.log("a = ", a); //a = 9

// a -= 4; //a = a - 4
// console.log("a = ", a); //a = 5

// a /= 4; //a = a / 4
// console.log("a = ", a); //a = 1.25

// a *= 4; //a = a * 4
// console.log("a = ", a); //a = 5

// a %= 4; //a = a % 4
// console.log("a = ", a); //a = 1

//comparison operators
// let a = 5;
// let b = 2;

// console.log("5 === 2", a == b); //false
// console.log("5 == 2", a == b); //false
// console.log("5 > 2", a > b); //true
// console.log("5 < 2", a < b); //false
// console.log("5 >= 2", a >= b); //true

//logical operators
// let a = 6;
// let b = 5;

// let cond1 = a > b; //true
// let cond2 = a === 6; //true
// console.log("cond1 && cond2 = ", cond1 && cond2); //true
// console.log("cond1 || cond2 = ", a < b || a === 6); //true
// console.log("!(6<5)= ", !(a === 6)); //true

//conditional statements

// let age = 18;
// let mode = "dark";
// let color;

// if (mode === "dark") {
//   color = "black";
// }

// if (mode === "light") {
//   color = "white";
// }

// console.log(color);

//if statement
// let age = 25;
// if (age > 18) {
//   console.log("you can vote");
// }

// if (age > 18) {
//   console.log("you cannot vote");
// }

// //if else-statement
// let age1 = 25;

// if (age >= 18) {
//   console.log("vote");
// } else {
//   console.log("not vote");
// }

// //odd or even
// let num = 10;

// if (num % 2 === 0) {
//   console.log("even"); //10 is even
// } else {
//   console.log("odd");
// }

//syntax => rules

// //else if statement
// let mode = "silver";
// let color;

// if (mode === "dark") {
//   color = "black";
// } else if (mode === "blue") {
//   color = "blue";
// } else if (mode === "pink") {
//   color = "pink";
// } else {
//   color = "white";
// }

// console.log(color);

// // ternary operators
// // let age = 25;   //adult
// let age = 16; //not adult

// let result = age >= 18 ? "adult" : "not adult";
// console.log(result); //adult

//practice 1
// alert("hello"); //one time popup

// let name = prompt("hello");
// console.log(name);

// let num = prompt("enter a number:");

// if (num % 5 === 0) {
//   console.log(num, "is multiple of 5");
// } else {
//   console.log(num, "is not a multiple of 5");
// }

//practice question2

let score = 60;
let grade;

if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 0 && score <= 49) {
  grade = "F";
}
console.log("according to your score, your grade was:", grade);
