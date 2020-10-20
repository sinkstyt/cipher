let sentence = prompt("Please give me a sentence you would like to scramble:");
console.log(sentence);

function capitalize1stAndLast(inputString) {
  if (typeof inputString == "string") {
    // declare a new variable outputString and capture a call .toUpperCase on inputString's first index value
    let outputString += inputString[0].toUpperCase();
    // capitalize the last letter of inputString
    if (typeof inputString[-1] !== "." || "?" || "!") {
      let lastLetter = inputString[-1];
    } else {
      let lastLetter = inputString[-2];
    }
    lastLetter = lastLetter.toUpperCase():
    outputString += lastLetter;
    return outputString;
  } else {
    prompt("Please provide your sentence some words.")
  }
}

function reverseTwoCapitals(veryShortString) {
  let output = veryShortString[1];
  output += veryShortString[0];
  return output;
}
function attachTwoCapsAtEnd() {
  let newTwoCaps = reverseTwoCapitals(capitalize1stAndLast(sentence));
  let output = sentence + newTwoCaps;
  return output;
}
function startWithMiddleLetter(str) {
  // NOPE, THIS PART IS NOT WHAT WAS MEANT IN THE PROMPT:    (  find every index whose value is " " and remove each and every " " found using RegExp
  // str = str.replace(/\s+/g, '');  )

  // Divide str.length by 2 and round down if necessary
  let halfLength = Math.floor(str.length / 2);
  // output the letter at this halfway point in the letter count
  let middleLetter = str[halfLength];
  str = middleLetter + str;
  return str;
}
let scrambledSentence = startWithMiddleLetter(sentence) + attachTwoCapsAtEnd();
// Now reverse scrambledSentence:
function reverseStr(str) {
  return str.split('').reverse().join('');
}
let finalWeirdString = reverseStr(scrambledSentence);

// Use jQuery to create two clickable images or pieces of text in your HTML page. When you click on the left one, it should show you the original sentence. If you click the other one, it should hide the original sentence and show the encoded one. Use Bootstrap to organize and style your page.