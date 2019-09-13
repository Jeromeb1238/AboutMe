// 'use strict'
var counter = 0
// var name = prompt('Hello, what is your name?');
// console.log('Hello ' + name);

// Question 1 of Quiz
var native = prompt('Am I a native of Washington?');

if (native.toUpperCase() == 'Y' || native.toUpperCase() == 'YES') {
  alert('Yes, I am a native of Washington');
  counter++;
}
else if (native.toUpperCase() == 'N' || native.toUpperCase()== 'NO') {
  alert('Incorrect, I am a native of WA');
}
else { 
  alert('No answer');
}

// Question 4 of Quiz
var married = prompt('Am I a married?');

if (married.toUpperCase() == 'Y' || married.toUpperCase() == 'YES') {
  alert('Yes, I am married');
  counter++;
}
else if (married.toUpperCase() == 'N' || married.toUpperCase()== 'NO') {
  alert('Incorrect, I am married');
}
else { 
  alert('No answer');
}
// Question 3 of Quiz
var pets = prompt('Do I have pets?');

if (pets.toUpperCase() == 'Y' || pets.toUpperCase() == 'YES') {
  alert('Yes, I pets');
  counter++;
}
else if (pets.toUpperCase() == 'N' || pets.toUpperCase()== 'NO') {
  alert('Incorrect, I do have pets');
}
else { 
  alert('No answer');
}
// Question 4 of Quiz
var shoreline = prompt('Do I live in Shoreline?');

if (shoreline.toUpperCase() == 'Y' || shoreline.toUpperCase() == 'YES') {
  alert('Yes, I live in Shoreline');
  counter++;
}
else if (shoreline.toUpperCase() == 'N' || shoreline.toUpperCase()== 'NO') {
  alert('Incorrect, I live in Shoreline');
}
else { 
  alert('No answer');
}
// Question 5 of Quiz
var chef = prompt('Was I a chef?');

if (chef.toUpperCase() == 'Y' || chef.toUpperCase() == 'YES') {
  alert('Incorrect, I was not a chef');
}
else if (chef.toUpperCase() == 'N' || chef.toUpperCase()== 'NO') {
  alert('Correct, I was not a chef');
  counter++
}
else { 
  alert('No answer');
}

//Question 6 of quiz is a loop to guess # of children
alert ('This next question gives 4 tries to guess how many children I have.');
var numGuesses = 0;
numChildren = 6
isCorrect = false;

while (numGuesses < 4 && !isCorrect) {
  console.log (numGuesses,isCorrect);
  var answer = parseInt(prompt('Guess how many children'));
  if (!isNaN(answer)) {
    if (answer === numChildren) {
      console.log (answer);
      alert ('Yes, that is correct, I have numChildren children.');
      isCorrect = true;
      console.log (numGuesses,isCorrect);
      counter++
    }
    else if (answer < numChildren) {
      alert ('Too low');
      numGuesses++
    }
    else if (answer > numChildren) {
      alert ('Too high');
      numGuesses++
    }
  }
}
if (numGuesses >= 4) {
  alert ('That was 4 guesses, I have 6 children');
}
alert ('Score is ' + counter);


