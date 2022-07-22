//import { heroes } from "./data/heroes";
//import { heroes } from './data/heroes';

import heroes, { owners } from "../data/heroes";

//console.log(heroes);

const getHeroById = (id) => heroes.find( data => {   return (data.id === id) });

const getHeroesByOwner = (owner) => heroes.filter( heroe => {   return (heroe.owner === owner) });

//console.log(getHeroById(2));
//console.log(getHeroesByOwner('DC'));

export {
    getHeroById,
    getHeroesByOwner
}