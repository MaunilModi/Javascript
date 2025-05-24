//Object.create

// object literals
// make symbol
const mySym = Symbol("key1")

const JsUser = {
    name: "Maunil",
    "full name": "Maunil Modi",
    [mySym] : "myKey1",
    age: 12,
    location: "Mumbai",
    email: "maunil@gmail.com",
    arr : [1, 2, 3]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "Maunil@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "Maunil@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello How Are You???")
}

JsUser.greetingTwo = function(){
    console.log(`Hello How Are You, ${this.name}`)
}


// console.log(JsUser.greeting) // This returns reference of function
// console.log(JsUser.greeting()) // Call function
// console.log(JsUser.greetingTwo())


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}               // conbines objects
// console.log(obj4)

const tinder = {
    email: "abc@gmail.com",
    name: "abc"
}

// console.log(Object.keys(tinder)) // return keys of tinder object
// console.log(Object.values(tinder)) // return values of tinder object
// console.log(tinder.hasOwnProperty('email')) // check for given key is present or not


////////////////////////////////////////////////////////////////////////////////////////////////////
// Object Destucturing

const course = {
    courseName: "JS",
    price: "111",
    courseIntructor: "hitesh"
}

// course.courseIntructor
const {courseIntructor: instructor} = course;

console.log(instructor)