

import Notiflix from 'notiflix';
import '/node_modules/slim-select/dist/slimselect.css';


const API_KEY = 'live_x2glOrtXN65yWxc6hIzm1fLtDFAD9O4CczTDA4QkUvYD1d6rgUneCd4yRde5eNue'
const BASE_URL = 'https://api.thecatapi.com/v1/breeds'



export function fetchBreeds() {
    return fetch(`${BASE_URL}?api_key=${API_KEY}`).then((data) => {
        if (!data.ok) {
           throw new Error('Oops! Something went wrong! Try reloading the page!')
        }
        return data.json()
    })
}



export function fetchCatByBreed(breedId) {
    return fetch(`https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_ids=${breedId}`)
    //return fetch(`${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`) ВЫБИВАЕТ 404

        .then((data) => {
            if (!data.ok) {
                throw new Error('Oops! Something went wrong! Try reloading the page!')
            }
            return data.json()
        })
}





