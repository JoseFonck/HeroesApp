import {heroes} from '../data/heroes'


export const getHeroesByPublisher = ( publisher ) => {
    const heroesPublisher = ['Marvel Comics','DC Comics'];
    if ( !heroesPublisher.includes(publisher) ){
        throw new Error (`${publisher} is not valid value`)
    }
    return heroes.filter( heroe => heroe.publisher === publisher );

}