class Player {
  public name: string;

  static waifu: string = "Rem";

  constructor(name: string, public job: string) {
    this.name = name;
  }

  setName (newName: string): void {
    this.name = newName;
  }

  getName (): string {
    return this.name;
  }

  static sayHello(name: string): void {
    console.log("Hello", name);
  } 
}

console.log(Player.waifu);
Player.sayHello("Re");
