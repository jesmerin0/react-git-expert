import { fireEvent, render ,screen} from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory/>', () => { 

    test('debe de cambiar el valor de la caja de texto', () => { 

        render(<AddCategory onNewCategory={ () => {} } />); 
        const input = screen.getByRole('textbox');

        fireEvent.input( input, {target: {value: 'Saitama'}} );

        expect(input.value).toBe('Saitama');
        //screen.debug();

     })

     test('debe de llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue = 'Saitama';
        //funciones mock de jest, simulación de la función
        const onNewCategory = jest.fn();

        /*función inicial vacia de pruebas  () => {}  */

        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue} });
        //screen.debug();
        fireEvent.submit( form );
        //screen.debug();
        expect( input.value ).toBe('');

        //evaluar la función ha sido llamada
        expect( onNewCategory ).toHaveBeenCalled();
        //evaluar la función ha sido llamada solo una vez
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        //evaluar que la función ha sido llamada con el parámetro correcto
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);

      })

      test('no debe de llamar el onNewCategory si el input está vacío', () => { 
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const form = screen.getByRole('form');

        fireEvent.submit( form );
        
        //expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect ( onNewCategory ).not.toHaveBeenCalled();

       })

 })