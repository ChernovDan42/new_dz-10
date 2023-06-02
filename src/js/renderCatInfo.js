import { refs } from "./refs";


export function renderCatInfo(cat) {
    const catInf = cat[0].breeds[0];
    const catImg = cat[0].url;
    console.log(catInf);

    const murkup = `<img class='cat-img' src='${catImg}' width='450' /><div class='cat-card_info'><h1>${catInf.name}</h1><p class='cat-wiki'>${catInf.description}</p><p><b>Temperament: </b>${catInf.temperament}</p></div>`

    refs.catInfo.innerHTML = murkup;

    
}   