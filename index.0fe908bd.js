var e={select:document.querySelector(".breed-select"),catInfo:document.querySelector(".cat-info"),loaderEl:document.querySelector(".loader"),errorEl:document.querySelector(".error"),bodyel:document.querySelector("body"),h1:document.querySelector("h1")};fetch("https://api.thecatapi.com/v1/breeds?api_key=live_x2glOrtXN65yWxc6hIzm1fLtDFAD9O4CczTDA4QkUvYD1d6rgUneCd4yRde5eNue").then((e=>{if(!e.ok)throw new Error;return e.json()})).then((t=>{const r=t.map((e=>`<option value="${e.id}">${e.name}</option>`)).join("");e.select.insertAdjacentHTML("afterbegin",r)})).catch((e=>{console.log(e.message)})),e.select.addEventListener("change",(t=>{var r;t.preventDefault(),(r=e.select.value,fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_x2glOrtXN65yWxc6hIzm1fLtDFAD9O4CczTDA4QkUvYD1d6rgUneCd4yRde5eNue&breed_ids=${r}`).then((e=>{if(!e.ok)throw new Error;return e.json()}))).then((t=>{console.log(t),t.map((t=>{const r=`<img src="${t.url}" alt="" width="450" height="300"></img>`;e.catInfo.insertAdjacentHTML("afterbegin",r)}))})).catch((e=>{}))}));
//# sourceMappingURL=index.0fe908bd.js.map
