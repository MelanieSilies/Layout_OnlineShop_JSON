import { productData } from "./data.js";
const products = JSON.parse(productData);

Object.entries(products).forEach((entryCards) => {
    const sections =
[
    document.querySelector("#cosmetics"),
    document.querySelector("#food"),
    document.querySelector("#cloth")
];
//console.log(entryCards);

entryCards[1].map((productCard) => {
    sections.forEach(section => {
        if (productCard.type == section.id){
            let cardInfo = `
                <div class='card m-3'>
                <img src= ${productCard.image} class='card-img-top' alt= ${productCard.title}  />
                    <div class= 'card-body'>
                    <h4>${productCard.title}</h4>
                    <p>${productCard.beschreibung}</p>
                    <p>${productCard.größe}</p>
                    <b>${productCard.preis}</b>
                    <button class='warenkorb-button'> In den Warenkorb </button>
                    </div>
                </div>
                `;
                section.insertAdjacentHTML('afterbegin', cardInfo)
        }
    })
})
})