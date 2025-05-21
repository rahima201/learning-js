//string  //index num starts from 0, 1, 2, 3, 4
// let str = "ApnaCollege ";
// console.log(str[1]); //p

// //template literals
// let specialString = `This is a template literal`;
// console.log(specialString);

// //object
// let obj = {
//   item: "pen",
//   price: 10,
// };
// console.log("the cost of", obj.item, "is", obj.price, "dollars ");

// // string
// let str = "ApnaCollege";
// let newStr = str.toUpperCase();
// console.log(str);
// console.log(newStr);
//trim
// let str1 = "       I      am   learning       JS     ";
// console.log(str1.trim());
// //slice
// let str2 = "01234567";
// console.log(str2.slice(1, 6));
// //slice
// let str3 = "hello";
// console.log(str3.slice(0, 3)); //hel
// //slice
// let str4 = "hello";
// console.log(str4.slice(3)); //lo
// Concat
// let str5 = "apna";
// let str6 = "college";

// let res = " I am learning coding from" + str5 + str6;
// console.log(res);

// //replace
// let str = "hello";
// console.log(str.replace("he", "o"));
////charAt==>indexes
// let str7 = "IloveJS";
// console.log(str7.charAt(0)); //i

//practice question 1
/*1. prompt the user to enter their full name. Generate a username for 
// them based on their input. start username with @, followed by their 
// full name and ending with the fullname length*/

let fullName = prompt("enter your fullname without spaces");

let username = "@" + fullName + fullName.length;
console.log(username);
