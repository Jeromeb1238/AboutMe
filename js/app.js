'use strict'

var counter = 0

console.log("Hello")

var name = prompt('What is your name?');

console.log('Your name is ' + name);
alert('Hello ' + name + '.  I\'m going to give you a short quiz About me');







//Question #1 //



function questionNumber(question) {

  if (question === 1) {


    var growUp = prompt('Am I a native of Washington?');
    growUp = growUp.toLocaleUpperCase();

    if (growUp == 'Y' || growUp == 'YES') {
      console.log('User entered yes');
      alert('Yes\. I am a native of Washington');

      counter++;
    }
    else if (growUp == 'N' || growUp == 'NO') {
      console.log('Incorrect for native');
      alert('No');
    }
    else {
      console.log('Invalid response');
      alert('No response');
    }
  }

  if (question === 2) {
    //question 2
    var married = prompt('Am I married?');

    married = married.toLocaleUpperCase();

    if (married == 'Y' || married == 'YES') {
      console.log('Yes to married');
      alert('Yes\. I am a married');

      counter++;
    }
    else if (married == 'N' || married == 'NO') {
      console.log('Incorrect for married');
      alert('No');
    }
    else {
      console.log('Invalid response');
      alert('No response');
    }
  }
  if (question === 3) {
    // Question # 3 //
    var shoreline = prompt('Do I live in shoreline?');

    shoreline = shoreline.toLocaleUpperCase();

    if (shoreline == 'Y' || shoreline == 'YES') {
      console.log('Yes for shoreline');
      alert('Yes, I live in shoreline');

      counter++;
    }
    else if (shoreline == 'N' || shoreline == 'NO') {
      console.log('Incorrect for shoreline');
      alert('Incorrect, I live in shoreline');
    }
    else {
      console.log('No response shoreline');
      alert('No response shoreline');
    }
  }

  if (question === 4) {

    // Question # 4 //
    var army = prompt('Was I in the army?');

    army = army.toLocaleUpperCase();

    if (army == 'Y' || army == 'YES') {
      console.log('Yes for Army');
      alert('Yes, I was in the Army');
      counter++;
    }
    else if (army == 'N' || army == 'NO') {
      console.log('Incorrect for Army');
      alert('Incorrect, I was in the Army');
    }
    else {
      console.log('No response Army');
      alert('No response Army');
    }
  }
  if (question === 5) {
    // Question #5 //
    var pets = prompt('Do you have any pets?');

    pets = pets.toLocaleUpperCase();

    if (pets == 'Y' || pets == 'YES') {
      console.log('User has pets');
      alert('Are family loves pets too\.');
      counter++;
    }
    else if (pets == 'N' || pets == 'NO') {
      console.log('Incorrect for pets');
      alert('Incorrect, I do have pets');
    }
    else {
      console.log('No response pets');
      alert('No response');
    }
  }

}







//Question #6 guessing # of children
var numberGuesses = 1
var numberChildren = 6
var userGuess = 0
var correctGuess = false

while (numberGuesses < 5 && !correctGuess) {
  userGuess = prompt('Guess # of children?');
  if (userGuess > numberChildren) {
    console.log('guess # ' + numberGuesses + '\.  User\'s guess is ' + userGuess);
    alert("Incorrect, too high");
    numberGuesses++;

  } else if (userGuess < numberChildren) {
    console.log('guess # ' + numberGuesses + '\.  User\'s guess is ' + userGuess);
    alert("Incorrect, too low");
    numberGuesses++;

  } else {
    correctGuess = true
    alert('good job, you guessed correctly')
    counter++
  }
  // } if() {

  // }
  // ]

  // //Question #7 Guess the name
  // var names=['one','two','three','four','five']
  // var guess=prompt('Guess the name')

  // for(var i=0; i < names.length; i++) {
  //   console.log(names[i]); 
  //   console.log('This is guess ' + guess)
  // if(guess===names[i]){
  //   alert("yes it is " + guess);
  //   counter++
  //   break;
  // }
  //   else if(i<7) {
  //    guess=prompt('make another guess')
  //    console.log('This is guessAgain ' + guess);
} 