const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = personajes;
console.log( p3 );

const retornaArreglo = () => { return ['ABC', 123] }
const [ letras, numeros ] = retornaArreglo();

console.log(letras);
console.log(numeros);

const funcprueba = (valor) => {
    return [ valor, () => { console.log('HOla Mondo'); } ]
}

const [ nombre, setNombre ] = funcprueba('GOKU');
console.log(nombre);
setNombre();