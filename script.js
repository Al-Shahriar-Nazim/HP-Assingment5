// --------------------------------------------------------------------
// ----------------------------part 01--------------------------------
// -------------------------------------------------------------------
// Qestion 1.1 : Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo";
console.log(carName);
// -------------------------------------------------------------------

// Question 1.2 : On one single line, declare three variables with the following names and values :
let firstName = "Shahriar ";
let lastName = "Nazim";
let age = 20;
/* So What Will Be The 1st Variable Name, Then 2nd Variable Values &
3rd Variable Name And Values Both! */
console.log(firstName);
console.log(lastName);
console.log(age);
// -------------------------------------------------------------------

// Question .13 : Use the correct assignment operator that will result in x being 50 (same as x = x * y).
let x = 10;
let y = 5;
x = x * y;
console.log("Ans is :", x);
// -------------------------------------------------------------------

// Question 1.4 : Use comments to describe the correct data type of the following variables:

let length = 16; // data type ?
let lastName1 = "Johnson"; // data type ?

const x1 = {
  firstName: "John",
  lastName: "Doe",
}; // data type ?

console.log("veriable  length data type is : ", typeof length);
console.log("veriable lastName data type is :", typeof lastName1);
console.log("variable x data type is : ", typeof x1);

// -------------------------------------------------------------------

// Question - 1.5
//  Execute the function named myFunction.

function myFunction() {
  alert("Hello World!");
  // sir alert mssage dekte html file index15 file e click korun
}

// call the function and see the output
myFunction();

// -------------------------------------------------------------------
/*
 Question 06 :
 Create an object called person with name = John, age = 50, Then,
access the object to alert("John is 50").
*/
const person = {
  name: "john",
  age: 50,
};
alert(person.name + " is " + person.age);
// -------------------------------------------------------------------

// Question : 07
// 1. The <button> element should do something when someone clicks on it. Try to fix it!

document.getElementById("myFun").addEventListener("click", function () {
  alert("clicked alert message show");
});
// -------------------------------------------------------------------
// Question : 09

//  1. Alert the number of items in an array, using the correct Array property:

const cars = ["Volvo", "Jeep", "Mercedes"];
console.log(cars[2]);

// 2. Change the first item of Brand to "Ford".

const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";
console.log(Brand);
// -------------------------------------------------------------------

// Question : 10

// 1. Choose the correct comparison operator to alert true, when x is greater than y.
x = 10;
y = 5;
if (x > y) {
  alert(true);
} else {
  alert(false);
}

// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
let age1 = 127;
console.log(age1 < 18 ? "Too yound" : "Old enough");

// --------------------------------------------------------------------
// ----------------------------part 02--------------------------------
// -------------------------------------------------------------------
//  Question 2.1 :
// Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.

function celsiusToFahrenheit(celsius) {
  let tempera = (celsius * 9) / 5 + 32;
  return tempera;
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(25)); // 77
// -------------------------------------------------------------------
// Question 2.2 :
// Write a function to check if a number is even. The function should take a single argument, which is the number to check.
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
// -------------------------------------------------------------------
// Question 2.3 :
// Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.

function sum(a, b) {
  let addNumber = a + b;
  return addNumber;
}

console.log(sum(3, 4)); // 7
console.log(sum(10, 20)); // 30

// -------------------------------------------------------------------
// Question 2.4 :
//  Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.

function findSmallestNum(arr) {
  let minimunNumber = Math.min(...arr);
  return minimunNumber;
}

console.log(findSmallestNum([3, 5, 1, 9])); // 1
console.log(findSmallestNum([-1, -5, 0, 10])); // -5

// -------------------------------------------------------------------
// Question 2.5 :
// Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let strVowelsCount = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      strVowelsCount++;
    } else {
    }
  }
  return strVowelsCount;
}

console.log(countVowels("hello world")); // 3
console.log(countVowels("Javascript")); // 3
// -------------------------------------------------------------------
// Question - 2.6 :

// Write a function to get the first element of an array. The function should take a single argument, which is the array.
function getFirstElement(arr) {
  let array = arr[0];
  return array;
}

console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
// -------------------------------------------------------------------
// Question 2.7 :
// Write a function to check if an array is empty. The function should take a single argument, which is the array.

function isArrayEmpty(arr) {
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isArrayEmpty([])); // true
console.log(isArrayEmpty([1, 2, 3])); // false
// -------------------------------------------------------------------
// Question 2.8 :
//  Write a function to return the factorial of a number. The function should take a single argument, which is the number.

function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  let number = num * factorialize(num - 1);
  return number;
}

console.log(factorialize(5)); // 120
console.log(factorialize(7)); // 5040
// -------------------------------------------------------------------
// Question 2.9 :
// Write a function to reverse a string. The function should take a single argument, which is the string to reverse.

function reverseString(str) {
  let strReverse = str.split("").reverse().join("");
  return strReverse;
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"
// -------------------------------------------------------------------
// Question : 2.10
// Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.

function toLowerCase(str) {
  let lowerCaseConvert = str.toLowerCase();
  return lowerCaseConvert;
}

console.log(toLowerCase("HELLO WORLD")); // "hello world"
console.log(toLowerCase("JavaScript")); // "javascript"
// -------------------------------------------------------------------
//  Question : 2.11
// Write a function to find the length of a string. The function should take a single argument, which is the string.

function stringLength(str) {
  let strCount = str.length;
  return strCount;
}

console.log(stringLength("hello")); // 5
console.log(stringLength("world")); // 5
// -------------------------------------------------------------------
// Queston 2.12 :
// Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.

function mergeArrays(arr1, arr2) {
  let arrConcat = arr1.concat(arr2);
  return arrConcat;
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]
// -------------------------------------------------------------------
// Question : 2.13
// Write a function to get the last element of an array. The function should take a single argument, which is the array.
function getLastElement(arr) {
  let count = arr[arr.length - 1];
  return count;
}

console.log(getLastElement([1, 2, 3])); // 3
console.log(getLastElement(["a", "b", "c"])); // "c"
// -------------------------------------------------------------------
// Question 2.14
// Write a function to get the first character of a string. The function should take a single argument, which is the string.
function getFirstCharacter(str) {
  let firstChar = str[0];
  return firstChar;
}

console.log(getFirstCharacter("hello")); // "h"
console.log(getFirstCharacter("world")); // "w"

// -------------------------------------------------------------------
//  Question : 2.15
// Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, -2, -3, -4])); // -10
console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
