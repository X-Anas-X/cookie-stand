'use strict';


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


var numberOfHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var numberOfCookiesTotal = 0;
var avgcookiesperh = [];
function Shop(name, minCust, maxCust, avgCoookies) {

  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCoookies = avgCoookies;

}
Shop.prototype.avgcookiesperh = function () {
  for (var i = 0; i < numberOfHours.length; i++) {
    var calculate = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;

    var multiplyedByAvg = Math.floor(calculate * this.avgCoookies);

    this.avgcookiesperh[i] = multiplyedByAvg;}};
// console.log("+++"+multiplyedByAvg+"+++"+this.avgcookiesperh[i]);



Shop.prototype.render = function () {

  var contain = document.getElementById('Shopes');
  var articleEle1 = document.createElement('article');
  contain.appendChild(articleEle1);
  articleEle1.textContent = this.name;
  console.log (articleEle1);

  var ulEle1 = document.createElement('ul');
  articleEle1.appendChild(ulEle1);

  for (var m = 0; m < numberOfHours.length; m++) {
    var liEle1 = document.createElement('li');
    liEle1.textContent = `${numberOfHours[m]} ${avgcookiesperh[m]} Cookies`;
    ulEle1.appendChild(liEle1);}



  var pEle = document.createElement('p');
  pEle.textContent = 'Total = ' + numberOfCookiesTotal;
  contain.appendChild(pEle);


  // console.table('at ' + Shop.numberOfHours[m] + ' ' + Shop.avgcookiesperh[m] + ' Customers and we should bake ' + Shop.avgcookiesperh + ' Cookies');

};

var tableEle = document.createElement('table');
function table(){
  container.appendChild(tableEle);
  var trEle = document.createElement('tr');
  tableCons.appendChild(trEle);
  for (var t = 0; t < numberOfHours.length; t++) {
    var thEle = document.createElement('th');
    trTab.appendChild(thEle);
    thEle.textContent = numberOfHours[t];
  }}
























var seattle = new Shop('seattle', 23, 65, 6.3);
var tokyo = new Shop('tokyo', 3, 24, 1.2);
var dubai = new Shop('Dubai', 11, 38, 3.7);
var paris = new Shop('Paris', 20, 38, 2.3);
var lima = new Shop('Lima', 2, 16, 4.6);


seattle.render();





// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var Chours = ['', '', '', '', '', '', '', '', '', '', '', '', '', ''];
// var seattle = {
//   minCust: 23,
//   maxCust: 65,
//   avgOfCookies: 6.3,
//   getRandCust: function () { // generate random number of customer
//     var getrandNum = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//     return getrandNum;
//   },
//   sales: function () { //this number of cookies hourly
//     var multi = 0;
//     multi = Math.floor(this.getRandCust() * this.avgOfCookies);
//     return multi;
//   },
//   cookiesPerHour: function () { //store random values inside array each item indicate to number of cookies hourly
//     for (var c=0; c < Chours.length; c++) {
//       if (Chours[c]===''){
//         Chours[c] = this.sales();
//         console.log(`c=${c} ${Chours[c]}`);
//       }

//     }
//   },
//   sumT: function () {
//     var sumArr = 0;
//     for (var t = 0; t < Chours.length; t++) {
//       sumArr = sumArr + Chours[t];
//     }
//     console.log(`t=${t} ${sumArr}`);
//   },

//   addEle: function () {
//     var unOrderedList = document.createElement('ul');
//     // console.log(unList);
//     var list = document.getElementById('linked');
//     // console.log(list);
//     for (var numList = 0; numList < Chours.length; numList++) {
//       // console.log(itemList);
//       var itemList = document.createElement('li');
//       // console.log(itemList);
//       itemList.appendChild(list);
//       itemList.appendChild(unOrderedList);
//       // console.log(itemList);
//       itemList.textContent = this.cookiesPerHour();
//       // console.log(itemList);
//     }}};

// seattle.getRandCust();
// seattle.sales();
// seattle.cookiesPerHour();
// seattle.sumT();
// seattle.addEle();




function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


// var numOfHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var contain = document.getElementById('location1');
// var newArr = [];
// function Seattle(name, minCust, maxCust, avgCookiesCust) {
//   this.name = name;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgCookiesCust = avgCookiesCust;
//   this.avgCookiePerHour = [];
//   this.totalSumCookei = 0;
//   newArr.push(this);
//   console.log(Seattle);
// }
// Seattle.prototype.avgCookiePerHour = function () {
//   for (var i = 0; i < numOfHours.length; i++) {
//     var calculate = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     // console.log('calc11', calc1)
//     var multiplyedByAvg = Math.floor(calculate * this.avgCookiesCust);
//     // console.log(("++++++++"+multiplyedByAvg));
//     this.avgCookieSoldPerHour[i] = multiplyedByAvg;
//     // console.log("+++"+multiplyedByAvg+"+++"+this.avgCookieSoldPerHour[i]);
//   }
// };
// Shop.prototype.totalSum = function () {
//   var newSumSe = 0;
//   for (var h = 0; h < this.avgCookieSoldPerHour.length; h++) {
//     newSumSe = newSumSe + this.avgCookieSoldPerHour[h];
//     // this.totalSumCookei.push(newSumSe);
//     this.totalSumcookei = newSumSe;
//   }
//   console.log('dfhdfh', this.totalSumCookei);
//   console.log('nnnnnnnnnnnn', newSumSe);
//   // return newSumSe;
// };
// var tableCons = document.createElement('table');
// function tableHead(){
//   container1.appendChild(tableCons);
//   var trTab = document.createElement('tr');
//   tableCons.appendChild(trTab);
//   var thTab = document.createElement('th');
//   trTab.appendChild(thTab);
//   thTab.textContent= '   ';
//   for (var t1 = 0; t1 < workHours.length; t1++) {
//     var th1 = document.createElement('th');
//     trTab.appendChild(th1);
//     th1.textContent = workHours[t1];
//   }
//   var th2Tab = document.createElement('th');
//   trTab.appendChild(th2Tab);
//   th2Tab.textContent= '  Daily Location Total ';
// }
// tableHead();
// Shop.prototype.render= function(){
//   var tr2 = document.createElement('tr');
//   tableCons.appendChild(tr2);
//   tr2.textContent= this.name;
//   for (var f=0; f<workHours.length ; f++){
//     var td1 = document.createElement('td');
//     tr2.appendChild(td1);
//     td1.textContent = this.avgCookieSoldPerHour[f];
//   }
//   var tdTotaDaily = document.createElement('td');
//   tr2.appendChild(tdTotaDaily);
//   tdTotaDaily.textContent= this.totalSumCookei ;
// };
// Shop.prototype.tablefooter= function(){
//   var trFooter = document.createElement('tr');
//   tableCons.appendChild(trFooter);
//   trFooter.textContent= 'Totals';
//   for (var f=0; f<workHours.length ; f++){
//     var tdTotaHourly = document.createElement('td');
//     trFooter.appendChild(tdTotaHourly);
//     for (var x=0 ; x<this.avgCookieSoldPerHour;x++){

//       tdTotaHourly.textContent= this.avgCookieSoldPerHour[x] ;
//     }
//   // for (var fo=0 ;fo<shops.length ; fo++){
//   // }
//   }};
// var seattle = new Shop('Seattle', 23, 65, 6.3);
// var tokyo = new Shop('tokyo', 3, 24, 1.2);
// var dubai = new Shop('Dubai', 11, 38, 3.7);
// var paris = new Shop('Paris', 20, 38, 2.3);
// var lima = new Shop('Lima', 2, 16, 4.6);
// seattle.avgCookiePerHour();
// seattle.totalSum();
// seattle.render();
// tokyo.avgCookiePerHour();
// tokyo.totalSum();
// tokyo.render();
// dubai.avgCookiePerHour();
// dubai.totalSum();
// dubai.render();
// paris.avgCookiePerHour();
// paris.totalSum();
// paris.render();
// lima.avgCookiePerHour();
// lima.totalSum();
// lima.render();
// seattle.tablefooter();
