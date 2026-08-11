import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇

let user :string = " Usuario "

let numero : number = 127

let saludo : string = "Bienvenido "

console.log (saludo+user+numero);


// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();