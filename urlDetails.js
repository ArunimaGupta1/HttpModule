let url = require("url");
let urlInfo = "https://google.com:80/home?id=100&name=Raj";
console.log(urlInfo);
let urlRef = url.parse(urlInfo,true); //converting string to URL reference
//console.log(urlRef);
console.log(urlRef.protocol);
console.log(urlRef.hostname);
console.log(urlRef.hostname);
console.log(urlRef.port);
console.log(urlRef.pathname);
console.log(urlRef.query);

let user = urlRef.query; //query considered as a reference
console.log(user);
console.log("ID is "+user.id);
console.log("Name is "+user.name);