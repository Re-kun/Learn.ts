abstract class Player {
  abstract role: string;

  start(): void {
   console.log(`======----- [ Hello World ] -----=====`)
  }
}

class Adventure extends Player {
  role = "Adventure";
}

let Re = new Adventure();
console.log(Re.role);
Re.start();
