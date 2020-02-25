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

function Seattle (name , minCust , maxCust , avgCoookies, numberOfCookiesTotal, avgcookiesperh) {

  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCoookies = avgCoookies;
  this.numberOfCookiesTotal = numberOfCookiesTotal;
  this.avgcookiesperh = avgcookiesperh;
}
Seattle.prototype.getrandCust = function(){
  for (let l = 0; l < numberOfHours.length; l++) {
    this.avgcookiesperh.push(getRandomInt(this.minCust, this.maxCust));
  }

  Seattle.prototype.render = function(){

    var contain = document.getElementById('Shopes');
    var articleEle1 = document.createElement('article-h1');
    contain.appendChild(articleEle1);
    articleEle1.textContent = this.name;
    // console.log (articleEle);

    var ulEle1 = document.createElement('ul');
    articleEle1.appendChild(ulEle1);


    var liEle2 = document.createElement('li');

    var ulEle2 = document.createElement('ul');
    ulEle2.appendChild(liEle2);

    var pEle = document.createElement('p');
    contain.appendChild(pEle);


  };







  var shopSeattle = new Seattle('seattle', 23, 65, 6.3);






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

};
