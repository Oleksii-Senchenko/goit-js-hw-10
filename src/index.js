// Создать отдельный файл кет епи и написать запрос в функции ✔️
import './js/cat-api'


/**
 * МОДУЛЬНОСТЬ НЕ СРАБОТАЛА((((((((
 * 
 * 
 * 
 */
// fetchBreeds().then((data) => {

//     const options = data.map((el) => {


//         return `<option value="${el.id}">${el.name}</option>`

//     }).join('')
//     refs.select.insertAdjacentHTML('afterbegin', options)

// }).catch((err) => {

//     console.log(err.message);
// })




// refs.select.addEventListener('change', e => {
//     refs.catInfo.innerHTML = ''
//     e.preventDefault()


//     fetchCatByBreed(refs.select.value).then(data => {


//         refs.catInfo.insertAdjacentHTML('afterbegin', crateMarkap(data))

//     }).catch((err) => {
//         console.log(err);
//     })
// })

// function crateMarkap(data) {

//     return data.map((el) => {
//         return ` <div>
//         <img src="${el.url}" class = "cat-img" alt="cat" width="300">
//         </div>
//         <div class="cat-info__box">
//         <h2>${el.breeds[0].name}</h2>
//         <p> ${el.breeds[0].description}</p>
//         <h2>Temperamnet</h2>
//         <p class ="cat-temp"> ${el.breeds[0].temperament}</p> 
//         </div> 
//         `
//     })
// }