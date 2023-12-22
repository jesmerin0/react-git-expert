import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en getFigs()', () => { 

    test('debe de retornar un arreglo de gifs', async() => { 

        const gifs = await getGifs('One Punch');
        //console.log(gifs);

        //tiene más de un elemento
        expect(gifs.length).toBeGreaterThan(0);

        //comprobar la estructura del elemento con lo que nosotros necesitamos
        expect(gifs[0]).toEqual({
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String)
            });

     })

 })