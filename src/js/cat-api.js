import refs from './refs'
const API_KEY = 'live_x2glOrtXN65yWxc6hIzm1fLtDFAD9O4CczTDA4QkUvYD1d6rgUneCd4yRde5eNue'


export function fetchBreeds() {
    return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`).then((data) => {
        if (!data.ok) {

            throw new Error()
        }

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
        console.log(data);


        data.map((el) => {


            const render = `<img src="${el.url}" alt="" width="450" height="300"></img>`

            refs.catInfo.insertAdjacentHTML('afterbegin', render)




        })


    }).catch((err) => {

    })
})


