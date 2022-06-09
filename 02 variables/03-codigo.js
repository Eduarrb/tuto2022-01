// ⚡⚡ arrays ⚡⚡
// SON UN TIPO DE OBJETO
// lista de elementos, conjunto de elementos
//  se construyen bajo indices -> todo inicia desde 0
const array1 = [12, 12.6, 5, 3, 20];
console.log(array1.length);
console.log(array1[0]);
console.log(array1[4]);

console.log(array1[array1.length - 1]);

for(let contador = 0; contador < array1.length; contador++){
    if(array1[contador] === 20){
        console.log('felicidades tienes un curso con excelente nota');
    } else {
        console.log('esfuerzate un poco mas');
    }
}
