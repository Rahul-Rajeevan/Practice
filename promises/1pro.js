let a=10, b=20;
let promise=new Promise((res,rej)=>{
    if(a>b)
    res("Resolved")
    else
    rej("Rejected")
})

promise.then((e)=>{console.log(e)}).catch((err)=>console.log(err))