import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp/>', () => { 

    test('debe hacer match con el snapshot', () => { 
        const {container} = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
     })


    test('debe añadir una categoría si no existe', () => { 

        const newCategory = 'Dragon Ball';

        render(<GifExpertApp />);
        //screen.debug();

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(1);

        fireEvent.input( input, { target: { value: newCategory} });
        //screen.debug();
        fireEvent.submit( form );
        //screen.debug();
        
        expect( screen.getByText(newCategory) ).toBeTruthy();
        expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(2);
        
     })


     test('debe saltar la búsqueda si la categoría ya existe', () => { 

        const newCategory = 'One Punch';

        render(<GifExpertApp />);
        //screen.debug();

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        expect( screen.getByText(newCategory) ).toBeTruthy();
        expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(1);

        fireEvent.input( input, { target: { value: newCategory} });
        //screen.debug();
        fireEvent.submit( form );
        //screen.debug();
        
        expect( screen.getByText(newCategory) ).toBeTruthy();
        expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(1);

     })

 })