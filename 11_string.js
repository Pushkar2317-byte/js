//  const name="pushkar"
//  const age=20
//  console.log(`my name is ${name} and my age is ${age}`);
 

const gameName = new String('hitesh-hc')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    pushkar     "
console.log(newStringOne.trim());

const url="https://pushkar.com/pushkar%20singh"
console.log(url.replace("%20","-"));
console.log(url.includes("pushkar"));
console.log(gameName.split("-"));




