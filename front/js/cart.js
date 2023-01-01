const cart = JSON.parse (localStorage.getItem('caddy'))|| []
//      part1      //

cart.forEach(panier => {
  fetch("http://localhost:3000/api/products/"+ panier.id)
  .then(function(res){
    if (res.ok) {
      return res.json();     
    } 
  })
  .then(function(produit){

    //console.log(produit)
    //console.log(panier.color)
    //                        creation article                               
    const creaArticle = document.createElement('article')
    const sectionItem = document.getElementById('cart__items')
    const article = sectionItem.appendChild(creaArticle)
    article.classList.add('cart__item')
    
    //                        creation div image 
        const divImage = document.createElement('div')
        let itemImage = article.appendChild(divImage)
        itemImage.classList.add('cart__item__img')
        //                                creation image
        const creaImage = document.createElement('img')
        let image = itemImage.appendChild(creaImage)
        image.setAttribute('src', produit.imageUrl)
        //                    creation content
        const creaDivNomPrixColor = document.createElement('div')
        const divContents = document.createElement('div')
        let divContent = article.appendChild(divContents)
        divContent.classList.add('cart__item__content')
        let divNamePrix = divContent.appendChild(creaDivNomPrixColor)
        divNamePrix.classList.add('cart__item__content__description')
      //                     creation titre (nom)
      
      let h2 = document.createElement('h2') 
      let titre = divNamePrix.appendChild(h2)
      titre.innerText=(produit.name) 
      
      //                     creation couleur

      let paragrapheColor = document.createElement('p')
      let colorArticle = divNamePrix.appendChild(paragrapheColor)
      colorArticle.innerText=(panier.color)

      //                    creation prix 
      let paragraphePrix = document.createElement('p')
      let prixArticle = divNamePrix.appendChild(paragraphePrix)
      prixArticle.innerText=(produit.price + ",00 €")

      //                    creation settings 
      const creaDivSettings = document.createElement('div')
      let divSettings =  divContent.appendChild(creaDivSettings)
      divSettings.classList.add('cart__item__content__settings')

      //                   creation settings quantity
      const creaParagrapheQty = document.createElement('p')
      let paragrapheQty = divSettings.appendChild(creaParagrapheQty)
      paragrapheQty.innerText = (panier.quantity)
       // console.log(divDescription)
        //console.log(divDescription)

  })

    
      
    });

  
   /* <section id="cart__items">
    
     
         <div class="cart__item__content__settings">
           <div class="cart__item__content__settings__quantity">
             <p>Qté : </p>
             <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
           </div>
           <div class="cart__item__content__settings__delete">
             <p class="deleteItem">Supprimer</p>
           </div>
         </div>
       </div>
     </article> -->
   </section>*/

