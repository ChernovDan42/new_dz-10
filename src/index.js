import { refs } from './js/refs'
import { NewCatApiServise } from './js/cat-api'
import { fillSelect } from './js/fillSelect'
import { renderCatInfo } from './js/renderCatInfo'
import SlimSelect from 'slim-select'
import {options} from './js/helpers/select_options'
import Notiflix from 'notiflix';




refs.select.classList.add('is-hidden')



const newCatApiServise=new NewCatApiServise()
refs.select.addEventListener('change', onChangeSelect)


newCatApiServise.fetchBreeds().then(cats => {
    fillSelect(cats)
    
    refs.loader.classList.add('is-hidden')
    refs.select.classList.remove('is-hidden')
    
    new SlimSelect(options)
    
}).catch((error) => {

        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
        console.log(error);
        refs.loader.classList.add('is-hidden')
})





function onChangeSelect() {

    refs.catInfo.innerHTML=''

    newCatApiServise.selectedValue = refs.select.value;
    
    refs.loader.classList.remove('is-hidden')

    newCatApiServise.fetchCatByBreed(newCatApiServise.selectedValue).then(cat => {
        refs.loader.classList.add('is-hidden')
        renderCatInfo(cat)

    }).catch((error) => {
         Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
        console.log(error.message)
    })

    
}



