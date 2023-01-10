"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    start() {
        console.log(`======----- [ Hello World ] -----=====`);
    }
}
class Adventure extends Player {
    role = "Adventure";
}
let Re = new Adventure();
console.log(Re.role);
Re.start();
