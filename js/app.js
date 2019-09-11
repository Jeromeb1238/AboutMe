'use strict'

console.log("Hello")

var name = prompt('What is your name?');
  console.log('Your name is ' + name);  
  alert('Hello ' + name +  '.  I\'m going to ask you some questions that I discuss in my web page\.');

//Question #1 //
  var growUp = prompt('Are you a native of Washington?');

growUp = growUp.toLocaleUpperCase();

if(growUp == 'Y'|| growUp == 'YES'){
  console.log('User entered yes');
  alert('Awesome\, so am I\!');
} 
  else if(growUp == 'N' || growUp == 'NO'){
    console.log('User entered no');
    alert('That is okay, you\'ve come to an amazing place\.');
  }
  else{
    console.log('Invalid response on native');
    alert('No response');
}

// Question # 2 //
var seattle = prompt('Do you live in Seattle?');

seattle = seattle.toLocaleUpperCase();

if(seattle == 'Y'|| seattle == 'YES'){
  console.log('User lives in Seattle');
  alert('\'Yes\'\, you live in Seattle.  It is a beautiful city\.');
} 
  else if(seattle == 'N' || seattle == 'NO'){
    console.log('User does not live in Seattle');
    alert('I hope you don\'t have a long commute\.');
  }
  else{
    console.log('No seattle response');
    alert('No response');
}

// Question # 3 //
var children = prompt('Any children?');

children = children.toLocaleUpperCase();

if(children == 'Y'|| children == 'YES'){
  console.log('User entered yes');
  alert('I also have children.');
} 
  else if(children == 'N' || children == 'NO'){
    console.log('User entered no');
    alert('No children.  I dream of those days; sometimes\.');
  }
  else{
    console.log('No children response');
    alert('No response');
}

// Question #4 //
var seaHawk = prompt('Are you a Seahawk fan?');

seaHawk = seaHawk.toLocaleUpperCase();

if(seaHawk == 'Y'|| seaHawk == 'YES'){
  console.log('User is a SeaHawk fan');
  alert('I am a Seahawk fan also\.  How could one not!');
} 
  else if(seaHawk == 'N' || seaHawk == 'NO'){
    console.log('User is not a fan');

    alert('What, how is this possible?  Russel Wilson?');
  }
  else{
    console.log('Not a Seahawks fan');
    alert('No comment');
}

// Question #5 //
var pets = prompt('Do you have any pets?');

pets = pets.toLocaleUpperCase();

if(pets == 'Y'|| pets == 'YES'){
  console.log('User has pets');
  alert('Are family loves pets too\.');
} 
  else if(pets == 'N' || pets == 'NO'){
    console.log('User has no pets');
    alert('No pets');
  }
  else{
    console.log('No pets');
    alert('None specified');
}
