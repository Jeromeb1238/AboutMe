
'use strict'

console.log("Hello")

var name = prompt('What is your name?');
  console.log('Your name is ' + name);  
  alert('Hello ' + name);

var growUp = prompt('Did you grow up in Washington?');

growUp = growUp.toLocaleUpperCase();

if(growUp == 'Y'|| growUp == 'YES'){
  console.log('User entered yes');
  alert('Awesome you grew up in WA');
} 

  else if(growUp == 'N' || growUp == 'NO'){
    console.log('User entered no');
    alert('I\'m sorry you didn\'t grow up in WA');
  }

  else{
    console.log('Invalid answer');
    alert('Invalid answer');
}

