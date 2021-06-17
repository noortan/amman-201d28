'use strict';

const hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let parentElement = document.getElementById('salesData');

let salesTable = document.getElementById('salesTable');
let cookieForm = document.getElementById('cookieForm');

function CookieStand(name, min, max, avg) {
  this.name = name;
  this.minCust = min;
  this.maxCust = max;
  this.agvCookie = avg;
  this.cookiesPerHour = [];
  this.total = 0;
  CookieStand.allCookies.push(this)
}

CookieStand.allCookies = [];

CookieStand.prototype.getCustomer = function() {
  for(let i = 0; i < hours.length; i++) {
    // console.log(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

    let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

    this.cookiesPerHour.push(cookies);

    this.total += cookies;
    // this.total = this.total + cookies;
  }

  // console.log(this.cookiesPerHour);
  // console.log(this.total)
};

CookieStand.prototype.render = function() {
  let tr = document.createElement('tr');
  salesTable.appendChild(tr);

  let th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = this.name;

  for(let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.cookiesPerHour[i];
  }

  let total = document.createElement('th');
    tr.appendChild(total);
    total.textContent = this.total;
}

let seattle = new CookieStand('Seattle', 23, 65, 6.3)
let tokyo = new CookieStand('Tokyo', 3, 24, 1.2)
let dubai = new CookieStand('Dubai', 11, 38, 3.7)
let paris = new CookieStand('Paris', 20, 38, 2.3)
let lima = new CookieStand('liam', 2, 16, 4.6)

makeTableHeader();

seattle.getCustomer();
seattle.render();

tokyo.getCustomer();
tokyo.render();

dubai.getCustomer();
dubai.render();

paris.getCustomer();
paris.render();

lima.getCustomer();
lima.render();

makeTableFooter();

function makeTableHeader() {
  let tr = document.createElement('tr');
  salesTable.appendChild(tr);

  let th1 = document.createElement('th');
  tr.appendChild(th1);
  th1.textContent = 'Location';

  for(let i = 0; i < hours.length; i++) {
    let th2 = document.createElement('th');
    tr.appendChild(th2);
    th2.textContent = hours[i];
  }

  let th3 = document.createElement('th');
  tr.appendChild(th3);
  th3.textContent = 'Daily totals';
}

function makeTableFooter() {
  // console.log(CookieStand.allCookies)
  let tr = document.createElement('tr');
  salesTable.appendChild(tr);

  let th1 = document.createElement('th');
  tr.appendChild(th1);
  th1.textContent = 'Totals';

  let hourlyTotal = 0;
  let totalOfTotals = 0;
  for(let i = 0; i < hours.length; i++) {
    hourlyTotal = 0;
    for(let j = 0; j < CookieStand.allCookies.length; j++) {
      // console.log(CookieStand.allCookies[j].cookiesPerHour[i])
      let total = CookieStand.allCookies[j].cookiesPerHour[i];
      hourlyTotal += total;
      totalOfTotals += total;
    }
    let th2 = document.createElement('th');
    tr.appendChild(th2);
    th2.textContent = hourlyTotal;
  }

  let th3 = document.createElement('th');
  tr.appendChild(th3);
  th3.textContent = totalOfTotals;
}

function addNewCity(evt) {
  evt.preventDefault();
  // console.log(evt);
  let cityName = evt.target.cityName.value;
  let minCust = evt.target.minCustomer.value;
  let maxCust = evt.target.maxCustomer.value;
  let avg = evt.target.avgCookie.value;

  salesTable.deleteRow(-1);

  let newCity = new CookieStand(cityName, minCust, maxCust, avg);


  newCity.getCustomer();
  newCity.render();
  makeTableFooter();
  cookieForm.reset();

  console.log(newCity);
}

cookieForm.addEventListener('submit', addNewCity);

// Helper function
function getRandomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


// document.getElementById('welcome').innerHTML = 'Welcome Waleed';