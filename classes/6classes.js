class Person{
    constructor(name)
    {
     this.name=name;
    } 
 }

class Mallu extends Person{
    constructor(name,age)
    {
        super(name);
        this.age=age;
    }
}

 let t=new Mallu("Rakhi",18)
 console.log(t)