
//promesa: es lo mismo que la vida real... si yo les primeto algo por ejemplo que el gato este vivo todas estaran fecies y si el gato muere todas estaran triste

//estan en tres estados:
//completa- rechazada- en espera

const fetch = require('fetch');
const fetchUrl = fetch.fetchUrl;
const fs = require('fs');

let myFirstPromise = Promise.resolve('Hola mundo');

myFirstPromise.then(response => {
    console.log('UNO', response)
});

let mySecondPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(5), 200);
})

// mySecondPromise.then(res => {
//     res+=9;
//     console.log('DOS', res);
// });


// fetchUrl a un sitio
const getData = (url) => {
    return new Promise ((resolve, reject) => {
        fetchUrl(url, (error, meta, body) => {
            if(meta){
                if(meta.status == 200) {
                    resolve(meta.status.toString());
                }
            } else {
                reject(error);
            }
        })
    })
}

let url = 'https://www.google.com/';

// getData(url)
//     .then(res => {
//         console.log('TRES: El estado de', url, 'es: ', res);
//     })
//     .catch(error => {
//         console.log(error);
//     })


const readFile = (fileName, type) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, type, (error, content) =>{
            if(error) {
                reject(error);
            } else {
                resolve(content);
            }
        })
    })
}


// readFile('./prueba/hola.md', 'utf-8')
//     .then(res => {
//         console.log('CUATRO', res)
//     })
//     .catch(err => {
//         console.log(err)
//     })

    Promise.all([myFirstPromise, mySecondPromise, getData(url), readFile('./prueba/hola.md', 'utf-8')])
        .then(responses => {
            // console.log(response[1]+=9)
            console.log(responses)
        })


