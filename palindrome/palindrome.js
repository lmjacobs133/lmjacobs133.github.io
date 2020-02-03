/*
window.testObject = {
  isPalindrome: funk
}

function funk(name) {

  let nameArray = name.split('');
  let success = false;

  do {
    let isEqual = stepThrough(nameArray);
    if (isEqual == false) {

      console.log("Not a palindrome  :( ")
      break;

    } else {

      success = isEqual;
    }

  } while (nameArray.length > 1)

  if (success) {
    console.log("Your name is a palindrome!");
  }

}

function stepThrough(nameArray) {

  let lastLetter = nameArray.pop();
  let firstLetter = nameArray.shift();
  if (lastLetter === firstLetter) {
    return true;

  } else {

    return false;
  }
}
*/

let wordArray = [];  // this is the stack, as an array

let normalWord = prompt("Input any word to see if it is a palindrome: ");

let reverseWord = "";

for (let i = 0; i < normalWord.length; i++) {

    wordArray.push(normalWord[i]);

}

for (let i = 0; i < normalWord.length; i++) {

    reverseWord += wordArray.pop();

}

if (reverseWord === normalWord) {

    alert(normalWord + " is a palindrome.");
    location.reload();

} else {

    alert(normalWord + " is not a palindrome.");
    location.reload();
}
