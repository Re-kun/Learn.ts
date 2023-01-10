
// String
let name: string = "Re";
name = "Kazuto";

// Number
let age: number = 17;
age = 19;

// Boolean 
let isDied = false;
isDied = true;

// Any
let random: any = "Ohayo";
random = 7;
random = [];
random = true;
random = {};

// Array
let numbers: number[];
numbers = [1, 2, 3];

let strings: string[];
strings = ["Rem", "Kurumi", "Ayane"];

let randoms: any[];
randoms = ["Re", 19, true];

// Tuple
let player: [string, number, boolean];
player = ["Re", 19, false];

/*
 player = [19, "Re", false];        --> Error
 player = [19, "Re", false, "Yo"];  --> Error
*/

// Enum

// Numeric

enum Month {
  JAN = 1,
  FEB,
  MAR,
  APR
};

console.log(Month);

// String version
enum Month_v2 {
  JAN = "January",
  FEB = "February",
  MAR = "Maret",
  APR = "April"
};

console.log(Month_v2);

// Object
let user = {
  name: "Re",
  age: 17
}

user = {
  name: "Schwartz",
  age: 19
}

// Cara lain
type Player = {
  name: string,
  age: number,
  hp: number
}

let re: Player = {
  name: "Re",
  age: 19,
  hp: 10
}

// Union
let phone_number: number | string;
phone_number = 087741174222;
phone_number = "087741174222";
