const API_KEY = "live_WyQ4wdcmnnX0HTVtKvFWdeM8CdCHwJwtP2AkRZrgJyzZEgtMZ8H5iRMaBk9Fp8Al"

export function fetchBreeds() {
    return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`).then((res) => {
        if (!res.ok) {
            throw new Error()
        }
        return res.json()
    })
}

export function fetchCatByBreed(breedId) {
    return fetch(`https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_ids=${breedId}`).then((res) => {
        if (!res.ok) {
            throw new Error()
        }
        return res.json()
        
    })
}