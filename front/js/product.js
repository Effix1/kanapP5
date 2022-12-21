let url = new URL(window.location.href);
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
           // console.log(firstItem)
        }
        
        const choixCouleur = () => {
            for(let couleur of produit.colors){
                let colors = document.getElementById('colors')
                let option = document.createElement('option')
                colors.appendChild(option)
                option.innerText = couleur


            }    
        }

        const creaItem = () => {
            if (produit._id==id){
                //console.log(produit);
                choixCouleur();
                creaImage();
                description.innerText = produit.description
                title.innerText = produit.name
                price.innerText = produit.price
                //console.log(price)
                     
            }else {
            }
        }
        const soloItem = creaItem()


   }

   //     ****************       écoute du produit    *********************
   const cart = document.getElementById('addToCart')
   cart.addEventListener("click", (e)=>{
       const quantity = document.querySelector('#quantity').value
       const colors = document.querySelector('#colors').value
       if (colors == null || colors=="" && quantity == 0){
           alert('veuillez choisir une couleur et une quantité SVP ')
        }else if (quantity == 0)  {
            alert('veuillez choisir une quantity SVP')
        }else if (colors == ""){
            alert('veuillez choisir une couleur SVP')
        }
        else {}
        localStorage.setItem(id)
       
       
   } )




   //        *****************       array du produit *****************
   const commande = {
    id: id,
    //name: produit.name,
    
}
//console.log(commande)
//                                mise en local storage                            //
//console.log (document.getElementById("colors").value);
//const quantity = (document.getElementById("quantity").value);
//console.log (quantity)
localStorage.setItem = (id, colors, quantity)
//localStorage.countProduct(("quantity").value)
//const quantite = document.querySelector('#itemQuantity').value;
//console.log(quantite)

}
)    

