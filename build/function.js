"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return `Hello ${name}`;
}
console.log(sayHello("Re"));
function getAge() {
    return 7;
}
function helloWorld() {
    console.log("Hello World");
}
helloWorld();
const Add = (val1, val2) => {
    return val1 + val2;
};
console.log(Add(2, 5));
// Default parameter
function sayHello_v2(waifu, name = "Wibu") {
    console.log(`${waifu} Sayang ${name}-kun >//<\n`);
}
sayHello_v2("Rem", "Re");
sayHello_v2("Ram");
// Optional parameter --> Just for string
const getFullName = (firstName, lastName) => {
    return `${firstName}-${lastName}`;
};
console.log(getFullName("Re", "kun"));
console.log(getFullName("Kazuto")); // --> Kazuto-undifined
