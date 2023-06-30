Create a function called delayedLog that accepts a message and a delay time (in milliseconds) as arguments. The function should log the message after the specified delay using a callback.


CALLBACK

function delayedLog(mes,delay,callback){
setTimeout(()=>{
callback(mes)
},delay)
}

delayedLog("Hi",2000,(mes)=>{console.log(mes);})


PROMISES

function delayedLog(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

delayedLog("Hi", 2000)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });



ASYNC- AWAIT

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function delayedLog(message, delay) {
  await delay(delay);
  return message;
}

async function logDelayedMessage() {
  try {
    const message = await delayedLog("Hi", 2000);
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

logDelayedMessage();
