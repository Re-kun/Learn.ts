"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Adventure {
    name;
    hp;
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
        console.log("===----- [ Hello World ] -----===");
    }
    getStatus() {
        console.log(`
    Name : ${this.name}
    Hp   : ${this.hp}
    `);
    }
    heal(newHp) {
        this.hp += newHp;
        console.log(`
    Hp: ${this.hp}   +${newHp}
    `);
    }
}
// Subclass of adventure class
class Thief {
    subclass;
    constructor(subclass) {
        this.subclass = subclass;
    }
    ;
    steal() {
        console.log("You get a dagger's enemy");
    }
    playerStatus() {
        this.subclass.getStatus();
    }
}
let Adventure_1 = new Adventure("Re", 10);
Adventure_1.getStatus();
Adventure_1.heal(7);
let Re = new Thief(Adventure_1);
Re.playerStatus();
Re.steal();
class Farmer {
    name;
    hp;
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }
    ;
}
let Farmer_1 = new Farmer("Hikari", 10);
// let Hikari_thief = new Adventure(Farmer_1); --> Error
