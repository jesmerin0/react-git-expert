import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        //console.log(target.value);
        setInputValue(target.value); 
    }

    const onSubmit = (event) =>{
        //para no propagar el evento y cargar el formulario
        event.preventDefault(); 

        const valueTrim = inputValue.trim();
        //limitar para que solo se guarde si tenemos un tamaño de mas de 1 caracter
        if(valueTrim.length<=1) return;

        //console.log(inputValue);
        //setCategories(categories => [inputValue,...categories]);
        onNewCategory(valueTrim);
        setInputValue(''); 
    }

  return (
    <form onSubmit={onSubmit} aria-label="form">
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}/>
    </form>        
  )
}


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}