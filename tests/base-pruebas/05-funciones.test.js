import { getUser } from "../../src/base-pruebas/05-funciones";
import { getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe( 'Pruebas en 05-funciones', () => {
    test( 'getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        // console.log( user );

        expect( testUser ).toStrictEqual( user );

    } );

    test( 'getUsuarioActivo debe de retornar un objeto', () => {
        const name = 'Ingrid';

        const usuarioActivo = getUsuarioActivo( name );
        console.log( usuarioActivo );

        expect( usuarioActivo ).toStrictEqual(
            {
                uid: 'ABC567',
                username: name
            } );
    } );

} );