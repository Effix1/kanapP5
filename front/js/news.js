fetch("http://localhost:3000/api/products")
    .then(function(res){
        if (res.ok) {
            return res.json();
            
        }
    })
   
    .then(function(products){
        const nombreDeProduits = products.length;
        
        let items = document.getElementById('items')
        products.forEach(produit => {
            let article = document.createElement('article')
            let link = document.createElement('a')

        
        const creationLink = () => {
            items.appendChild(link)     
        } 
        
        const creationArticle = () => {
            creationLink();
            link.appendChild(article)
            link.href = "./product.html?id=" + produit._id
        }

        const creationImage = () => {
            creationArticle();
            let image = document.createElement('img')
            image.setAttribute('src',produit.imageUrl)
            article.appendChild(image)
        }

        const creationNomProduit = ( ) => {
            creationImage();
            let nom = document.createElement('h3')
            article.appendChild(nom)
            nom.innerText = (produit.name)
        }

        const creationParagraph = () => {
            creationNomProduit();
            let paragraph = document.createElement('p')
            article.appendChild(paragraph)
            paragraph.innerText = (produit.description)
        }

        creationParagraph(); 

       });

    })