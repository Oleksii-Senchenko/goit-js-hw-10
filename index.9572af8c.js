!function(){var e={select:document.querySelector(".breed-select"),catInfo:document.querySelector(".cat-info")},n="live_x2glOrtXN65yWxc6hIzm1fLtDFAD9O4CczTDA4QkUvYD1d6rgUneCd4yRde5eNue";function t(){return fetch("https://api.thecatapi.com/v1/breeds?api_key=".concat(n)).then((function(e){if(!e.ok)throw new Error("Sorry. Server was died... Have a good day, good luck");return e.json()}))}t().then((function(n){var t=n.map((function(e){return'<option value="'.concat(e.id,'">').concat(e.name,"</option>")})).join("");e.select.insertAdjacentHTML("afterbegin",t)})).catch((function(e){console.log(e.message)})),e.select.addEventListener("change",(function(n){t(e.select.value).then((function(e){console.log(e.value)}))}))}();
//# sourceMappingURL=index.9572af8c.js.map
