//Funciones

//const saludo = function (nombre) {
//    return `HOla ${nombre}`
//}

const saludar = (nombre) => {
    return `HOla ${nombre}`
}

const saludar2 = (nombre) => `HOla ${nombre}`;

console.log(saludar('Vegeta'));
console.log(saludar2('Vegeta'));

const getUser = () => ({ uid:'ABC123', username:'maquina_de_fuego',});
const user = getUser();

console.log( user );


//Tarea
//1.- Transformar funcion flecha
//2.- Retornar obj implicito
//3.- Pruaba
//function getUsuarioActivo (nombre) {
//    return {
//        uid: 'ABC567',
//        username: nombre
//    }
//}

const getUsuarioActivo = (nombre) =>  ({
        uid: 'ABC567',
        username: nombre
    });

const usuarioActivo = getUsuarioActivo('Pablo');
console.log(usuarioActivo)