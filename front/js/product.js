let pageProduitUrl = window.location.href
let url = new URL(pageProduitUrl);
const id = url.searchParams.get('id')
console.log(id)
let image = document.createElement('img')

let itemImage = document.getElementById('item__img')
fetch("http://localhost:3000/api/products")
.then(function(res){
    if (res.ok) {
        return res.json();
        
    }    
})    
.then(function(products){
    
    console.log(products[1]) 
    products.forEach(produit => {
        let productId = produit.id;
        for ( let i in produit.id){
            console.log(i)
        }
        console.log(produit._id)
        if (id==productId) {
            image.setAttribute('src', produit.imageUrl)
            itemImage.appendChild(image)
        }
    });                                                                            
    
    
    
    
    return products
}


)    

