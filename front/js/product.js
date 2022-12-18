let pageProduitUrl = window.location.href;
let url = new URL(pageProduitUrl);
const id = url.searchParams.get('id');




fetch("http://localhost:3000/api/products")
.then(function(res){
    if (res.ok) {
        return res.json();     
    }    
})    
.then(function(products){
    const description = document.getElementById('description')
    const itemImg = document.getElementsByClassName('item__img')
    const firstItem = itemImg[0];
    const image = document.createElement('img')

    
    for (let produit of products){
        
        if (produit._id==id){
            console.log(produit);
            description.innerText = produit.description
            firstItem.appendChild (image)
            image.setAttribute('src', produit.imageUrl)
            console.log(firstItem)
            
           
        }else {
        }
        /*console.log(target.imageUrl)    
        console.log(target.name)
        itemImage.appendChild(image)*/
   }
}
)    

