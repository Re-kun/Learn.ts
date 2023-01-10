interface Player {
  name: string;
  hp: number;
}

interface mage extends Player {
  mp: number;
}

class Re implements mage {
  public name: string = "Re";
  public hp: number = 10;
  public mp: number = 10;
}
