//Desestructuracion de objetos

const persona = {
    nombre: 'Pablo',
    edad: 20,
    clave: 'l30n1d4s'
};

//Extrae la propiedad nombre y la asigna a la constante nombre2
/*const { nombre:nombre2 } = persona;

const { nombre, edad, clave } = persona;

console.log( nombre2 );
console.log( nombre );
console.log( edad );
console.log( clave );*/

const user = ( { edad, nombre, clave, rango = 'po' } ) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 121.61681,
            lng:-78.151818
        }
    }
};

const {nombreClave, anios, latlng } = user(persona);
//const {nombreClave, anios, latlng:{lat, lng} } = user(persona);
const {lat, lng} = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);