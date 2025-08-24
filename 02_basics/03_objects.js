const mysym = Symbol("key1");

const myUser = {
    name: "sarthak",
    [mysym]: "key1",
    "Full Name": "sarthak sharma",
    Age: 22,
    mailId: "sarthak@gmail.com",
    IsLOggedIn : false
}

console.log(myUser["Full Name"])
// Object.freeze(myUser)
myUser.mailId = "xyz@gmail.com"

console.log(myUser);


myUser.greeting = function(){
    console.log("helllloooooooo")
}
console.log(myUser.greeting());

myUser.greeting2 = function(){
    console.log(`hellloooooo ${this.name}`)
}
console.log(myUser.greeting2());
