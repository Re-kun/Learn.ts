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
    _magic = "";
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
    // Setter 
    set magic(newMagic) {
        if (newMagic.length >= 7) {
            console.log("G boleh kepanjangan coi");
        }
        else {
            this._magic = newMagic;
        }
    }
    // Getter
    get magic() {
        return this._magic;
    }
}
let Re = new Healer("Re", "Healer", 7);
console.log(Re.getName());
Re.setName("Asuka");
console.log(Re.getName());
console.log(Re.getStatus());
console.log(Re);
Re.magic = "Add HP";
console.log(Re.magic);
