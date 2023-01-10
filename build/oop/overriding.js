"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    sayHello() {
        console.log("Hello Player");
    }
    ohayo() {
        console.log("Ohayo");
    }
}
class Adventure extends Player {
    sayHello() {
        super.ohayo();
        console.log("Hello Adventure");
    }
}
let Re = new Adventure();
Re.sayHello();
