//Async awai
//const getImagePromise = () => new Promise( (resolve) => resolve('HTTP') );
//getImagePromise().then(console.log)

const getImagen = async () => {
    try {
        const apikey='ZiPqknPq2zwWbvZYqp0PNf8eR0Ev2Fqf';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.warn(error)
    }
}

getImagen();



/*
peticionHttp
    .then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);


    })
    .catch(console.warn);*/