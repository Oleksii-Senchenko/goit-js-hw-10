import refs from './refs'
const API_KEY = 'live_x2glOrtXN65yWxc6hIzm1fLtDFAD9O4CczTDA4QkUvYD1d6rgUneCd4yRde5eNue'

refs.errorEl.style.display = 'none'
// const errMessage = refs.errorEl.display = 'block'
export function fetchBreeds() {
    return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`).then((data) => {
        if (!data.ok) {
            refs.loaderEl.style.display = 'none'
            refs.select.style.display = 'none'
            refs.errorEl.style.display = 'block'
            throw new Error()
        }
        refs.loaderEl.style.display = 'none'
        return data.json()
    })
}

fetchBreeds().then((data) => {
    const options = data.map((el) => {


        return `<option value="${el.id}">${el.name}</option>`

    }).join('')
    refs.select.insertAdjacentHTML('afterbegin', options)
}).catch((err) => {

    console.log(err.message);
})






export function fetchCatByBreed(breedId) {

    return fetch(`https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_ids=${breedId}`).then((data) => {
        if (!data.ok) {
            throw new Error()

        }

        return data.json()


    })
}



refs.select.addEventListener('change', e => {
    e.preventDefault()





    fetchCatByBreed(refs.select.value).then(data => {
        refs.catInfo.textContent = ''
        // ЭТОТ МЕТОД РАБОЧИЙ
        // data.map((el) => {
            // 

        //     const render = `<img src="${el.url}" alt="" width="450" height="300"></img>`

        //     refs.catInfo.insertAdjacentHTML('afterbegin', render)

        //     console.log(data.breeds[0]); ЭТОТ ЛОГ НЕ РАБОТАЕТ


        // })

        function careateMurkap(data) {
            const img = data.url

            const { name, description, temperament } = data.breeds[0]
            return `
            <img src="${img}" alt="${name}">
            <div>
            <h2>${name}</h2>
            <p>${description}</p>
            <p><span>${temperament}</span></p>
          </div>`
        }
        console.log(nema);
        careateMurkap(data)
    }).catch((err) => {

    })
})


