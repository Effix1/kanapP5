const cart = JSON.parse (localStorage.getItem('caddy'))|| []
cart.forEach(panier => {
   
    const creationArticle = function (){
        const cartItems = document.getElementById('cart__items') ;
        const div = document.createElement('div');
        const article = document.createElement('article');
        cartItems.appendChild(article);
        article.appendChild(div);
        div.classList.add("cart__item__img");
        article.classList.add("cart__item");
       
        const image = document.createElement('img');
        image.setAttribute('src', panier.image);
        div.appendChild(image);
        article.appendChild(document.createElement('div'));
        
        
        const cartItemContent = (article.children[1]);
        
        cartItemContent.classList.add("cart__item__content");
        cartItemContent.appendChild(document.createElement('div')).classList.add('cart__item__content__settings')
        const contentSettings = ( cartItemContent.children[0])
            .appendChild(document.createElement('h2'));
        contentSettings.innerText = (panier.nom);
        const divContentSettings = (document.getElementsByClassName('cart__item__content__settings'))
        const para1 = document.createElement('p');
        const para2 = document.createElement('p')
        const paragraphe1 = contentSettings.insertAdjacentElement("afterend",(para1))
            .insertAdjacentElement("afterend", (para2));

        
        para1.innerText= (panier.colors)
        
        let prix = (panier.prix + ',00 €')
        para2.innerText = (prix)
        
        
        
    
        
    }
    creationArticle();   
});



