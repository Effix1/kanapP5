fetch("http://localhost:3000/api/products")
    .then(function(res){
        if (res.ok) {
            return res.json();
            
        }
    })
    .then(function(products) {
        const cart = JSON.parse (localStorage.getItem('caddy'))|| []
        console.log(cart )
        //console.log(cart[2].color )
        //console.log(cart [2].id)
        //console.log(cart [2].quantity)
        console.log(products)
        products.forEach(produit => {
            console.log(produit._id)
            if(cart.id=produit._id){
                  console.log('yes')
              }else{
                  console.log('no')
              }
            
        });
    })

