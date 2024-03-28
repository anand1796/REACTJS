function rev(string) {
  let newRev = "";

  for (let i = string.length - 1; i >= 0; i--) {
    newRev += string[i];
  }
  return newRev;
}

const output = rev("Javascript");

console.log(output);
