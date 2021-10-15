import {data} from '../data/data.js';

const btnMarvel = document.getElementById('btnMarvel');
const btnDC = document.getElementById('btnDC');
const templateCard = document.getElementById('template-card').content;
const fragment =  document.createDocumentFragment();
const itemMarvel = document.getElementById('itemMarvel');
const itemDC = document.getElementById('itemDC');


btnMarvel.addEventListener('click', () => {
   
    itemMarvel.innerHTML = '';
    itemDC.style.display = 'none';
    itemMarvel.style.display = 'block';

    let marvel = data.filter(heroe => heroe.publisher === 'Marvel Comics');
    marvel.forEach(hero => {
         let {id,superhero,publisher,image} = hero;
         templateCard.querySelector('h5').textContent = superhero;
         templateCard.querySelector('h4').textContent = publisher;
         templateCard.querySelector('img').setAttribute('src',image);
         templateCard.querySelector('img').dataset.id = id;
         const clone = templateCard.cloneNode(true);
         fragment.appendChild(clone)   
    })
    itemMarvel.appendChild(fragment);
})


btnDC.addEventListener('click', () => {

    itemDC.innerHTML = '';
    itemMarvel.style.display = 'none';
    itemDC.style.display = 'block';

    let dc = data.filter(heroe => heroe.publisher === 'DC Comics');
    dc.forEach(hero => {
         let {id,superhero,publisher,image} = hero;
         templateCard.querySelector('h5').textContent = superhero;
         templateCard.querySelector('h4').textContent = publisher;
         templateCard.querySelector('img').setAttribute('src',image);
         templateCard.querySelector('img').dataset.id = id;
         const clone = templateCard.cloneNode(true);
         fragment.appendChild(clone)   
    })
    itemDC.appendChild(fragment);
    
})