'use strict';


var shopSeattle = {
  name: 'seattle',
  minCust: 23,
  maxCust: 65,
  avgCoookies: 6.3,
  avgcookiesperh: [],
  numberOfCookiesTotal: 0,
  numberOfHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getrandCust: function () {
    for (let l = 0; l < this.numberOfHours.length; l++) {
      this.avgcookiesperh.push(getRandomInt(this.minCust, this.maxCust));
      // console.log(getRandomInt(this.minCust, this.maxCust));
      // console.log(this.avgcookiesperh.push(this.numberOfCust * this.avgCoookies));

    }
  },
  render: function () {
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
    for (var m = 0; m < this.numberOfHours.length; m++) {
      var liEle1 = document.createElement('li');
      liEle1.textContent = this.numberOfHours[m] + ' : ' + this.avgcookiesperh[m] + ' Cookies';
      ulEle1.appendChild(liEle1);
      pEle.textContent = 'Total = ' + this.numberOfCookiesTotal;

      // this.getrandCust();
      // console.table('at ' + shopSeattle.numberOfHours[m] + ' ' + shopSeattle.avgcookiesperh[m] + ' Customers and we should bake ' + shopSeattle.avgcookiesperh + ' Cookies');
    }
  }
  // console.log ('The total number of Cookies is ' + shopSeattle.numberOfCookiesTotal);
};

shopSeattle.getrandCust();
shopSeattle.render();


















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





var shopTokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCoookies: 1.2,
  numberOfCust: 0,
  avgcookiesperh: [],
  numberOfCookiesTotal: 0,
  numberOfHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getrandCust: function () {
    for (let l = 0; l < this.numberOfHours.length; l++) {
      this.numberOfCust = getRandomInt(this.minCust, this.maxCust);
      //console.log(getRandomInt(this.minCust, this.maxCust));
      for (let k = 0; k < 14; k++) {
        this.avgcookiesperh.push(getRandomInt(this.minCust, this.maxCust));
      }
    }
  },
  render: function () {
    var contain = document.getElementById('Shopes');
    var articleEle1 = document.createElement('article-h1');
    contain.appendChild(articleEle1);
    articleEle1.textContent = shopTokyo.name;
    // console.log (articleEle);

    var ulEle1 = document.createElement('ul');
    articleEle1.appendChild(ulEle1);


    var liEle2 = document.createElement('li');

    var ulEle2 = document.createElement('ul');
    ulEle2.appendChild(liEle2);
    var pEle = document.createElement('p');
    contain.appendChild(pEle);
    for (var m = 0; m < shopTokyo.numberOfHours.length; m++) {
      var liEle1 = document.createElement('li');
      liEle1.textContent = shopTokyo.numberOfHours[m] + ' : ' + shopTokyo.avgcookiesperh[m] + ' Cookies';
      ulEle1.appendChild(liEle1);

      pEle.textContent = 'Total = ' + shopTokyo.numberOfCookiesTotal;
    }





    // this.getrandCust();
    // console.table('at ' + shopTokyo.numberOfHours[m] + ' ' + shopTokyo.numberOfCust + ' Customers and we should bake ' + shopTokyo.avgcookiesperh + ' Cookies');
  }
  // console.log ('The total number of Cookies is ' + shopSeattle.numberOfCookiesTotal);


};

shopTokyo.getrandCust();
shopTokyo.render();







var shopDubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCoookies: 3.7,
  numberOfCust: 0,
  avgcookiesperh: [],
  numberOfCookiesTotal: 0,
  numberOfHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getrandCust: function () {
    for (let l = 0; l < this.numberOfHours.length; l++) {
      this.numberOfCust = getRandomInt(this.minCust, this.maxCust);
      //console.log(getRandomInt(this.minCust, this.maxCust));
      for (let k = 0; k < 14; k++) {
        this.avgcookiesperh.push(getRandomInt(this.minCust, this.maxCust));
      }
    }
  },
  render: function () {
    var contain = document.getElementById('Shopes');
    var articleEle1 = document.createElement('article-h1');
    contain.appendChild(articleEle1);
    articleEle1.textContent = shopDubai.name;
    // console.log (articleEle);

    var ulEle1 = document.createElement('ul');
    articleEle1.appendChild(ulEle1);


    var liEle2 = document.createElement('li');

    var ulEle2 = document.createElement('ul');
    ulEle2.appendChild(liEle2);
    var pEle = document.createElement('p');
    contain.appendChild(pEle);
    for (var m = 0; m < shopDubai.numberOfHours.length; m++) {
      var liEle1 = document.createElement('li');
      liEle1.textContent = shopDubai.numberOfHours[m] + ' : ' + shopDubai.avgcookiesperh[m] + ' Cookies';
      ulEle1.appendChild(liEle1);

      pEle.textContent = 'Total = ' + shopDubai.numberOfCookiesTotal;
    }





    // this.getrandCust();
    // console.table('at ' + shopDubai.numberOfHours[m] + ' ' + shopDubai.numberOfCust + ' Customers and we should bake ' + shopDubai.avgcookiesperh + ' Cookies');
  }
  // console.log ('The total number of Cookies is ' + shopSeattle.numberOfCookiesTotal);


};

shopDubai.getrandCust();
shopDubai.render();





var shopParis = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCoookies: 2.3,
  numberOfCust: 0,
  avgcookiesperh: [],

  numberOfCookiesTotal: 0,
  numberOfHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getrandCust: function () {
    for (let l = 0; l < this.numberOfHours.length; l++) {
      this.numberOfCust = getRandomInt(this.minCust, this.maxCust);
      //console.log(getRandomInt(this.minCust, this.maxCust));
      for (let k = 0; k < 14; k++) {
        this.avgcookiesperh.push(getRandomInt(this.minCust, this.maxCust));
      }
    }
  },
  render: function () {
    var contain = document.getElementById('Shopes');
    var articleEle1 = document.createElement('article-h1');
    contain.appendChild(articleEle1);
    articleEle1.textContent = shopParis.name;
    // console.log (articleEle);

    var ulEle1 = document.createElement('ul');
    articleEle1.appendChild(ulEle1);


    var liEle2 = document.createElement('li');

    var ulEle2 = document.createElement('ul');
    ulEle2.appendChild(liEle2);
    var pEle = document.createElement('p');
    contain.appendChild(pEle);
    for (var m = 0; m < shopParis.numberOfHours.length; m++) {
      var liEle1 = document.createElement('li');
      liEle1.textContent = shopParis.numberOfHours[m] + ' : ' + shopParis.avgcookiesperh[m] + ' Cookies';
      ulEle1.appendChild(liEle1);

      pEle.textContent = 'Total = ' + shopParis.numberOfCookiesTotal;
    }





    // this.getrandCust();
    // console.table('at ' + shopParis.numberOfHours[m] + ' ' + shopParis.numberOfCust + ' Customers and we should bake ' + shopParis.avgcookiesperh + ' Cookies');
  }
  // console.log ('The total number of Cookies is ' + shopSeattle.numberOfCookiesTotal);


};

shopParis.getrandCust();
shopParis.render();




var shopLima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCoookies: 4.6,
  numberOfCust: 0,
  img: 'img/salmon.png',
  avgcookiesperh: [],
  numberOfCookiesTotal: 0,
  numberOfHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  getrandCust: function () {
    for (let l = 0; l < this.numberOfHours.length; l++) {
      this.numberOfCust = getRandomInt(this.minCust, this.maxCust);
      //console.log(getRandomInt(this.minCust, this.maxCust));
      for (let k = 0; k < 14; k++) {
        this.avgcookiesperh.push(getRandomInt(this.minCust, this.maxCust));
      }
    }
  },
  render: function () {
    var contain = document.getElementById('Shopes');
    var articleEle1 = document.createElement('article-h1');
    contain.appendChild(articleEle1);
    articleEle1.textContent = shopLima.name;
    // console.log (articleEle);

    var ulEle1 = document.createElement('ul');
    articleEle1.appendChild(ulEle1);


    var liEle2 = document.createElement('li');

    var ulEle2 = document.createElement('ul');
    ulEle2.appendChild(liEle2);
    var pEle = document.createElement('p');
    contain.appendChild(pEle);
    for (var m = 0; m < shopLima.numberOfHours.length; m++) {
      var liEle1 = document.createElement('li');
      liEle1.textContent = shopLima.numberOfHours[m] + ' : ' + shopLima.avgcookiesperh[m] + ' Cookies';
      ulEle1.appendChild(liEle1);

      pEle.textContent = 'Total = ' + shopLima.numberOfCookiesTotal;
    }



    var imgEle1 = document.createElement('img');

    imgEle1.setAttribute('src', this.img);

    articleEle1.appendChild(imgEle1);


    // this.getrandCust();
    // console.table('at ' + shopLima.numberOfHours[m] + ' ' + shopLima.numberOfCust + ' Customers and we should bake ' + shopLima.avgcookiesperh + ' Cookies');
  }
  // console.log ('The total number of Cookies is ' + shopSeattle.numberOfCookiesTotal);


};

shopLima.getrandCust();
shopLima.render();


















































function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}















// time1: 6 ,
// time2: 7 ,
// time3: 8 ,
// time4: 9 ,
// time5: 10 'a,
// time6: 11 'am',
// time7: 12 'pm',
// time8: 1 'pm',
// time9: 2 'pm',
// time10: 3 'pm',
// time11: 4 'pm',
// time12: 5 'pm',
// time13: 6 'pm',
// time14: 7 'pm'

