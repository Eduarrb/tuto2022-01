// ⚡⚡ DATOS PRIMITIVOS
// JS tiene unas partes muy pero muy raras.
// NUMBERS
// STRINGS
// BOOL
// OBJECTS (object,  un tipo de objeto =>arrays, strings, nodeModules, HMTLModules)

// 1️⃣ Numbers
// ES5
var num1 = 1212321;
// var nombre = 'Juan';
// var bool1 = true;

//  ejemplo de los lenjuajes tipo C
// int num1 = 1324;
// string palabra = 'juan';

// ES6
// let y const
// let -> variables si cambian
// const -> constantes que son valores que no mutan o cambian

let num2 = 12.36;
console.log(num2);
num2 = 56.8
console.log(num2);
num2 = 3;
console.log(num2);

let num3 = 5;
console.log(num2 + num3);
// operaciones matematicas +, -, *, /, %, **
console.log(2 + '2'); // COERCION
console.log(2 + +'2'); 
console.log(2 + Number('2')); 

// RESIDUO %
console.log(10 % 4);
console.log(15 % 2);

// ** exponente
console.log(2 ** 3);

console.log(num2 + 2);
console.log(num2);
num2 = num2 + 2; 
num2 += 2;
console.log(num2);
num2 -= 4;
console.log(num2);
num2 *= 2; // num2 = num2 * 2
console.log(num2);
num2++;
console.log(num2);
num2--;
console.log(num2);

let res = 2 * 10 + 20;
console.log(res);
let res2 = 2 * (10 + 20);
console.log(res2);
console.log('******************************');
// Math
let res3 = 10.49;
console.log(Math.ceil(res3));
console.log(Math.floor(res3));
console.log(Math.round(res3));

let aleatorio = Math.random();
console.log(aleatorio); // 0 hasta 0.999999999999999
console.log(aleatorio * 10);
console.log(Math.ceil(aleatorio * 10));
