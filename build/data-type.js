"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// String
let name = "Re";
name = "Kazuto";
// Number
let age = 17;
age = 19;
// Boolean 
let isDied = false;
isDied = true;
// Any
let random = "Ohayo";
random = 7;
random = [];
random = true;
random = {};
// Array
let numbers;
numbers = [1, 2, 3];
let strings;
strings = ["Rem", "Kurumi", "Ayane"];
let randoms;
randoms = ["Re", 19, true];
// Tuple
let player;
player = ["Re", 19, false];
/*
 player = [19, "Re", false];        --> Error
 player = [19, "Re", false, "Yo"];  --> Error
*/
// Enum
// Numeric
var Month;
(function (Month) {
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 2] = "FEB";
    Month[Month["MAR"] = 3] = "MAR";
    Month[Month["APR"] = 4] = "APR";
})(Month || (Month = {}));
;
console.log(Month);
// String version
var Month_v2;
(function (Month_v2) {
    Month_v2["JAN"] = "January";
    Month_v2["FEB"] = "February";
    Month_v2["MAR"] = "Maret";
    Month_v2["APR"] = "April";
})(Month_v2 || (Month_v2 = {}));
;
console.log(Month_v2);
// Object
let user = {
    name: "Re",
    age: 17
};
user = {
    name: "Schwartz",
    age: 19
};
let re = {
    name: "Re",
    age: 19,
    hp: 10
};
// Union
let phone_number;
phone_number = 087741174222;
phone_number = "087741174222";
