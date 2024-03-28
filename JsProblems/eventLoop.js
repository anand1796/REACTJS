console.log("first");

setTimeout(() => {
  console.log("Second");
});

new Promise((resolve, reject) => {
  resolve("Third");
}).then((val) => {
  console.log(val);
});

console.log("Fourth");
