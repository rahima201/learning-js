// let marks = [97, 82, 75, 64, 36];
// console.log(marks);
// console.log(marks.length); //length property storeds

// let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];
// console.log(heroes);

// //indexes
// marks[0];
// 97;
// marks[1];
// 82;
// marks[2];
// 75;
// marks[3];
// 64;
// marks[4];
// 36;
// //to change array values
// [97, 82, 75, 64, 36];
//0///1///2///3///4
// let's change
//marks[2] = 66
//updated: [97, 82, 75, 66, 36]
//string => are immutable means cannot be change
//arrays => are mutable means can be change

//1. looping over an array
//*print all elements in array
let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];

//using for loop
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

// //using for of
// for (let hero of heroes) {
//   console.log(hero);
// }

//2. looping over an array
let cities = ["warren", "detroit", "hamtramck", "sterling", "troy"];

//using for loop
for (let city of cities) {
  //   console.log(city);

  //to make it Uppercase:
  console.log(city.toUpperCase());
}

//practice question 1
/*for a given array with marks of students -> [85, 97, 44, 37, 76, 60]
find the average marks of the entire class*/
let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;

for (val of marks) {
  sum += val;
}

let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);

//practice question 2
/*for a given array with prices of 5 times -> [250, 645, 300, 900, 50]
All items have an offer of 10% off on them . Change the array to store final ptice after applying offer*/
let items = [250, 645, 300, 900, 50];
