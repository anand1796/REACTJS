let arr = [42, 17, 89, 3, 56, 72, 91, 24, 10, 98];

let newArr = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < newArr) {
    newArr = arr[i];
  }
}

console.log(newArr);
