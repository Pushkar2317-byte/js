// stack for premitive data type--> GIVE YOU A COPY OF THE VALUE
//heap for non premitive data type--> GIVE YOU THE ORIGINAL VALUE

//++++++++++++++ STACK EXAMPLE ++++++++++++++++
let myYoutubename = "puskardotcom"
let anothername = myYoutubename
anothername="chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

// ++++++++++++++ HEAP EXAMPLE +++++++++++++
let userOne = {
    email:"user.com",
    upi:"user.ybl"
}
let userTwo = userOne
userTwo.email="user2.com"
console.log(userOne.email);
console.log(userTwo.email);

