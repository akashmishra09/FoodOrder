console.log("Start");

setTimeout(function cbT() {
  console.log("CB SetTimeout");
}, 5000);

const test = await fetch("https://jsonplaceholder.typicode.com/todos/1");
console.log(test);
console.log("End");
