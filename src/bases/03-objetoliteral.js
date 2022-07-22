const persona = {
    nombre: 'Pablo',
    apellido: 'Perez',
    edad: 25,
    direccion: {
        ciudad: 'CDMX',
        zip: 5225,
        lat: 25.25441581,
        lng: 66965995,
    }
};

console.log(persona)

const persona2 = { ...persona };
persona2.nombre = 'REF';

console.log( persona2 );
console.log(persona)