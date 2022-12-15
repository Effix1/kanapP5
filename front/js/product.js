var str = "https://waytolearnx.com/t.html?name=alex-babtise&age=25&address=paris";
var url = new URL(str);
var nom = url.searchParams.get("name");
console.log(nom);                                                                                                              