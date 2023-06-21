// using constructor function in real life


function Item(name,price)
{
    this.name=name;
    this.price=price;
}

let arr=[];

function getData(e){
    // gets data from form
    e.preventDefault()
    let form=document.getElementById("data")
    let name=form.name.value;
    let price=form.price.value;

    let t=new Item(name,price)
    arr.push(t)
    console.log(arr)
}