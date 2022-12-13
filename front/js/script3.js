fetch("http://localhost:3000/api/products")
.then((res)=> res.json())
.then((data) => {
    console.log(data)
    return ajoutProduits(data);
});


function ajoutProduits(produit){
    let id = produit[0]._id
    let link = makeLink(id)
    appendChildren(link)
}    
   
   

function makeLink (id){
    let link = document.createElement('a');
    link.href = ("./product.html?id=42"+id)
    //link.text = ("un super canapé")
    return link

}

function appendChildren (link) {
    let items = document.getElementById('items');
    if (items) {
        items.appendChild(link)
    }
    
}

function makeArticle () {
    let article = document.createElement('article')
    
}
function makeImage () {}
function makeH3 () {}
function makeParagraphe () {}