import { getHeroeById, getHeroesByOwner} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe( 'Pruebas en 08-imp-exp', () => {
    test( 'getHeroeById debe retornar un héroe por ID', () => {
        const id = 1;
        const hero = getHeroeById( id );
        expect( hero ).toEqual( {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        } );
        //se puede tener tantos expects como se necesite, si hay error, lo demuestra
    } );
    test( 'getHeroeById debe retornar un undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById( id );
        expect( hero ).toBeFalsy();
    } );

    //Tarea 1:
    //hacer getHeroesByOwner
    //Debe retornar un arreglo con los héroes de DC
    //Length === 3
    //toEqual al arreglo filtrado
    test( 'getHeroeByOwner debe regresar heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );
        
        expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ] );
    } );
    //Tarea 2:
    //Debe retornar un arreglo con los héroes de Marvel
    //length === 2
    test( 'getHeroeByOwner debe regresar heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );
        
        expect( heroes.length ).toBe( 2 );
        expect( heroes ).toEqual( heroes.filter( ( heroe ) => heroe.owner === owner ) );
        console.log( heroes );
    } );
} );
        