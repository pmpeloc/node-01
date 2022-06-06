// import * as hola from './hello';
import hello from './hello.js';
// import { helloForName as holaNombre } from './helloForName.js';
import { helloForName } from './helloForName.js';

function main() {
  // llamar a la función hello
  console.log(hello);
  // Para ejecutar necesito ()
  console.log(hello());
  // llamar a la funcion
  // helloForName enviándole
  // un nombre
  const msg = helloForName('Misael');
  console.log(msg);
}

main();
