interface Player {
  readonly name: string;
  readonly hp: number;
  waifu?: string;
}

let Re: Player = {name: "Re", hp: 19};
let Hikari: Player = {name: "Re", hp: 19, waifu: "Rem"};

console.log(Re);
console.log(Hikari);

// Hikari.name = "Kazuto"; --> Error
Hikari.waifu = "Kurumi";
console.log(Hikari);
