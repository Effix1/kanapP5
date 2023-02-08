fetch ('http://localhost:3000/api/products')
.then(r=>r.text())
.then(body=>console.log(body))