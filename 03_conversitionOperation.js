let score="33"  // string
//console.log(typeof(score)); //string
let valueToNumber=Number(score)
// console.log(typeof valueToNumber); //number
//console.log(valueToNumber);

let score1="33abc"
let valueToNumber1=Number(score1)
//  console.log(typeof valueToNumber1); number
// console.log(valueToNumber1); # NaN

let score2=null
let valueToNumber2=Number(score2)
// console.log(typeof valueToNumber2); # number
 //console.log(valueToNumber2); #0

let score3=undefined
let valueToNumber3=Number(score3)
//  console.log(typeof valueToNumber3); #number
//  console.log(valueToNumber3); # NaN

/*
"33" => 33
"33abc"=> NaN 
true => 1; false=> 0
*/

let bool=1
let boolToBool=Boolean(bool)
// console.log(typeof boolToBool);
// console.log(boolToBool);           

/*
1=>true;0=>false
"Pushkar"=>true
*/

// console.log(1+2); //3
//console.log("1"+ 2 + 3); //123
// console.log(1 + 2 + "3"); //33

let game1=100
game1++;
//console.log(game1);
let game2=100
++game2;
//console.log(game2);












