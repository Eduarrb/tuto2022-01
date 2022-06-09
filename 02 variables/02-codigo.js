// ⚡⚡ STRINGS ⚡⚡
let nom1 = 'Juan';
let apellido = 'Salas';
console.log(nom1);
// que son un tipo de objeto
console.log(nom1.length);
console.log(nom1 + " " + apellido);
console.log(nom1.toUpperCase());
console.log(nom1.toLowerCase());

const apellidoMaterno = 'salazar "es de la mamá"';
console.log(apellidoMaterno);

// ⚡⚡ TEMPLATE STRINGS ⚡⚡ comillas invertidas, backticks
let oracion = 'Este es un bonito curso';
console.log(oracion);
// let ora2 = `el curso de javascritp esta interesante`;
// console.log(ora2);
let cursoNombre = 'Javascript';
let ora2 = `El curso ${cursoNombre} esta muy interesante`;
console.log(ora2);
console.log('******************************');
// ⚡⚡ BOOLEANS
// true || false
let mayorDeEdad = false;
let array1 = null;
// ⚡⚡Condicionales & operadores de comparacion
// =, ==, ===, !=, !==, <, <=, >, >=
if(array1){
    console.log('Puedes votar');
} else {
    console.log('No puedes votar');
}
console.log(1 == '1'); // COERCION
console.log(1 === '1');

let number1 = 13;
let number2 = '13';
if(number1 !== number2){
    console.log(`son diferentes`);
} else {
    console.log(`son iguales`);
}