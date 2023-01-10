interface Player {
  name:string;
  hp: number;
  getStatus(): void;
  heal(newHp: number): void;
}

class Adventure implements Player {
  constructor(public name: string, public hp: number){
    console.log("===----- [ Hello World ] -----===");
  }

  getStatus(): void {
    console.log(`
    Name : ${this.name}
    Hp   : ${this.hp}
    `);
  }
  
  heal(newHp: number): void {
    this.hp += newHp;
    console.log(`
    Hp: ${this.hp}   +${newHp}
    `);
  }
}

// Subclass of adventure class
class Thief {
  constructor (public subclass: Adventure) {};

  steal (): void {
    console.log("You get a dagger's enemy");
  }

  playerStatus (): void {
    this.subclass.getStatus();
  }
}

let Adventure_1 = new Adventure("Re", 10);
Adventure_1.getStatus();
Adventure_1.heal(7);

let Re = new Thief(Adventure_1);
Re.playerStatus();
Re.steal();

// NPC
interface npc {
  name: string;
  hp: number;
}

class Farmer implements npc {
  constructor(public name: string, public hp: number){};
}

let Farmer_1 = new Farmer("Hikari", 10);
// let Hikari_thief = new Adventure(Farmer_1); --> Error
