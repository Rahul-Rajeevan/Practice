// obj method change object properties

let obj={
    name:"Rahul",
    chang:function(na){
        this.name=na
    }
}

obj.chang("rakhi")
console.log(obj)