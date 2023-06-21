function Person(name){
    return {
        name,
    say:function(){
        console.log(this.name);
    }
    }
}

const t=Person("Rahul")
console.log(t)