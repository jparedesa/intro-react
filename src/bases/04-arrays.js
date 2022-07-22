//const array = new Array();
const array = [1, 2, 3, 4];
//array.push(2);
//array.push(3);
//array.push(4);
//array.push(5);
//array.push(6);
//array.push(7);
console.log(array);

let arreglo2 = [...array, 5];
//arreglo2[arreglo2.length] = 8;

const arreglo3 = arreglo2.map( (value) => {
    return value * 2;
} );

console.log(array); 
console.log(arreglo2);
console.log(arreglo3);