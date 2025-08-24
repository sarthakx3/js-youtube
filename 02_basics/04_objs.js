//objects by constructor

const TinderUser = new Object()

TinderUser.id = "123abc"
TinderUser.name = "funnyyyy"
TinderUser.isLoggedIN = false

// console.log(TinderUser)

const regularUser = {
    email: "sum@gmail.com",
    fullname:{
        usersfullname:{
            firstname: "sarthak",
            lastname: "sharma"                 
        } 
    }
}

// console.log(regularUser.fullname?.usersfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj3 = Object.assign({},obj1,obj2)

const obj4 = {...obj1,...obj2}

// console.log(obj3)
// console.log(obj4);

//obj in array

const user = [
    {
        id: 1,
        mail: "mail@gmail.com"
    },
    {
        id: 1,
        mail: "mail@gmail.com"
    },
    {
        id: 1,
        mail: "mail@gmail.com"
    },
]

// console.log(user[1].id)

// console.log(TinderUser.id)

console.log(Object.keys(TinderUser))
console.log(Object.values(TinderUser))
console.log(Object.entries(TinderUser))

console.log(TinderUser.hasOwnProperty('isLogged'))

