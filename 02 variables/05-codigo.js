// ⚡⚡ OBJECTS
let nombre = 'juan'; // -> tipo de objeto
let personajes = ['Joshi', 'mario', 'Ryo'] // -> tipo de objeto

/*******************************/

const celular = {
    // propiedades y caracteristicas
    // key - value pair
    marca: 'Iphone',
    modelo: '13',
    color: 'Space Gray',
    camaraFrontal: '12mpx',
    pantalla: {
        tipo: 'IPS',
        resolucion: '2024x1440',
        size: '6.5 pulgadas' 
    },
    accesorios: ['cable lightning', 'cargador', 'audifonos', 'stikers'],
    desbloqueado: true,
    precio: 4999.99,


    tomarSelfie: function(){
        console.log(`el iphone ${this.modelo} esta tomando foto`);
    },

    sumar: () => {
        console.log(`el iphone ${this.modelo} esta sumando`);
    }
}
celular.tomarSelfie();
celular.sumar();
// console.log(celular);
// console.log(celular.accesorios);
// console.log(celular.pantalla.tipo);
// celular.tomarSelfie();
// console.log(`el precio es de: ${celular.precio}`)


console.log('********************************');

// 💥💥 PARA CONSTRUIR OBJETOS
class vehiculo {
    constructor(marca, modelo, year, color){
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
    }

    arrancar(){
        console.log(`el vehiculo ${this.modelo} ya arranco`);
    }

    prenderLuces = () => {
        console.log(`el vehiculo ${this.marca} encendio sus luces`);
    }
}

console.log(this);
const suzuki = new vehiculo('suzuki', 'z2022-b12', '2022', 'azul');
console.log(suzuki);
// suzuki.arrancar();
suzuki.prenderLuces();
// const yaris = new vehiculo('toyota', 'yaris', '1980', 'blanco');
// console.log(yaris)
// yaris.arrancar();