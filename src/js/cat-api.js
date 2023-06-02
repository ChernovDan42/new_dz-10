const URL = 'https://api.thecatapi.com/v1/'
const KEY='live_ju7SxrIykIbUAudK5xd6mda8PymEqAP09yRS8OUuBSjHA7SDpCtbAdvcDeQD9TDF'



export class NewCatApiServise{
    constructor() {
        this.selectedValue = '';
        this.breedId=''
    }


    fetchBreeds() {

        return fetch(`${URL}breeds?api_key=${KEY}`).then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }
          return response.json()
    })
 }
    
    fetchCatByBreed(breedId) {
        return fetch(`${URL}images/search?breed_ids=${breedId}&api_key=${KEY}`).then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }
          return response.json()
    })
    }
    

    get checkValue() {
        return this.selectedValue;
    }


    set checkValue(newVal) {
        this.selectedValue = newVal;
    }

}