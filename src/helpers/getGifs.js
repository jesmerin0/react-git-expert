export const getGifs = async(category) =>{
    /*llamada http para traer imágenes de gifs de la categoría */
    const apiKey = 'Ma1nGfk6lgJWl7LwllOfADfEzU8S9YL9';
    /*
        https://api.giphy.com/v1/gifs/search?api_key=Ma1nGfk6lgJWl7LwllOfADfEzU8S9YL9&q=valorant&limit=20
    */
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    //console.log(data);

    //console.log(url);

    const gifs = data.map(img=>(
        {
            id: img.id,
            title: img.title,
            url:img.images.downsized_medium.url,
        }
    ))

    //console.log(gifs);
    return gifs;
}