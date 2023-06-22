// Создать отдельный файл кет епи и написать запрос в функции ✔️
import { fetchBreeds } from './js/cat-api';
import { fetchCatByBreed } from './js/cat-api';
import { createMarkap } from './js/cat-api';
import refs from './js/refs';

import SlimSelect from 'slim-select'
import Notiflix from 'notiflix';
import '/node_modules/slim-select/dist/slimselect.css';






fetchBreeds().then((data) => {


    const options = data.map((el) => {
        return `<option value="${el.id}">${el.name}</option>А`
    })
    refs.select.insertAdjacentHTML('afterbegin', options)
    new SlimSelect({
        select: '#single',
    });
    // refs.loader.hidden = true
}).catch(() => {
    Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
})





refs.select.addEventListener('change', (e) => {

    e.preventDefault()
    refs.loader.hidden = false
    fetchCatByBreed(refs.select.value).then(data => {
        refs.catInfo.innerHTML = ''
        const cat = data[0]
        refs.catInfo.insertAdjacentHTML('afterbegin', createMarkap(cat))
        refs.loader.hidden = true
    }).catch(() => {
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
    })
})



