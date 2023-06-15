import { fetchCatByBreed } from "./cat-api";
fetchCatByBreed('beng').then((res)=>{
    console.log(res);
})