
const now=new Date()
 //console.log(now)    //2025-05-26T05:40:25.144Z

//console.log(typeof now);   //OBJECT

//console.log(now.toDateString());  //Mon May 26 2025

//console.log(now.toISOString());  //2025-05-26T05:41:09.926Z

//console.log(now.toLocaleString());  //  26/5/2025, 11:11:28 am

 //console.log(now.toJSON());  // 2025-05-26T05:41:53.968Z

//console.log(now.toString());  // Mon May 26 2025 11:13:01 GMT+0530 (India Standard Time)

//console.log(now.toString());

// const date = new Date("2025-05-26T05:14:10.524Z"); // Your output as input

// console.log(date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })); // 26/05/2025, 10:44:10

const myCreatedDate = new Date(2005,8,1)
// const myCreatedDate2 = new Date("2005-09-01") // yy-mm-dd // MONTH START FROM ONE
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate2.toDateString())
// console.log(typeof myCreatedDate);

let mytimeStamp=Date.now() // exact 
//console.log(Date.now());

// console.log(mytimeStamp);  //1748239048207 millisecond value fro 1 Jan 1970
// console.log(myCreatedDate.getTime());  //1125513000000
// console.log(Math.floor(Date.now()/1000)); //1748239337 millisecond to second of current time

const newDate = new Date()
console.log(newDate.getMonth()); // MONTH START FROM ZERO //
console.log(newDate.getMonth()+1) //5


