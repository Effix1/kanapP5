const cart = JSON.parse(localStorage.getItem('caddy'))||[] 
cart.forEach(panier => {
    fetch('http://localhost:3000/api/products/'+panier.id)
    .then (function(res){
        if(res.ok){
            return res.json();
        }
        
    })
    .then (function(produit){
        
        const sectionItem = document.getElementById('cart__items');
        
        const article = creaArticle(sectionItem, "cart__item",panier);
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
        //////////////////////////////////////   Supression   /////////////////////////////////////////////////////
        inputQuantity.setAttribute('value', panier.quantity) ;
        const divDelete = creaDiv(divSettings, "cart__item__content__settings__delete");
        const paraDelete = creaParagraph(divDelete, "Supprimer");
        paraDelete.classList.add('deleteItem');
        
        paraDelete.addEventListener('click', function(event){                                                                           
            const article = event.target.closest("article.cart__item")                                                                            
            const setId = article.dataset.id                                                                                                   
            const setColor = article.dataset.color                                                                                                                                                       
            const identifiantExistant =cart.findIndex(item =>item.id == setId && item.color == setColor)                                       
            cart.splice(identifiantExistant, 1)                                                                                            
            localStorage.setItem('caddy', JSON.stringify(cart))                                                                                                                  
            article.remove() 
            dsiplayTotalPrice(document.getElementById('totalPrice'),-(panier.quantity), produit.price)
            dsiplayTotalQuantity( document.getElementById('totalQuantity'),-(panier.quantity))                                                                                                                    
            
            
        })                                                                                                                                       
        ///////////////////////////////////////   Changement total   ////////////////////////////////////////////////////////                                  
        
        inputQuantity.addEventListener('change', function (event){
            newQuantity(event, cart)
            
        })
        
        function newQuantity(event){
            // console.log(dsiplayTotalQuantity)
            const inputValue = Number (event.target.closest('input.itemQuantity').value)
            let valeurIndex = (inputValue-(panier.quantity))
            panier.quantity=inputValue
            dsiplayTotalPrice(document.getElementById('totalPrice'),valeurIndex, produit.price)
            dsiplayTotalQuantity(document.getElementById('totalQuantity'),valeurIndex)
            console.log(cart)
            
            localStorage.setItem('caddy', JSON.stringify(cart))
            
        }
        ///////////////////////////////////////////////////////////////////////////////////////////////////////
        dsiplayTotalPrice(document.getElementById('totalPrice'),panier.quantity, produit.price)
        dsiplayTotalQuantity( document.getElementById('totalQuantity'),panier.quantity)
        
    }) 
    
});



document.querySelector('.cart__order__form').addEventListener('submit',function (event){//    empecher le formulaire d'etre soumis par le naviageteur 
    event.preventDefault()
    console.log(cart.length)
    // init
    document.getElementById('firstNameErrorMsg').innerText= ''
    let  formValid= true;
    //  variable formulaire 
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let address = document.getElementById('address').value
    let ville = document.getElementById('city').value
    let mail = document.getElementById('email').value
    // vérification du cart
    if (cart.length==0){
        formValid = false
        alert("Veuillez choisir un produit")
    }
    //verification du prénom 
    if (firstName.length < 3) {
        document.getElementById('firstNameErrorMsg').innerText= 'le prénom doit faire au moins 3 caractères'
        formValid = false   
    }
    //verification du nom 
    if (lastName.length < 3) {
        document.getElementById('lastNameErrorMsg').innerText= 'le  nom doit faire au moins 3 caractères'
        formValid = false   
    }
    //verification de l'adresse
    if (address.length < 3) {
        document.getElementById('addressErrorMsg').innerText= 'l\'adresse doit faire au moin 3 caractere'
        formValid = false   
    }
    //verification de la ville
    if (ville.length < 3) {
        document.getElementById('cityErrorMsg').innerText= 'le champ doit faire au moins 3 caractères'
        formValid = false   
    } 
    //verification du mail
    const regex = /[\w-\.]+@ ([ \w-]+\.)+[\w-]{2,4} $ /g; 
    if (regex.test(mail)) {
        document.getElementById('emailErrorMsg').innerText= 'le champ doit contenir une adresse mail valide'
        formValid = false   
        console.log(regex.test)
    } ;
    
    
    // soumission du formulaire
    if (formValid){
        const tab = document.querySelector(".cart__order__form")
        // objet à soumettre    
        const body={ contact: {
            firstName: firstName,
            lastName: lastName,
            address: address,
            city: ville,
            email: mail
        },
        products:["ssss"]
    }
    
    
    console.log(JSON.stringify(body))
    let response =  fetch("http://localhost:3000/api/product/order", {
    method: "POST",
    headers: {
        
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body),   
    });
    
    console.log(firstName)
    
    //products : [contact]    
    /**
    *
    * Expects request to contain:
    * contact: {
    *   firstName: string,
    *   lastName: string,
    *   address: string,
    *   city: string,
    *   email: string
    * }
    * products: [string] <-- array of product _id
    *
    */
    console.log('valid')
}else {
    console.log('invalid')
}
})
function formFull (){
    
    return body
}
//               ***** fonction display quantité *****
let nombre = 0
function dsiplayTotalQuantity( target, quantity) {  
    nombre += quantity  
    target.innerText = (nombre)      
}
//            ***** fonction article *****
function creaArticle (target, classe, panier){
    let article = document.createElement('article')
    target.appendChild(article)
    article.classList.add(classe)
    article.dataset.id=panier.id
    article.dataset.color=panier.color
    
    return article;
}
//              ***** fonction crea div *****
function creaDiv (target, classe){
    let div = document.createElement('div')
    target.appendChild(div)
    div.classList.add(classe)
    return div
}
//             ***** fonction création image *****
function creaImg (target, source){
    let image = document.createElement('img')
    target.appendChild(image)
    image.setAttribute('src', source)
}

//             ***** fonction création titre(H2) *****
function creaH2 (target, texte) {
    let h2= document.createElement('h2')
    let titre = target.appendChild(h2)
    titre.innerText = (texte)
}

//             ***** fonction création balise paragraphe *****
function creaParagraph (target, texte) {
    let paragraphe= document.createElement('p')
    let para = target.appendChild(paragraphe)
    para.innerText = (texte)
    return paragraphe
}

//             ***** fonction création balise input *****
function creaInput (target){
    let input = document.createElement('input')
    target.appendChild(input)
    return input
}

//                ***** fonction display prix total *****

let somme = 0
function dsiplayTotalPrice(target, quantity, price) {  
    let totalPrixItem =quantity*price
    somme+= totalPrixItem  
    target.innerText = (somme+',00 ')
    
}



//              ***** cretion fonction getpluriel *****
function getpluriel (nb) {
    return nb>1 ? "s" : "";
}

