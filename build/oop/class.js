"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    job;
    name;
    constructor(name, job) {
        this.job = job;
        this.name = name;
    }
}
let Re = new Player("Re", "Adventure");
console.log(Re);
