const name = "shivam"
const id=166

//backticks ` `

console.log(`My name is ${name} and id is ${id}`);

const name2= new String("Shivam")


console.log(name2.length);
console.log(name2.toLocaleUpperCase());
console.log(name2.charAt(1));
console.log(name2.indexOf('i'));

console.log(name2.substring(0,2));
console.log(name2.slice(-5,-2));

const newStr=" shivam "
console.log(newStr);
console.log(newStr.trim());
console.log(newStr.trimEnd());
console.log(newStr.trimStart());

const url ="https://hitesh.com/hitesh%20kumar"

console.log(url.replace('%20',"-"));
console.log(url.includes("shivam"));

console.log(url.split('/'));

console.log(url.lastIndexOf("hitesh",11));


