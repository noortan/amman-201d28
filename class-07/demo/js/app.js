// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed

// TODO: dynamically generate kitten objects using form data

'use strict';

let kittenProfiles = document.getElementById('kittenProfiles');

// console.log(kittenProfiles);

// let frankie = {
//   name: 'Frankie',
//   age: 0,
//   likes: ['Food', 'chasing', 'napping'],
//   isGoodKids: true,
//   isGoodDog: false,
//   isGoodCat: true,
//   image: './images/frankie.jpeg',
//   breed: 'British',
//   getAge: function() {
//     // this -> object name
//     this.age = getRandomNumber(3, 12);
//   },
//   render: function() {
//     // Create a new Element
//     // add a text to the new element
//     // append the child to the parent

//     let articleElement = document.createElement('article');
//     // articleElement.textContent = 'test article content';
//     kittenProfiles.appendChild(articleElement);

//     let nameTitle = document.createElement('h2');
//     articleElement.appendChild(nameTitle);
//     nameTitle.textContent = this.name;

//     let kittenDescription = document.createElement('p');
//     articleElement.appendChild(kittenDescription);
//     kittenDescription.textContent = `${this.name} is a ${this.breed}, and he is ${this.age} months old`;

//     let kittenList = document.createElement('ul');
//     articleElement.appendChild(kittenList);

//     for(let i = 0; i < this.likes.length; i++) {
//       let listItem = document.createElement('li');
//       kittenList.appendChild(listItem);
//       listItem.textContent = this.likes[i];
//     }

//     let kittenImage = document.createElement('img');
//     // kittenImage.setAttribute('src', this.image);
//     kittenImage.src = this.image;
//     articleElement.appendChild(kittenImage);
//   }
// };

// let jumper = {
//   name: 'Jumper',
//   age: 0,
//   likes: ['Food', 'napping'],
//   isGoodKids: true,
//   isGoodDog: false,
//   isGoodCat: true,
//   image: './images/jumper.jpeg',
//   breed: 'Turkish',
//   getAge: function(min, max) {
//     // this -> object name
//     this.age = getRandomNumber(min, max);
//   },
//   render: function() {
//     // Create a new Element
//     // add a text to the new element
//     // append the child to the parent

//     let articleElement = document.createElement('article');
//     // articleElement.textContent = 'test article content';
//     kittenProfiles.appendChild(articleElement);

//     let nameTitle = document.createElement('h2');
//     articleElement.appendChild(nameTitle);
//     nameTitle.textContent = this.name;

//     let kittenDescription = document.createElement('p');
//     articleElement.appendChild(kittenDescription);
//     kittenDescription.textContent = `${this.name} is a ${this.breed}, and he is ${this.age} months old`;

//     let kittenList = document.createElement('ul');
//     articleElement.appendChild(kittenList);

//     for(let i = 0; i < this.likes.length; i++) {
//       let listItem = document.createElement('li');
//       kittenList.appendChild(listItem);
//       listItem.textContent = this.likes[i];
//     }

//     let kittenImage = document.createElement('img');
//     // kittenImage.setAttribute('src', this.image);
//     kittenImage.src = this.image;
//     articleElement.appendChild(kittenImage);
//   }
// };

// frankie.getAge(3, 12);
// frankie.render();

// jumper.getAge(3, 12);
// jumper.render();

// console.log(frankie);
// console.log(jumper);
// console.log([frankie, jumper]);

function Cat(name, age, likes, isGoodKids, isGoodCat, isGoodDog, image, breed) {
  this.name = name;
  this.age = 0;
  this.likes = likes;
  this.isGoodKids = isGoodKids;
  this.isGoodCat = isGoodCat;
  this.isGoodDog = isGoodDog;
  this.image = image;
  this.breed = breed;
}

Cat.prototype.getAge = function (min, max) {
  // this -> object name
  this.age = getRandomNumber(min, max);
};

Cat.prototype.render = function () {
  // Create a new Element
  // add a text to the new element
  // append the child to the parent
  // this.getAge(3, 12);
  let articleElement = document.createElement('article');
  // articleElement.textContent = 'test article content';
  kittenProfiles.appendChild(articleElement);

  let nameTitle = document.createElement('h2');
  articleElement.appendChild(nameTitle);
  nameTitle.textContent = this.name;

  let kittenDescription = document.createElement('p');
  articleElement.appendChild(kittenDescription);
  kittenDescription.textContent = `${this.name} is a ${this.breed}, and he is ${this.age} months old`;


  let table = document.createElement('table');
  articleElement.appendChild(table);

  let headTR = document.createElement('tr');
  table.appendChild(headTR);

  let th1 = document.createElement('th');
  headTR.appendChild(th1);
  th1.textContent = 'Is Good with Cats';

  let th2 = document.createElement('th');
  headTR.appendChild(th2);
  th2.textContent = 'Is Good with Kids';
 
  let th3 = document.createElement('th');
  headTR.appendChild(th3);
  th3.textContent = 'Is Good with Dogs';

  let bodyTR = document.createElement('tr');
  table.appendChild(bodyTR);

  let td1 = document.createElement('td');
  bodyTR.appendChild(td1);
  td1.textContent = this.isGoodCat;

  let td2 = document.createElement('td');
  bodyTR.appendChild(td2);
  td2.textContent = this.isGoodKids;
 
  let td3 = document.createElement('td');
  bodyTR.appendChild(td3);
  td3.textContent = this.isGoodDog;

  let kittenList = document.createElement('ul');
  articleElement.appendChild(kittenList);

  for (let i = 0; i < this.likes.length; i++) {
    let listItem = document.createElement('li');
    kittenList.appendChild(listItem);
    listItem.textContent = this.likes[i];
  }

  let kittenImage = document.createElement('img');
  // kittenImage.setAttribute('src', this.image);
  kittenImage.src = this.image;
  articleElement.appendChild(kittenImage);
}

let frankie = new Cat('Frankie', 6, ['chasing', 'eating'], true, true, false, './images/frankie.jpeg', 'Turkish');

let jumper = new Cat('Jumper', 6, ['chasing', 'eating'], true, true, false, './images/jumper.jpeg', 'British');

let serena = new Cat('Serena', 6, ['chasing', 'eating'], true, true, false, './images/serena.jpeg', 'British');


console.log(frankie, jumper);
frankie.getAge(3, 12);
frankie.render();

jumper.getAge(3, 12);
jumper.render();

serena.getAge(3, 12);
serena.render();


function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// console.log(getRandomNumber(3, 12))