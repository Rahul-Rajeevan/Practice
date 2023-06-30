function item(pri)
{
    this.price=pri;
}
// item.prototype.show=()=>{
//     console.log(this.price)
// }
item.prototype.show=function(){
    console.log(this.price)
}
let t=new item(300)
t.show()

// In your code, you have defined the show method for the item prototype in two different ways: one using an arrow function and another using a regular function expression.

// The reason why the arrow function doesn't work as expected in this case is due to how arrow functions handle the this keyword. Arrow functions do not bind their own this value but inherit it from the surrounding scope.

// When you use an arrow function as the method (show) in the prototype, the this inside the arrow function will not refer to the instance of the item object (t). Instead, it will refer to the this value of the surrounding scope, which in this case is likely the global scope (such as the browser's window object or the Node.js global object).

// Therefore, when you attempt to access this.price inside the arrow function, it will most likely be undefined or throw an error because there is no price property in the global scope.

// On the other hand, when you use a regular function expression to define the show method, it properly binds this to the instance of the item object. That way, this.price will refer to the price property of the specific item instance (t in this case), and the code will work as expected.

// To summarize, when working with prototype methods in JavaScript, it is generally recommended to use regular function expressions instead of arrow functions to ensure correct binding of the this keyword.