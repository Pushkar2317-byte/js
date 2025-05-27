// PRIMITIVE ->
 // 7 TYPES = STRING,NUMBER,BOOLEAN,NULL,UNDIFINED,SYMBOL,BIG INT

 const id=Symbol("123")
  const id2=Symbol("123")
  //console.log(id===id2); #false

 // REFERENCE (NON-PRIMITIVE)->
  // ARRAY,OBJECT,FUNCTIONS

  const heros=["abc","def"]; //array;

  let myObj={    // object in parathesis in key colon value pair
    name:"Pushkar",
    age:18,
  }
  const myFunction = function(){
   console.log("hello");
   }
// console.log(typeof heros);
