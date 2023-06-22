// import SlimSelect from 'slim-select'
import Notiflix from 'notiflix';
import refs from './refs'
const API_KEY = 'live_x2glOrtXN65yWxc6hIzm1fLtDFAD9O4CczTDA4QkUvYD1d6rgUneCd4yRde5eNue'


/// slimSelect не понял как пользоваться

export function fetchBreeds() {
    return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`).then((data) => {
        if (!data.ok) {
            throw new Error('')
        }

        return data.json()
    })
}
fetchBreeds().then((data) => {

    const options = data.map((el) => {
        refs.loaderEl.hidden = true
        /////////////////////////////////////////////////////////////SLIMSELECT///////////////////////////////////////////////////////////////////
        new SlimSelect({
            select: '#single'
        })
        /////////////////////////////////////////////////////////////SLIMSELECT///////////////////////////////////////////////////////////////////
        return `<option class="cat__option" id="select" value="${el.id}">${el.name}</option>`

    }).join('')
    refs.select.insertAdjacentHTML('afterbegin', options)

}).catch((err) => {
    refs.loaderEl.hidden = true
    // refs.errorEl.hidden = false
    Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
})







export function fetchCatByBreed(breedId) {

    return fetch(`https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_ids=${breedId}`).then((data) => {
        if (!data.ok) {
            throw new Error('')

        }

        return data.json()


    })
}



refs.select.addEventListener('change', e => {
    refs.catInfo.innerHTML = ''
    refs.loaderEl.hidden = false

    e.preventDefault()


    fetchCatByBreed(refs.select.value).then(data => {
        refs.loaderEl.hidden = true
        refs.catInfo.insertAdjacentHTML('afterbegin', crateMarkap(data))

    }).catch((err) => {
        refs.loaderEl.hidden = true
        // refs.errorEl.hidden = false
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
    })
})
function crateMarkap(data) {

    return data.map((el) => {
        return ` <div>
        <img src="${el.url}" class = "cat-img" alt="cat" width="300">
        </div>
        <div class="cat-info__box">
        <h2>${el.breeds[0].name}</h2>
        <p> ${el.breeds[0].description}</p>
        <h2>Temperamnet</h2>
        <p class ="cat-temp"> ${el.breeds[0].temperament}</p> 
        </div> 
        `
    })
}


