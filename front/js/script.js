fetch("http://localhost:3000/api/products")
    .then(function(res){
        if (res.ok) {
            return res.json();
            
        }
    })
    .then(function(products){
        const nombreDeProduits = products.length;
        console.log(nombreDeProduits)
        for (let produits of products) {
            console.log(produits)
        }
       products.forEach(produit => {
        let items = document.getElementById('items')
        let article = document.createElement('article')
        let titre = document.createElement('h1')
        let description = document.createElement('h2')
        let image = document.createElement('img') 
        let lien = document.createElement('a')
        image.setAttribute('src', produit.imageUrl)
        image.setAttribute('title', produit.altTxt)
        image.setAttribute('alt', produit.altTxt)        
        image.style.width=('100%');
        image.style.height=('100%');
        items.appendChild(article);
        article.appendChild(lien)
        article.appendChild(titre)
        
        article.appendChild(description)
        article.appendChild(image)
        article.style.width=('22%')
        
        titre.style.marginTop=('0')
        titre.style.maxWidth=('auto')
        titre.innerText = produit.name
        description.innerText = produit.description
        
        
       });
    })
   