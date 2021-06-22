// Created by: Waleed A. Afifi
// Email: waleed-afifi@windowslive.com
// GitHub: https://github.com/waleedafifi90
// LinkedIn: https://www.linkedin.com/in/walafifi/

'use strict';

let imgArray = [
  'pablo-merchan-montes-MXovqM130UI-unsplash.jpg',
  'anna-pelzer-IGfIGP5ONV0-unsplash.jpg',
  'anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg',
  'brooke-lark-HlNcigvUi4Q-unsplash.jpg',
  'joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg',
  'shayna-douglas-GvoVScughvI-unsplash.jpg',
  'brooke-lark-qdyBKWSzpSI-unsplash.jpg'
];

// Constructor
// New obj
// prototype render
// Random function
// get by id
// Event Handler

let imageSection = document.getElementById( 'imageSection' );
let leftImage = document.getElementById( 'leftImage' );
let rightImage = document.getElementById( 'rightImage' );

let counter = 0;

function Images( name, src ) {
  this.name = name;
  this.src = `./img/${src}`;
  this.views = 0;
  Images.all.push( this );
}

Images.all = [];

for( let i = 0; i < imgArray.length; i++ ) {
  // console.log(imgArray[i].split( '.' ));
  new Images( imgArray[i].split( '.' )[0], imgArray[i] );
}

function render() {
  let leftIndex = randomNumber( 0, imgArray.length - 1 );
  let rightIndex;

  do {
    rightIndex = randomNumber( 0, imgArray.length - 1 );
  } while( leftIndex === rightIndex );

  rightImage.src = Images.all[rightIndex].src;
  leftImage.src = Images.all[leftIndex].src;

  Images.all[rightIndex].views++;
  Images.all[leftIndex].views++;

  console.log( Images.all );
}

function eventHandler( e ) {
  // console.log(e.target.id);
  if( ( e.target.id === 'rightImage' || e.target.id === 'leftImage' ) && counter < 10 ){
    render();
    console.log( counter );
    counter++;

  } else if (counter >= 10) {
    drawChart();
  }

}

imageSection.addEventListener( 'click', eventHandler );

render();

// console.log(Images.all);
// leftImage.setAttribute('src', Images.all[0].src)
// let index = randomNumber(0, imgArray.length - 1);
// rightImage.src = Images.all[index].src;
// console.log( leftImage, rightImage );

// Helper function
function randomNumber( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
}

function drawChart() {

  let name = [];
  let view = [];

  for(let i = 0; i < Images.all.length; i++) {
    name.push(Images.all[i].name);
    view.push(Images.all[i].views);
  }

  let ctx = document.getElementById( 'myChart' ).getContext( '2d' );

  let myChart = new Chart( ctx, {
    type: 'bar',
    data: {
      labels: name,
      datasets: [{
        label: '# of Votes',
        data: view,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 10
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  } );

}
