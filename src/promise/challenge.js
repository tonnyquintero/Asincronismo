import fetch, { Response } from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi);
};


//no es necesario new Promise porque fetch por defecto ya es una promesa
/* fetchData(`${API}/products`)
    .then(response => response.json())//convierte la respuesta a un objeto .json
    .then(products => {
        console.log(products);//muestra los productos
    })
    .then(() => {
        console.log('Hola');//se pueden aniddar todos los then necesarios
    })
    .catch(error => console.log(error));//manejo de errores */
//para que el código funcione en VSCode es necesario agregar en package.json ,"type": "module", esto no es necesario en el navegador

fetchData(`${API}/products`)
.then(response => response.json())
.then(products => {
    console.log(products)
    return fetchData(`${API}/products/${products[3].id}`)
})
.then(response => response.json())
.then(product => {
    console.log(product.title)
    return fetchData(`${API}/categories/${product.category.id}`)
})
.then(response => response.json())
.then(category => {
    console.log(category.name);
})
.catch(error => console.log(error))
.finally(() => console.log('finally'));

//de esta manera se obtienen los datos del API con promise, evitando los callbacks hell

