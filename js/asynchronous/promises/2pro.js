let a=10, b=20;
let promise=new Promise((res,rej)=>{
    setTimeout(()=>{
        if(a>b)
        res("Resolved")
        else
        rej("Rejected")
    },5000)
})

promise.then((e)=>{console.log(e)}).catch((err)=>console.log(err))