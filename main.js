let myFavoriteNumber = 4

// console.log(myFavoriteNumber)
// let myNumber = 10
// myNumber = myNumber - 4
// myNumber = myNumber * 3
// myNumber = myNumber / 6

// console.log(myNumber)

let a = 4;
let b = 53;
let c = 57;
let d = 16;
let e = "Kevin";

// a _ b;
// let sevenA = (e !== 'Kevin');
// console.log(sevenA)

const array1 = ["Marty Marion", "Marty Feldman", "Marty McFly", "Marty Marion"];
const array2 = [
  ["Marty Feldman", "Marty Marion"],
  ["Marty Stuart", "Marty McFly"],
  ["Marty Jannetty", "Marty Robbins"],
];
const array3 = [
  ["Marty Feldman", ["Marty Marion"]],
  ["Marty Stuart", ["Marty Janetty", ["Marty McFly"], "Marty Robbins"]],
];

// retrieve from array 1
let martyArray1 = array1[2];
// console.log(martyArray1)
// retrieve from array 2
let martyArray2 = array2;
// retrieve from array 3
let martyArray3 = array3;

const array4 = ["a", "b", "c", "d", "e"];
let retrieveArray = array4[3];
// console.log(retrieveArray)

const thom = ["Thom", 1000, "Christchurch"];
const karolin = ["Karolin", 16, "New York"];
const kristyn = ["Kristyn", 5, "Pittsburgh"];
const cathleen = ["Cathleen", 186, "New York"];

let index = thom.indexOf("Thom") 
// this is finding the index THOM in the array
// new value for array i want to replace it with
thom[index] = "Gameboy";
// now i want to replace it here
// console.log(thom)
let age = karolin.indexOf(16);
karolin[age] = 17
// console.log(karolin)

kristyn.splice(1,1);
// console.log(kristyn)

// let x = 1;
// while (x <= 10) {
//   var msg = 'Item ' + x;  
// 	console.log(msg);  
// 	x++;
// }
// example of going through number

// let colors = ['red', 'white', 'blue'];
// for (let idx = 0; idx < colors.length; idx++) {
//   console.log(colors[idx]);
// }

// let dataSet = [1,2,3]
// for (let idx = 0; idx < dataSet.length; idx++)
// console.log(dataSet[idx])

// let word = '';
// let words = [];
// while (true) {
//   word = prompt('Enter a word ("end" to quit)');
//   if (word === 'end') break;
//   words.push(word);
//   alert("You've entered: " + words.join(', '));
// }

// if else statements
// let word = prompt('Enter a long word');
// if (word.length>10) {
// 	console.log('My, my, that is a long word...');
// } else {
// 	console.log('Well, that is pretty good, but it\'s no "supercalifragilisticexpialidocious"');
// }

// while loops evaluate a condition as well
// let x = 0;
// while (x <= 10) {
//   var msg = 'Item ' + x;  
// 	console.log(msg);  
	// x++; /// without this code to increment x the variable can never be greater than 10
// console.log("js loaded")

// let word = '';
// let words = [];
// while (true) {
//   word = prompt('Enter a word ("end" to quit)');
//   if (word === 'end') break;
//   words.push(word);
//   alert("You've entered: " + words.join(', '));
// }

let color = prompt("what color is the light?")
let reaction = ''
if (color === "green") {
    reaction = "gp-o"}

    else if (color === "yellow") {
        reaction = "slow"  
    }

    else if (color === "red") {
        reaction = "stop"  
    }

    else {
        reaction = "pick a real color"
    }

console.log(reaction)



////////////////////////////////////
// READ THE INSTRUCTIONS BELOW BEFORE STARTING!
////////////////////////////////////
/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * The loops are wrapped in functions for testing purposes. Please do not modify the names of the functions.
 *
 * Test your output in the browser by commenting in and out the function call (aka invocation), e.g., "prompt1()"
 *
 */

/*
 * Prompt 1:
 *
 * Create a loop that counts from 0 to 10, printing each number (including 0 and 10).
 */

// The first one has been done for you as an example!
function prompt1() {
    for (let i = 0; i <= 10; i++) {
      console.log(i);
    }
  }
  
  // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
  // prompt1()
  
  // 🌟 MAKE A COMMIT: "Complete prompt 1"
  
  /*
   * Prompt 2:
   *
   * Create a loop that prints every even number BETWEEN 0 and 100 (not including 0 or 100).
   */
  
  function prompt2() {
    // YOUR CODE HERE
  }
  
  // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
  // prompt2();
  
  // 🌟 MAKE A COMMIT: "Complete prompt 2"
  
  /*
   * Prompt 3:
   *
   * Create a loop that counts from -5 to 5, printing each number (including -5 and 5).
   */
  
  function prompt3() {
    // YOUR CODE HERE
  }
  
  // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
  // prompt3()
  
  // 🌟 MAKE A COMMIT: "Complete prompt 3"
  
  /*
   * Prompt 4:
   *
   * Create a loop that counts down from 10 to 0, printing each number (including 10 and 0).
   */
  
  function prompt4() {
    // YOUR CODE HERE
  }
  
  // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
  // prompt4()
  
  // 🌟 MAKE A COMMIT: "Complete prompt 4"
  
  /*
   * Prompt 5:
   *
   * Create a loop that counts down from 5 to -5, printing each number (including 5 and -5).
   */
  function prompt5() {
    // YOUR CODE HERE
  }
  
  // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
  // prompt5()
  
  // 🌟 MAKE A COMMIT: "Complete prompt 5"
  
  /*
   * Prompt 6:
   *
   * Create a loop that counts from 0 to 50 (inclusive) in multiples of 2 (instead of 1),
   * printing each number.
   */
  
  function prompt6() {
    // YOUR CODE HERE
  }
  
  // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
  // prompt6()
  
  // 🌟 MAKE A COMMIT: "Complete prompt 6"
  
  /*
   * Prompt 7:
   *
   * For the numbers 0 - 100 (inclusive), print out "I found a [ number ]. High five!" if the
   * number is a multiple of five.
   *
   * Sample Output IN THE BROWSER:
   *   - I found a 5. High five!
   *   - I found a 10. High five!
   */
  function prompt7() {
    // YOUR CODE HERE
  }
  
  // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
  // prompt7()
  
  // 🌟 MAKE A COMMIT: "Complete prompt 7"
  
  /*
   * Prompt 8:
   *
   * Create a variable called someNumber and assign it a random number between
   * 0 and 100 (not inclusive). Hint: Use Math.random so that it generates a new number every time the code is run!
   *
   * Create a conditional that matches these requirements:
   *   - if someNumber is less than 30, print "That's a small number!"
   *   - if someNumber is between 30 and 60, print "The number is medium sized."
   *   - if someNumber is greater than 60, print "We got a big one!"
   */
  
  //  define someNumber here
  var someNumber;
  
  function prompt8() {
    // print someNumber to the console in your function so you can see its value
    console.log(someNumber);
  
    // YOUR CODE HERE
  }
  
  // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
  // prompt8();
  
  // 🌟 MAKE A COMMIT: "Complete prompt 8"
  
  /*
   * Prompt 9:
   *
   * Iterate over the starWars array printing each character's name and index
   *
   * i.e.:
   *  0. Han
   *  1. C3PO
   *  2. R2D2
   */
  
  const starWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
  
  function prompt9() {
    // YOUR CODE HERE
  }
  
  // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
  // prompt9();
  
  // 🌟 MAKE A COMMIT: "Complete prompt 9"
  
  /*
   * Prompt 10:
   *
   * Write a loop that pushes every even number between 0 and 100 into an array,
   * then print the array.
   */
  function prompt10() {
    const myArray = [];
    // YOUR CODE HERE
  
    // don't forget to return the array after pushing the numbers into it so you can see it in the browser!
    // return the array
    return myArray;
  }
  
  // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
  // console.log(prompt10());
  
  // 🌟 MAKE A COMMIT: "Complete prompt 10"
  
  /*
   * Prompt 11:
   *
   * Find the median number in the following nums array (the mid point), then
   * console.log that number. The median number is the middle number in a SORTED list of numbers. Think through the steps you'll need to take to determine this number with code!
   *
   * Hint: What does Math.floor() do?
   */
  
  let nums = [
    14,
    11,
    16,
    15,
    13,
    16,
    15,
    17,
    19,
    11,
    12,
    14,
    19,
    11,
    15,
    17,
    11,
    18,
    12,
    17,
    12,
    71,
    18,
    15,
    12,
  ];
  
  function prompt11() {
    let median;
    // YOUR CODE HERE
  
    console.log(median);
  }
  // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
  // prompt11();
  
  // 🌟 MAKE A COMMIT: "Complete prompt 11"
  
  /*
   * Prompt 12:
   *
   * Did you know that you can nest loops? The catch is that you have to use
   * different incrementers (normally i) in the inner vs. outer loops. You'll commonly see developers use
   * another 1-letter incrementer (j, k, l, etc).
   *
   * Create an "outer" loop that counts up from 1 to 10 with an incrementer of i.
   * Create an "inner" loop that counts from 11 to 20 with an incrementer of j.
   * Inside the inner loop, print `i: ${i} / j: ${j}`
   * You might need to consult Google to see examples of nested for loops!
   */
  
  function prompt12() {
    // YOUR CODE HERE
  }
  
  // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
  // prompt12();
  
  // 🌟 MAKE A COMMIT: "Complete prompt 12"
  
  /*
   * Prompt 13:
   *
   * Using nested loops, print all the values inside the nested arrays.
   */
  
  let nestedArrays = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
  ];
  
  function prompt13() {
    // YOUR CODE HERE
  }
  
  // COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
  // prompt13();
  
  // 🌟 MAKE A COMMIT: "Complete prompt 13"
  
  ///////////////////////////////////////////
  // DO NOT MODIFY CODE BENEATH THIS LINE :)
  ///////////////////////////////////////////
  if (!this.window) {
    module.exports = {
      prompt1,
      prompt2,
      prompt3,
      prompt4,
      prompt5,
      prompt6,
      prompt7,
      someNumber,
      prompt8,
      prompt9,
      prompt10,
      prompt11,
      prompt12,
      prompt13,
    };
  }