let id;
const handle=()=>{
    if(id)
    clearTimeout(id)
    id=setTimeout(()=>{
        console.log("first")
    },1000)  
}