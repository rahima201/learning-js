// console.log("GOOD MORNING");
// console.log("GOOD MORNING");
// console.log("GOOD MORNING");
// console.log("GOOD MORNING");
// console.log("GOOD MORNING");

//for loop
// for (let count = 1; count <= 5; count++) {
//   console.log("GOOD MORNING"); //5 will execute
// }

// for (let i = 1; i <= 10; i++) {
//   console.log("Hello"); //10 will execute
// }
//
//
//
//
//print 1 to 5
// //---starting---stopcondition--updatation=>change
// for (let i = 1; i <= 5; i++) {
//   console.log("hello");
// }

//starting------------stopping condition
//i = 1   ===========> 1 <= 5---------------true
//i = 2   ===========> 1 <= 5---------------true
//i = 3   ===========> 1 <= 5---------------true
//i = 4   ===========> 1 <= 5---------------true
//i = 5   ===========> 1 <= 5---------------true
//i = 6   ===========> 1 <= 5---------------false
//when it gives false then we won't work with it anymore, it will ened there.
//so it will give ==> console.log("loop has ended");

//

//
//loop
// //1.calculate sum of 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum = sum + i; //1+2+3+4+5=15//sum = 15
// }
// console.log("sum =", sum);

// //2.calculate 1 to 10
// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//   sum = sum + i; //sum = 55
// }
// console.log("sum =", sum);

//3. calculate 1 to 5
// for (let i = 1; i <= 5; i++) {
//   // console.log("Good Morning");
//   console.log("i = ", i);
//   //outcome:
//   //i =  1
//   //i =  2
//   //i =  3
//   //i =  4
//   //i =  5
// }

//

//

//

//

//

// //while loop
// let i = 1;
// while (i <= 5) {
//   console.log("Good Morning");
//   i++;
// }

//whatever we do with for loop
//  we can do the same thing for while loop

// let a = 1;
// while (a <= 5) {
//   console.log("Good Evening");
//   a++;
// }

//do while loop 1.
// let i = 1;
// do {
//   console.log("Good Afteroon");
//   i++;
// } while (i <= 10);

//do while loop 2
// let a = 1;
// do {
//   console.log("a=", a); //output:a = 1, a = a, a = 3, a = 4, a = 5
//   a++;
// } while (a <= 5);

//

//

//for of loop:
// let str = "ApnaCollege";

// let length = 0;
// for (let i of str) {
//   console.log("i=", i);
//   length++;
// }
// console.log("string length=", length); //string length= 11

// for-in-loop
//create object first
// let student = {
//   name: "Ruhi",
//   age: 23,
//   cgpa: 4.5,
//   isPass: true,
// };
// //then use for in:
// for (let key in student) {
//   console.log("key", key, "value=", student[key]);
//   //outcome:
//   // key name value= Ruhi
//   // key age value= 23
//   // key cgpa value= 4.5
//   // key isPass value= true
// }

//

//

//practice questions
//print all even numbers from 0 to 100.
// for (let num = 0; num <= 100; num++) {
//   if (num % 2 === 0) {
//     //even number condition
//     console.log("num=", num); //even numbers: 0,2,4,6,8,10...........100
//   }
// }

// //print all odd numbers from 0 to 100.
// for (let num = 0; num <= 100; num++) {
//   if (num % 2 !== 0) {
//     //odd number condition
//     console.log("num=", num); //odd numbers: 1,3,5,7,9....99
//   }
// }

///

/*qs2. create a game where you start with any random game number. 
Ask the user to keep guession the game number until the user 
enters correct value */
// let gameNum = 25;

// //match the userNum with gameNum
// let userNum = prompt("Guess the game number: ");
// console.log(userNum);

// while (userNum != gameNum) {
//   userNum = prompt("You entered the wrong number. Guess again:");
// }

// console.log("congratulations, you entered the right number ");

// //

//
