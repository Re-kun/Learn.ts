"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    job;
    name;
    static waifu = "Rem";
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
    static sayHello(name) {
        console.log("Hello", name);
    }
}
console.log(Player.waifu);
Player.sayHello("Re");
