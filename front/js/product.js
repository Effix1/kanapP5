let url = new URL(window.location.href);
const id = url.searchParams.get('id');

fetch("http://localhost:3000/api/products/"+ id)
.then(function(res){
    if (res.ok) {
        return res.json();     
    }    
})    
.then(function(produit){

    const prixUnitaire= (produit.price)
    const description = document.getElementById('description')
    const title = document.getElementById('title')
    const price = document.getElementById('price')
    
    const itemImg = document.getElementsByClassName('item__img')
    const firstItem = itemImg[0];
    const image = document.createElement('img')
    
    const creaImage = () => {
        image.setAttribute('src', produit.imageUrl)
        image.setAttribute('alt',produit.altTxt)
        firstItem.appendChild (image)
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
        
        choixCouleur();
        creaImage();
        description.innerText = produit.description
        title.innerText = produit.name
        price.innerText = produit.price
        const addToCart = document.getElementById('addToCart')
  
        addToCart.addEventListener("click", (e)=>{
            const quantity = parseInt(document.querySelector('#quantity').value) 
            
            const colors = document.querySelector('#colors').value
            if ( colors=="" && quantity == 0){
                alert('veuillez choisir une couleur et une quantité SVP ')
            }else if (quantity == 0)  {
                alert('veuillez choisir une quantity SVP')
            }else if (colors == ""){
                alert('veuillez choisir une couleur SVP')
            }
            else {
                alert('Vous avez choisi ' + quantity + " "+produit.name + " " + colors)
                const cart = JSON.parse (localStorage.getItem('caddy'))|| []
                console.log(cart)
                const identifiantExistant =cart.findIndex(item =>item.id == id && item.color == colors)
                
                if (identifiantExistant==-1) {
                    const cartItem = {
                        id:id,
                        color:colors,
                        quantity:quantity,
                        
                        
                    }
                    console.log(prixUnitaire)
                    console.log(cartItem)
                    cart.push(cartItem)
                }else {
                    cart[identifiantExistant].quantity+=quantity
                        }
                        
                        localStorage.setItem('caddy', JSON.stringify(cart))
                        }
                     //localStorage.setItem(id)
                     
                     
                 } )
                     
           
        }
        const soloItem = creaItem()


   

   //     ****************       écoute du produit    *********************
    



   //        *****************       array du produit *****************
  
}
)    

