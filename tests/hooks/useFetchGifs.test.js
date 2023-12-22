import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => { 

    test('debe de regresar el estado inicial', () => { 

        const category = 'One Punch';
        const { result } = renderHook( () => useFetchGifs(category) )
        //console.log(result);
        const { images, isLoading } = result.current;
        
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
     })

     test('debe de retornar un arreglo de imágenes y el isLoading en false', async() => { 

        const category = 'One Punch';
        const { result } = renderHook( () => useFetchGifs(category) )
        
        //podemos poner un en el waitFor un parámetro para añadirle un timeout de espera máximo
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );
        
        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).not.toBeTruthy();
     })

 })