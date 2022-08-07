// your code here
function removeEWords(sentence) {
  let words = sentence.split(" ");
  let newArray = [];
  for (word of words) {
    let e = false;

    for (char of word) {
      if (char.toLowerCase() === "e") {
        e = true;
        break;
      }
    }

    if (!e) {
      newArray.push(word);
    }
  }

  return newArray.join(" ");
}

console.log(removeEWords("What time is it everyone?")); // 'What is it'
console.log(removeEWords("Enter the building")); // 'building'
