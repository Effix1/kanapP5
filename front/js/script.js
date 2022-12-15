fetch("http://localhost:3000/api/products")
    .then(function(res){
        if (res.ok) {
            return res.json();
            
        }
    })
    .then(function(products){
        
       products.forEach(produit => {

        const items = document.getElementById('items')
        const link = document.createElement('a');
        link.href = "./product.html?id=" + produit._id
        const article = document.createElement('article');
        const image = document.createElement('img');
        const h3 = document.createElement('h3');
        const paragraph = document.createElement('p')
        
        const creationImage = () => {
            image.setAttribute('src', produit.imageUrl)
            image.setAttribute('alt', produit.altTxt)
        }
        
        const creationH3 = () => {
            h3.innerText = (produit.name)
        }
        
        const creationParagraph = () => {
            paragraph.innerText = (produit.description)
        }
        
        const creationArticle = () => {
         items.appendChild(link)
        link.appendChild(article)
        article.appendChild(image);
        article.appendChild(h3)
        article.appendChild(paragraph)
        creationImage();
        creationH3();
        creationParagraph();
        }
        creationArticle();
    }); 
    })

    
    

