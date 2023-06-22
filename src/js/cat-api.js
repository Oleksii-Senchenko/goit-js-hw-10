

import Notiflix from 'notiflix';
import '/node_modules/slim-select/dist/slimselect.css';


const API_KEY = 'live_x2glOrtXN65yWxc6hIzm1fLtDFAD9O4CczTDA4QkUvYD1d6rgUneCd4yRde5eNue'
const BASE_URL = 'https://api.thecatapi.com/v1/breeds'

/// slimSelect не понял как пользоваться

export function fetchBreeds() {
    return fetch(`${BASE_URL}?api_key=${API_KEY}`).then((data) => {
        if (!data.ok) {
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
        }
        return data.json()
    })
}



export function fetchCatByBreed(breedId) {
    return fetch(`https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_ids=${breedId}`)

        .then((data) => {
            if (!data.ok) {
                Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
            }
            return data.json()
        })
}







export function crateMarkap(data) {

    return ` <img src="${data.url}" class = "cat-img" alt="cat" width="300"><div>
        
       
        <div class="cat-info__box" >
        <h2>${data.breeds[0].name}</h2>
        <p> ${data.breeds[0].description}</p>
        <h2>Temperamnet</h2>
        <p class ="cat-temp"> ${data.breeds[0].temperament}</p> 
     
        `

}



export function createMarkap(cat) {

    return `<img src="${cat.url}" alt="${cat.breeds[0].name} photo" width="300" />
      <div class="text-wraper">
        <h2 class="breed-title">${cat.breeds[0].name}</h2>
        <p class="description">
          ${cat.breeds[0].description}
        </p>
        <p class="temperament">
          <b>Temperament:</b> ${cat.breeds[0].temperament}
        </p>
      </div>`;
}