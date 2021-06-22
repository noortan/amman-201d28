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

let frankie = {
  name: 'Frankie',
  age: 0,
  likes: ['Food', 'chasing', 'napping'],
  isGoodKids: true,
  isGoodDog: false,
  isGoodCat: true,
  image: './images/frankie.jpeg',
  breed: 'British',
  getAge: function() {
    // this -> object name
    this.age = getRandomNumber(3, 12);
  },
  render: function() {
    // Create a new Element
    // add a text to the new element
    // append the child to the parent

    let articleElement = document.createElement('article');
    // articleElement.textContent = 'test article content';
    kittenProfiles.appendChild(articleElement);

    let nameTitle = document.createElement('h2');
    articleElement.appendChild(nameTitle);
    nameTitle.textContent = this.name;

    let kittenDescription = document.createElement('p');
    articleElement.appendChild(kittenDescription);
    kittenDescription.textContent = `${this.name} is a ${this.breed}, and he is ${this.age} months old`;

    let kittenList = document.createElement('ul');
    articleElement.appendChild(kittenList);

    for(let i = 0; i < this.likes.length; i++) {
      let listItem = document.createElement('li');
      kittenList.appendChild(listItem);
      listItem.textContent = this.likes[i];
    }

    let kittenImage = document.createElement('img');
    // kittenImage.setAttribute('src', this.image);
    kittenImage.src = this.image;
    articleElement.appendChild(kittenImage);
  }
};

let jumper = {
  name: 'Jumper',
  age: 0,
  likes: ['Food', 'napping'],
  isGoodKids: true,
  isGoodDog: false,
  isGoodCat: true,
  image: './images/jumper.jpeg',
  breed: 'Turkish',
  getAge: function(min, max) {
    // this -> object name
    this.age = getRandomNumber(min, max);
  },
  render: function() {
    // Create a new Element
    // add a text to the new element
    // append the child to the parent

    let articleElement = document.createElement('article');
    // articleElement.textContent = 'test article content';
    kittenProfiles.appendChild(articleElement);

    let nameTitle = document.createElement('h2');
    articleElement.appendChild(nameTitle);
    nameTitle.textContent = this.name;

    let kittenDescription = document.createElement('p');
    articleElement.appendChild(kittenDescription);
    kittenDescription.textContent = `${this.name} is a ${this.breed}, and he is ${this.age} months old`;

    let kittenList = document.createElement('ul');
    articleElement.appendChild(kittenList);

    for(let i = 0; i < this.likes.length; i++) {
      let listItem = document.createElement('li');
      kittenList.appendChild(listItem);
      listItem.textContent = this.likes[i];
    }

    let kittenImage = document.createElement('img');
    // kittenImage.setAttribute('src', this.image);
    kittenImage.src = this.image;
    articleElement.appendChild(kittenImage);
  }
};

frankie.getAge(3, 12);
frankie.render();

jumper.getAge(3, 12);
jumper.render();

console.log(frankie);
console.log(jumper);
// console.log([frankie, jumper]);

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// console.log(getRandomNumber(3, 12))