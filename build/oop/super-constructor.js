"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    job;
    name;
    constructor(name, job) {
        this.job = job;
        this.name = name;
    }
    setName(newName) {
        this.name = newName;
    }
    getName() {
        return this.name;
    }
}
class Healer extends Player {
    hp = 10;
    mp = 10;
    rank;
    // Super Constructor
    constructor(name, job, rank) {
        super(name, job);
        this.rank = rank;
    }
    // Multiple return method
    getStatus() {
        return {
            hp: this.hp,
            mp: this.mp
        };
    }
}
let Re = new Healer("Re", "Healer", 7);
console.log(Re.getName());
Re.setName("Asuka");
console.log(Re.getName());
console.log(Re.getStatus());
console.log(Re);
