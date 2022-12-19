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
    const title = document.getElementById('title')
    const price = document.getElementById('price')

   

    
    for (let produit of products){
        
        const itemImg = document.getElementsByClassName('item__img')
        const firstItem = itemImg[0];
        const image = document.createElement('img')
        const creaImage = () => {
            image.setAttribute('src', produit.imageUrl)
            image.setAttribute('alt',produit.altTxt)
            firstItem.appendChild (image)
            console.log(firstItem)
        }

        const creaItem = () => {
            if (produit._id==id){
                console.log(produit);
                
                creaImage();
                description.innerText = produit.description
                title.innerText = produit.name
                price.innerText = produit.price
                
                let couleurs = produit.colors;
                for(let couleur of couleurs){
                    let colors = document.getElementById('colors')
                    let option = document.createElement('option')
                    colors.appendChild(option)
                    option.innerText = couleur


                }
                

                    
                ;
                
            }else {
            }
        }

        
        //colors();
        const soloItem = creaItem();

     
        
   }
}
)    

