import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

/*un hook es una función que regresa algo, en esta caso un objeto, y como solo utiliza y devuelve JS ponemos extensión js aunque podría ser jsx  */
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() =>{
        const newImages = await getGifs(category);
        //console.log(newImages);
        setImages(newImages);
        setIsLoading(false);
    }


    // para que solo se ejecute en la creación, no cada vez que repinte el componente porque se añaden elementos
    useEffect( () => {
        getImages();
    }, []);
    
    return {
        images,
        isLoading
    }
}
