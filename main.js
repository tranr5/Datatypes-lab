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

let x = 1;
while (x <= 10) {
  var msg = 'Item ' + x;  
	console.log(msg);  
	x++;
}