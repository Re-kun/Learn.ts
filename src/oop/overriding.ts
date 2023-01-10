class Player {
  
  sayHello(): void {
    console.log("Hello Player");
  }

  ohayo(): void {
    console.log("Ohayo");
  }

}

class Adventure extends Player {
  sayHello(): void {
    super.ohayo();
    console.log("Hello Adventure");
  }
}

let Re = new Adventure();
Re.sayHello();
