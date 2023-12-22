import { render,screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => {
    
    const gifItem = {
        id:"VXJWhaO7afRe",
        title:"One Punch Man GIF",
        url:"https://media1.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=890ce5c6ejm1cvxz8ly7p4dh5npg8qq9ynhepl51qh4np5t6&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    }

    test('debe hacer match con el snapshot', () => { 
        const {container} = render(<GifItem {...gifItem}/>);
        expect(container).toMatchSnapshot();
     })

     test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        
        
        render(<GifItem {...gifItem}/>);
        //screen.debug();
        /*
        expect(screen.getByRole('img').src).toBe(gifItem.url);
        expect(screen.getByRole('img').alt).toBe(gifItem.title);
        */
       const { alt, src} = screen.getByRole('img');
       expect(src).toBe(gifItem.url);
       expect(alt).toBe(gifItem.title);
      })

      test('debe de mostrar el título en el componente', () => { 
        
        
        render(<GifItem {...gifItem}/>);
        //screen.debug();
        expect(screen.getByText(gifItem.title)).toBeTruthy();
       
      })

 })