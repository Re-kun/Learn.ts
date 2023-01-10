class Player {
  public name: string;

  constructor(name: string, public job: string) {
    this.name = name;
  }
}

let Re = new Player("Re", "Adventure");
console.log(Re)
