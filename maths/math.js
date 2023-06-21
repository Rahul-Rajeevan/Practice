console.log(typeof null) //empty object

// array is mutable, string is immutable str[3]="a" is not allowed

// variables are not values. They point to information (reference)

let obj={
    name:"Rahul"
}
Object.freeze(obj)


function abc(){
    var a=10
}
console.log(a)

console.log(this)

