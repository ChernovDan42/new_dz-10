import { refs } from "./refs";


export function fillSelect(data) {
   
        data=data.filter(img => img.image?.url != null)
   
    storedBreeds = data;
    
   
        for (let i = 0; i < storedBreeds.length; i++) {
            const breed = storedBreeds[i];
            let option = document.createElement('option');
     
            //skip any breeds that don't have an image
            if (!breed.image) continue
     
            //use the current array index
            option.value = breed.id;
            option.innerHTML = `${breed.name}`;
            refs.select.appendChild(option);
    
        }
    
    }