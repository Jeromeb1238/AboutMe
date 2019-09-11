'use strict'

console.log("Hello")

var name = prompt('What is your name?');
  console.log('Your name is ' + name);  
  alert('Hello ' + name\.  I\'m going to ask you some questions that I talk about');

var growUp = prompt('Did you grow up in Washington?');

growUp = growUp.toLocaleUpperCase();

if(growUp == 'Y'|| growUp == 'YES'){
  console.log('User entered yes');
  alert('Awesome\, you grew up in WA\, so did I');
} 

  else if(growUp == 'N' || growUp == 'NO'){
    console.log('User entered no');
    alert('I\'m sorry you didn\'t grow up in WA');
  }

  else{
    console.log('Invalid answer');
    alert('Invalid answer');
}

var pet = prompt('Do you have a pet?');

pet = pet.toLocaleUpperCase();

if(pet == 'Y'|| pet == 'YES'){
  console.log('User entered yes');
  alert('Pets are great\. I have two dogs');
} 

  else if(pet == 'N' || pet == 'NO'){
    console.log('User entered no');
    alert('');
  }

  else{
    console.log('Invalid answer');
    alert('Invalid answer');
}
