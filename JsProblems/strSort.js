function sortString(str) {
  let sorted = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] < str[j]) {
        // sort in descending order
        // Swap characters
        let tempArray = str.split(""); // string to array
        let temp = tempArray[i];
        tempArray[i] = tempArray[j];
        tempArray[j] = temp;
        str = tempArray.join(""); // back to string
      }
    }
    sorted += str[i];
  }
  return sorted;
}

console.log(sortString("JavaScript"));
