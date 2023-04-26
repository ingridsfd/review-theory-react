import { persona } from '../../src/base-pruebas/06-deses-obj';

describe( 'Pruebas en 06 deses-obj', () => {
    test( 'persona debe retornar un objeto', () => {
        const testPersona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        }
        const per = persona;
        expect( testPersona ).toStrictEqual( per );
    } )
} )