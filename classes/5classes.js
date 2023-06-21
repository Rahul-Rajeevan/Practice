class Person{
    constructor(name)
    {
     this.name=name;
    } 
 }
Person.prototype.say=function(){
    console.log("Hi")
}

 let t=new Person("Rakhi")
 t.say()
 console.log(t)