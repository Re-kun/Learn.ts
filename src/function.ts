function sayHello(name: string): string {
  return `Hello ${name}`;
}

console.log(sayHello("Re"));

function getAge (): number {
  return 7;
}

function helloWorld(): void {
  console.log("Hello World");
}

helloWorld();

// Function as Type
type Tambah = (num1: number, num2: number) => number;

const Add: Tambah = (val1: number, val2: number) => {
  return val1 + val2;
}

console.log(Add(2,5));

// Default parameter
function sayHello_v2(waifu: string, name: string = "Wibu"): void {
  console.log(`${waifu} Sayang ${name}-kun >//<\n`);
}

sayHello_v2("Rem","Re");
sayHello_v2("Ram");

// Optional parameter --> Just for string
const getFullName = (firstName: string, lastName?:string): string => {
  return `${firstName}-${lastName}`;
}

console.log(getFullName("Re", "kun"));
console.log(getFullName("Kazuto"));   // --> Kazuto-undifined
