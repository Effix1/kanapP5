let spell = "pouak"
console.log(spell)
let paramsString = "./index.html";
let searchParams = new URLSearchParams(paramString);

for (let p of searchParams){
    console.log(p)
}