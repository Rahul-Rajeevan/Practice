function Person(name){
    return {
        name,
    say:function(){
        console.log(this.name);
    }
    }
}

function Mallu(name,age){
    let t=Object.create(Person(name))
    t.age=age;
   return t;
}
const t=Mallu("Rahul",20)
console.log(t)