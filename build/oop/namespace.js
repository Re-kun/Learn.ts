"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var example_of_namespace;
(function (example_of_namespace) {
    class Player {
        name;
        hp;
        constructor(name, hp) {
            this.name = name;
            this.hp = hp;
            console.log(`
      Name : ${this.name}  
      Hp   : ${this.hp}
                  `);
        }
        sayHello() {
            console.log("Hello", this.name);
        }
    }
    example_of_namespace.Player = Player;
    example_of_namespace.Re = new Player("Re", 10);
})(example_of_namespace || (example_of_namespace = {}));
let Hikari = new example_of_namespace.Player("Hikari", 10);
example_of_namespace.Re.sayHello();
