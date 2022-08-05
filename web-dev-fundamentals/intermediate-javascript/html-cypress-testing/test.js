// Your code here
function hasThreeVowels (str) {
    let vowels = "aeiou";
    let obj = {};

    for (char of str) {
        if (vowels.includes(char)) {
            if (!(char in obj) {
                obj[char] = 1;
            }
        }
    }

    let amount = 0;
    for (keys in obj) {
        amount++;
    }

    return amount > 3;
}


console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false
