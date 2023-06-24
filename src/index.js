// Создать отдельный файл кет епи и написать запрос в функции ✔️
import { fetchBreeds } from './js/cat-api';
import { fetchCatByBreed } from './js/cat-api';
import { createMarkap } from './js/createMarkap';
import refs from './js/refs';

import SlimSelect from 'slim-select'
import Notiflix from 'notiflix';
import '/node_modules/slim-select/dist/slimselect.css';
////////////////////////////////////////////////////////////////////////////
//ЗДРАВСТВУЙТЕ.Я ВАМ КОМЕНТАРИЯХ ПИСАЛ, НО СКОРЕЕ ВСЕГО ВЫ НЕ УВИДЕЛИ.
// Я ХОЧУ СВОЙ СЕЛЕКТ УМЕНЬШИТЬ, НО ЦСС НЕ СЛУШАЕТСЯ, ПОМОГИТЕ РАЗОБРАТСЯ, ХОЧУ ЧТОБ СЕЛЕКТ БЫЛ МЕЬШЕ В 20 РАЗ, ТАК ЖЕ С ТЕКСТОМ, ХОЧУ ЧТОБ БЫЛ АККУРАТНЕЕ 
//НО ИНТЕРЕСТНО ЧТО КЛАС DESCRIPTION ПОДДАЛСЯ СТИЛИЗАЦИИ А САМ КОНТЕЙНЕР ГДЕ НАХОДИТСЯ ЭТОТ КЛАСС НЕ РЕАГИРУЕТ ВООБЩЕ
///////////////////////////////////////////////////////////////////////////


fetchBreeds().then((data) => {


    const options = data.map((el) => {
        return `<option value="${el.id}">${el.name}</option>А`
    })
    refs.select.insertAdjacentHTML('afterbegin', options)
    new SlimSelect({
        select: '#single',
    });
    refs.loader.hidden = true
}).catch(() => {
    refs.loader.hidden = true
    Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
})





refs.select.addEventListener('change', (e) => {

    e.preventDefault()
    refs.loader.hidden = false
    refs.catInfo.innerHTML = ''
    fetchCatByBreed(refs.select.value).then(data => {
        const cat = data[0]
        refs.catInfo.insertAdjacentHTML('afterbegin', createMarkap(cat))
        refs.loader.hidden = true
    }).catch(() => {
        refs.loader.hidden = true
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
    })
})



