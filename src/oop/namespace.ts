namespace example_of_namespace {
  export class Player {
    constructor (public name: string, public hp: number){
      console.log(`
      Name : ${this.name}  
      Hp   : ${this.hp}
                  `);
    }

    sayHello(): void {
      console.log("Hello",this.name);
    }
  }
  export let Re = new Player ("Re", 10);
}

let Hikari = new example_of_namespace.Player("Hikari", 10);
example_of_namespace.Re.sayHello();
