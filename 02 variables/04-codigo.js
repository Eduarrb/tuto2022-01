// ⚡⚡FUNCIONES DECLARATIVAS O LITERALES
// saludar();

function saludar() {
  // SCOPE, AMBITO, BURBUJA, CONTEXTO
  // console.log('Hola a todos');
  let edad = 16;
  if (edad >= 18) {
    console.log("puedes votar");
  } else {
    console.log("aun no tienes dni azul");
  }
}

saludar();

function sumar(a, b) {
  let res = a + b;
  console.log(res);
}

sumar(2, 3);

console.log("***********************");
function obtenerEdad(fechaNacimiento) {
  let res = 2022 - fechaNacimiento;
  return [res, 1, true];
}

console.log(obtenerEdad(1752));
// obtenerEdad(1972);
// let arrayedades = [];
// let edad = obtenerEdad(1652);
// arrayedades[1] = obtenerEdad(1975);
// console.log(arrayedades);

// ⚡⚡ FUNCTION EXPRESSIONS

const saludar2 = function (nombre) {
    return `hola ${nombre}`;
};
let saludo = saludar2('Pepito');
console.log(saludo);

// ⚡⚡ ARROW FUNCTIONS
const arrancar = () => {
    console.log('el carro esta en primera marcha');
}

arrancar();

const arrancar2 = (vehiculo, marca) => {
    console.log(`el vehiculo ${vehiculo} de marca ${marca} esta en 1ra marcha`);
}

arrancar2('toyota');

const arrancar3 = vehiculo => `el vehiculo ${vehiculo} esta en 1ra marcha`;

let respuesta3 = arrancar3('subaru');
console.log(respuesta3);