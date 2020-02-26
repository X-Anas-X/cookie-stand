'use strict';



var numberOfHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


var container = document.getElementById('container');
var tableEle = document.createElement('table');
container.appendChild(tableEle);
var salmstores = [];

function Shop(name, minCust, maxCust, avgCoookies) {

  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCoookies = avgCoookies;
  this.cookiesArr = [];
  this.cookiesTotal = 0;
  salmstores.push(this);
  this.cookies();
}
Shop.prototype.cookies = function () {
  for (var i = 0; i < numberOfHours.length; i++) {
    var calcuPerHour = Math.floor(getRandomNum(this.maxCust, this.minCust) * this.avgCoookies);
    this.cookiesArr.push(calcuPerHour);
    this.cookiesTotal += this.cookiesArr[i];
  }
};


function header() {

  var trEle = document.createElement('tr');
  tableEle.appendChild(trEle);
  var thSpace = document.createElement('th');

  thSpace.textContent = ' ';
  trEle.appendChild(thSpace);
  for (var m = 0; m < numberOfHours.length; m++) {
    var thEle = document.createElement('th');
    thEle.textContent = `${numberOfHours[m]}`;
    trEle.appendChild(thEle);
  }

  var thTotal = document.createElement('th');
  thTotal.textContent = 'Total';
  trEle.appendChild(thTotal);


  // console.table('at ' + Shop.numberOfHours[m] + ' ' + Shop.avgcookiesperh[m] + ' Customers and we should bake ' + Shop.avgcookiesperh + ' Cookies');

}

Shop.prototype.render = function(){
  var trEle =document.createElement('tr');
  tableEle.appendChild(trEle);
  var tdEle = document.createElement('td');
  trEle.appendChild(tdEle);
  tdEle.textContent = this.name;
  for (let m=0; m<numberOfHours.length; m++){
    tdEle = document.createElement('td');
    trEle.appendChild(tdEle);
    tdEle.textContent = this.cookiesArr[m];
  }
  var tdCookieTotal = document.createElement('td');
  trEle.appendChild(tdCookieTotal);
  tdCookieTotal.textContent = this.cookiesTotal;

};

new Shop('Seattle', 23, 65, 6.3);
new Shop('Tokyo', 3, 24, 1.2);
new Shop('Dubai', 11, 38, 3.7);
new Shop('Paris', 20, 38, 2.3);
new Shop('Lima', 2, 16, 4.6);

function footer() {
  var trEle = document.createElement('tr');
  tableEle.appendChild(trEle);
  var tdEle = document.createElement('td');
  trEle.appendChild(tdEle);
  tdEle.textContent = 'Total';
  var totalHours;
  var finalTotal = 0;
  for (var h = 0; h<numberOfHours.length;h++){
    totalHours = 0;
    for(var s=0;s<salmstores.length;s++){
      totalHours += salmstores[s].cookiesArr[h];

    }
    var tdHour = document.createElement('td');
    tdHour.textContent = totalHours;
    finalTotal += totalHours;
    trEle.appendChild(tdHour);
  }
  var tdFinalTotal = document.createElement('td');
  tdFinalTotal.textContent = finalTotal;
  trEle.appendChild(tdFinalTotal);
}
header();
for (var n = 0; n <salmstores.length;n++){
  salmstores[n].render();
}
footer();



















// var shopSeattle = {
//   name: 'seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCoookies: 6.3,
//   avgcookiesperh: [],
//   numberOfCookiesTotal: 0,
//   numberOfHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

//   getrandCust: function () {
//     for (let l = 0; l < this.numberOfHours.length; l++) {
//       this.avgcookiesperh.push(getRandomInt(this.minCust, this.maxCust));
//       // console.log(getRandomInt(this.minCust, this.maxCust));
//       // console.log(this.avgcookiesperh.push(this.numberOfCust * this.avgCoookies));

//     }
//   },
//   render: function () {
//     var contain = document.getElementById('Shopes');
//     var articleEle1 = document.createElement('article-h1');
//     contain.appendChild(articleEle1);
//     articleEle1.textContent = this.name;
//     // console.log (articleEle);

//     var ulEle1 = document.createElement('ul');
//     articleEle1.appendChild(ulEle1);


//     var liEle2 = document.createElement('li');

//     var ulEle2 = document.createElement('ul');
//     ulEle2.appendChild(liEle2);

//     var pEle = document.createElement('p');
//     contain.appendChild(pEle);
//     for (var m = 0; m < this.numberOfHours.length; m++) {
//       var liEle1 = document.createElement('li');
//       liEle1.textContent = this.numberOfHours[m] + ' : ' + this.avgcookiesperh[m] + ' Cookies';
//       ulEle1.appendChild(liEle1);
//       pEle.textContent = 'Total = ' + this.numberOfCookiesTotal;

// this.getrandCust();
// console.table('at ' + shopSeattle.numberOfHours[m] + ' ' + shopSeattle.avgcookiesperh[m] + ' Customers and we should bake ' + shopSeattle.avgcookiesperh + ' Cookies');
//     }
//   }
//   // console.log ('The total number of Cookies is ' + shopSeattle.numberOfCookiesTotal);
// };

// shopSeattle.getrandCust();
// shopSeattle.render();

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

