fetch("http://localhost:3000/api/products")
    .then(function(res){
        if (res.ok) {
            return res.json();
            
        }
    })
    .then((data) => {
        console.log(data)
        return (data);
        
    })
    .then(function(products){
        const nombreDeProduits = products.length;
        console.log(nombreDeProduits)
        for (let produits of products) {
            console.log(produits)
        }
        let items = document.getElementById('items')
            //console.log(items)
        products.forEach(produit => {

        let article = document.createElement('article')
        console.log(article)
        let link = document.createElement('a')
        
        const creationLink = () => {
            items.appendChild(link)
            //link.innerText = ('salut salut')
            
        } 
        
        const creationArticle = () => {
            creationLink();
            link.appendChild(article)
            //article.style.backgroundColor = "red"
            //article.innerText = (" re salut")
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
            paragraph.style.textOverflow = "ellipsis"
            paragraph.style.fontSize = "1.5rem"

        }

        creationParagraph(); 
       });
    })