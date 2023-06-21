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