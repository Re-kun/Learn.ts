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
  public rank: number;

  // Super Constructor
  constructor(name: string, job:string, rank: number){
    super(name, job);
    this.rank = rank;
  }

  // Multiple return method
  getStatus (): { hp: number, mp: number} {
    return {
      hp: this.hp,
      mp: this.mp
    }
  }
}

let Re = new Healer("Re", "Healer", 7);

console.log(Re.getName());
Re.setName("Asuka");
console.log(Re.getName());

console.log(Re.getStatus());
console.log(Re);
