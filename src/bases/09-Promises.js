
import { getHeroById, getHeroesByOwner } from "./bases/08-Import-Export";

//const promesa = new Promise( ( result, reject ) => {
//    setTimeout(() => {
        
//        const hero = getHeroById(2);
//        result(hero);
        //reject('Mensajito de rechazo')
 //   }, 2000);
//} );

//promesa.then( (result) => {
//    console.log(result)
//} )
//.catch( (err) => {
 //   console.warn(err)
//})

const getHeroByIdAsync = (id) => {
    const promesa = new Promise( (resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroById( id );
            
            if (typeof p1 == 'undefined') {
                reject('No se encontro heroe')
            }else{
                resolve( p1 );
            }
        }, 2000);
    });

    return promesa;
}

getHeroByIdAsync(10).then( (result) => {
    console.log(result)
} )
.catch((err)=>{
    console.warn(err)
})