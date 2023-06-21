function item(pri)
{
    this.price=pri
    this.show=()=>{
        console.log(this.price)
    }
}

let t=new item(300)
t.show()