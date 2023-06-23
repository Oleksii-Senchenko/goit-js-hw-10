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