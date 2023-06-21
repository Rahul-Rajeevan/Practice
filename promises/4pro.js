// Write a function that takes an array of promises and returns a promise that resolves 
// with an array of their results.

let a=10, b=20;
let promise1=new Promise((res,rej)=>{
        if(a<b)
        res("Resolved")
        else
        rej("Rejected 1")
})

let promise2=new Promise((res,rej)=>{
        if(a>b)
        res("Resolved")
        else
        rej("Rejected 2")
})


let myFn=(pro)=>{
return Promise.all(pro)
}

myFn([promise1,promise2]).then((res)=>console.log(res)).catch((err)=>console.log(err))