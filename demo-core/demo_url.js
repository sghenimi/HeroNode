const url = require('url');
const myUrl = new URL('https://developer.mozilla.org/en-US/search?q=shadow+dom');

//URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host
console.log(myUrl.host); // root domain (with port)
console.log(myUrl.hostname) //without port

//path
console.log(myUrl.pathname);

//query
console.log(myUrl.search);

//params
console.log(myUrl.searchParams);
myUrl.searchParams.append('abc', '123');
console.log(myUrl.href);
console.log(myUrl.searchParams);
//loop through params
myUrl.searchParams.forEach((value, name) => {
    console.log(`${name} : ${value}`)
});