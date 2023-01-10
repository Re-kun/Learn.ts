class Player {
  public name: string;

  constructor(name: string, public job: string) {
    this.name = name;
  }

  setName (newName: string): void {
    this.name = newName;
  }

  getName (): string {
    return this.name;
  }
}

class Healer extends Player {
  public hp: number = 10;
  public mp: number = 10;

  // Multiple return method
  getStatus (): { hp: number, mp: number} {
    return {
      hp: this.hp,
      mp: this.mp
    }
  }
}

let Re = new Healer("Re", "Healer");

console.log(Re.getName());
Re.setName("Asuka");
console.log(Re.getName());

console.log(Re.getStatus());
