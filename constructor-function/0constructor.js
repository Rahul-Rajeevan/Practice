// In JavaScript, constructors and prototypes are used to create objects and 
// implement inheritance. Constructors are special functions that are used to 
// initialize objects, while prototypes allow objects to inherit properties and 
// methods from other objects.

// Constructor Functions:

// Constructor functions are used to create objects with a common structure and 
// behavior. They are named functions that are intended to be called with the new 
// keyword.
// By convention, constructor function names start with a capital letter.
// Inside the constructor function, you can define properties and methods using 
// the this keyword.



// this always points to an object. It could be window or the one you create

function abc(n){
    let obj={}
    obj.name=n;
    return obj
}


let t=abc("Rahul")
console.log(t)

//Convert into construtor function

function Bcd(n){
    this.name=n;   //this will create the obj and return it
}

let t2=new Bcd("Rahul")
console.log(t2)