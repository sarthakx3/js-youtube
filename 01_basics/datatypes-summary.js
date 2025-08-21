const heroes = ["shaktiman","sarthak","xyz"]


// console.log(typeof heroes)

//dataTypes
//primitive non primitive

//primitive => string , number , boolean , null , undefined , symbol ,BigInt
// non primitive or reference => arrays , object , functions

const score = 100;
const newscore = 100.3;
// console.log(score)
// console.log(newscore);

const IsLoggedIn = false;
// console.log(Number(IsLoggedIn));

// const OutTemp = null;
// console.log(OutTemp);


// console.log(typeof OutTemp);
// console.log(typeof score);
// console.log(typeof IsLoggedIn);

const myfun = function() {
    console.log("hemlo World");
    }

    function alpha() {
        console.log("hellojiii");
    }


console.log(myfun());


// **********************************************************************//

// stack heap

let myYTname= "sarthakog"
let newName = myYTname;
newName = "ASxSarthakog"
// console.log(newName);
// console.log(myYTname);

let userOne={
    email : "xyz@gmail.com",
    upi : "upi@ybl"
}
let userTwo=userOne;

userTwo.email = "alpha@gmail.com"
console.log(userOne.email);





