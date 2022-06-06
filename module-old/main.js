const hola = require('./hello.js');
const hello = require('./helloForName.js');

function main() {
  // llamar a la función hello
  console.log(hola);
  // Para ejecutar necesito ()
  console.log(hola());
  // llamar a la funcion
  // helloForName enviándole
  // un nombre
  const msg = hello('Misael');
  console.log(msg);
}

main();
