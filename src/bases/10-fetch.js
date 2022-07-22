const apikey='ZiPqknPq2zwWbvZYqp0PNf8eR0Ev2Fqf';

const peticionHttp = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);


//peticionHttp.then( resp => {
//    console.log(resp);
//    resp.json().then( data => {
///        console.log(data)
//    });
//})
//.catch( console.warn )

peticionHttp
    .then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);


    })
    .catch(console.warn)