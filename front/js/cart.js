const cart = JSON.parse(localStorage.getItem('caddy'))||[] 
let somme = 0
cart.forEach(panier => {
    fetch('http://localhost:3000/api/products/'+panier.id)
    .then (function(res){
        if(res.ok){
            return res.json();
        }

    })
    .then (function(produit){
        const sectionItem = document.getElementById('cart__items');
        const article = creaArticle(sectionItem, "cart__item");
        const divImage = creaDiv(article, "cart__item__img"); 
        creaImg(divImage, produit.imageUrl);
        const divContent = creaDiv(article, "cart__item__content");
        const divDescription = creaDiv(divContent, "cart__item__content__description");
        creaH2(divDescription, produit.name);
        creaParagraph(divDescription, panier.color);
        creaParagraph(divDescription, produit.price+',00 €');
        const divSettings = creaDiv(divContent, "cart__item__content__settings");
        const settingsQuantity = creaDiv(divSettings, 'cart__item__content__settings__quantity');
        creaParagraph(settingsQuantity , "Qté : ");
        const inputQuantity = creaInput (settingsQuantity);
        inputQuantity.type = ('number');
        inputQuantity.classList.add('itemQuantity');
        inputQuantity.name = ('itemQuantity');
        inputQuantity.min = (0);
        inputQuantity.max = (100);
        let pQuantity = inputQuantity.setAttribute('value', panier.quantity) ;
        const divDelete = creaDiv(divSettings, "cart__item__content__settings__delete");
        const paraDelete = creaParagraph(divDelete, "Supprimer");
        paraDelete.classList.add('deleteItem');
        
        
        
       
        //               somme des canap 
        
        //console.log(somme) 
        //let totalPrice = document.getElementById('totalPrice')
        //console.log(produit.price)
        
        
        paraDelete.addEventListener('click', function(){
            console.log('cest clické')
            console.log(cart.length)
            if(panier.quantity>=1){
                pQuantity = panier.quantity
                pQuantity-1;
                console.log(pQuantity)
                return pQuantity
                // cart[0].quantity-1
                
                
            }
        })
    dsiplayTotal(document.getElementById('totalPrice'),panier.quantity, produit.price)
        //for (let B of A ) {
            
        //}
        //console.log(A.length)
        return produit   
    }) 
    return panier  
});



function dsiplayTotal(target, quantity, price) {  
    let totalPrixItem =quantity*price
    somme+= totalPrixItem  
    target.innerText = (somme+',00€')
    console. log(somme+',00€')                
}


//            ***** fonction article *****
function creaArticle (target, classe){
    let article = document.createElement('article')
    target.appendChild(article)
    article.classList.add(classe)
    return article;
}
//              ***** fonction crea div *****
function creaDiv (target, classe){
    let div = document.createElement('div')
    target.appendChild(div)
    div.classList.add(classe)
    return div
}

function creaImg (target, source){
    let image = document.createElement('img')
    target.appendChild(image)
    image.setAttribute('src', source)
}

function creaH2 (target, texte) {
    let h2= document.createElement('h2')
    let titre = target.appendChild(h2)
    titre.innerText = (texte)
}

function creaParagraph (target, texte) {
    let paragraphe= document.createElement('p')
    let para = target.appendChild(paragraphe)
    para.innerText = (texte)
    return paragraphe
}

function creaInput (target){
    let input = document.createElement('input')
    target.appendChild(input)
    return input
}
