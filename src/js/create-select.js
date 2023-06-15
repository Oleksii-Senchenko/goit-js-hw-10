import { fetchBreeds } from "./cat-api";
import refs from './refs'

fetchBreeds().then((res) => {
    const options = res.map(({ id, name }) => {

        return `<option value="${id}">${name}</option>`
    }).join('')


    refs.select.insertAdjacentHTML('afterbegin', options)
}).catch((err) => {
    console.log(err);
})
