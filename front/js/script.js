//            ***** appel a l'API
fetch("http://localhost:3000/api/products")
    .then(function(res){
        if (res.ok) {
            console.log(res)
            return res.json();
            
        }
    })
//           ***** 
    .then(function(products){
       products.forEach(produit => {
////////////////////////////////constante/////////////////////////////////////////
        const items = document.getElementById('items')
        const link = document.createElement('a');
        link.href = "./product.html?id=" + produit._id
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const paragraph = document.createElement('p')
        const image = document.createElement('img');
        console.log(produit)
        
        //                          fonction de création de l'article        
        const creationArticle = (a, imageUrl, altTxt) => {
            a.appendChild(link)
            link.appendChild(article)
            article.appendChild(image);
            article.appendChild(h3)
            article.appendChild(paragraph)
            creationImage(image, imageUrl, altTxt);
            creationH3(h3, produit.name);
            creationParagraph(paragraph, produit.description);
        }
        creationArticle(items, produit.imageUrl, produit.altTxt);
    }); 
})




   //                          fonction nom du produit
const creationH3 = (h3, nom) => {
    h3.innerText = (nom)
}
  //                          fonction de description du produit  
  const creationParagraph = (paragraph, description) => {
    paragraph.innerText = (description)
}

//                          fonction création de l'image du produit       
    
    const creationImage = (image, produit, text) => {
        image.setAttribute('src', produit)
        image.setAttribute('alt', text)
        console.log(text)
    }

              
    

