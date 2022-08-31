"use strict";

const cookieData = document.getElementById("sales-container");

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

/*************
Seattle
**************/

const seattle = {
  locationName: "seattle",
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerSale: 6.3,
  customerEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customerEachHour.push(
        randomNum(this.minCustPerHour, this.maxCustPerHour)
      );
    }
  },
  calcCookiesEachHour: function () {
    this.calcCustomersEachHour();
    for (let i = 0; i < hours.length; i++) {
      const oneHour = Math.ceil(
        this.customerEachHour[i] * this.avgCookiesPerSale
      );
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render: function () {
    this.calcCookiesEachHour();

    const article = document.createElement("article");
    article.classList.add("country-container");
    const h3 = document.createElement("h3");
    h3.classList.add("sales-title");
    h3.textContent = this.locationName;
    article.appendChild(h3);

    const ul = document.createElement("ul");

    for (let i = 0; i < hours.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
      ul.appendChild(listItem);
    }
    article.appendChild(ul);
    cookieData.appendChild(article);
  },
};

/**************
Tokyo
**************/

const tokyo = {
  locationName: "Tokyo",
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerSale: 1.2,
  customerEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customerEachHour.push(
        randomNum(this.minCustPerHour, this.maxCustPerHour)
      );
    }
  },
  calcCookiesEachHour: function () {
    this.calcCustomersEachHour();
    for (let i = 0; i < hours.length; i++) {
      const oneHour = Math.ceil(
        this.customerEachHour[i] * this.avgCookiesPerSale
      );
      this.cookiesEachHour.push(oneHour);
    }
    this.totalDailyCookies += this.oneHour;
  },
  render: function () {
    this.calcCookiesEachHour();

    const article = document.createElement("article");
    article.classList.add("country-container");
    const h3 = document.createElement("h3");
    h3.classList.add("sales-title");
    h3.textContent = this.locationName;
    article.appendChild(h3);

    const ul = document.createElement("ul");

    for (let i = 0; i < hours.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
      ul.appendChild(listItem);
    }
    article.appendChild(ul);
    cookieData.appendChild(article);
  },
};

/**************
Dubia
***************/

const dubia = {
  locationName: "Dubia",
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerSale: 3.7,
  customerEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customerEachHour.push(
        randomNum(this.minCustPerHour, this.maxCustPerHour)
      );
    }
  },
  calcCookiesEachHour: function () {
    this.calcCustomersEachHour();
    for (let i = 0; i < hours.length; i++) {
      const oneHour = Math.ceil(
        this.customerEachHour[i] * this.avgCookiesPerSale
      );
      this.cookiesEachHour.push(oneHour);
    }
  },
  render: function () {
    this.calcCookiesEachHour();

    const article = document.createElement("article");
    article.classList.add("country-container");
    const h3 = document.createElement("h3");
    h3.classList.add("sales-title");
    h3.textContent = this.locationName;
    article.appendChild(h3);

    const ul = document.createElement("ul");

    for (let i = 0; i < hours.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
      ul.appendChild(listItem);
    }
    article.appendChild(ul);
    cookieData.appendChild(article);
  },
};

/**************
Paris
***************/

const paris = {
  locationName: "Paris",
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerSale: 2.3,
  customerEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customerEachHour.push(
        randomNum(this.minCustPerHour, this.maxCustPerHour)
      );
    }
  },
  calcCookiesEachHour: function () {
    this.calcCustomersEachHour();
    for (let i = 0; i < hours.length; i++) {
      const oneHour = Math.ceil(
        this.customerEachHour[i] * this.avgCookiesPerSale
      );
      this.cookiesEachHour.push(oneHour);
    }
  },
  render: function () {
    this.calcCookiesEachHour();

    const article = document.createElement("article");
    article.classList.add("country-container");
    const h3 = document.createElement("h3");
    h3.classList.add("sales-title");
    h3.textContent = this.locationName;
    article.appendChild(h3);

    const ul = document.createElement("ul");

    for (let i = 0; i < hours.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
      ul.appendChild(listItem);
    }
    article.appendChild(ul);
    cookieData.appendChild(article);
  },
};

/**************
Lima
***************/

const lima = {
  locationName: "Lima",
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerSale: 4.6,
  customerEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customerEachHour.push(
        randomNum(this.minCustPerHour, this.maxCustPerHour)
      );
    }
  },
  calcCookiesEachHour: function () {
    this.calcCustomersEachHour();
    for (let i = 0; i < hours.length; i++) {
      const oneHour = Math.ceil(
        this.customerEachHour[i] * this.avgCookiesPerSale
      );
      this.cookiesEachHour.push(oneHour);
    }
  },
  render: function () {
    this.calcCookiesEachHour();

    const article = document.createElement("article");
    article.classList.add("country-container");
    const h3 = document.createElement("h3");
    h3.classList.add("sales-title");
    h3.textContent = this.locationName;
    article.appendChild(h3);

    const ul = document.createElement("ul");

    for (let i = 0; i < hours.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
      ul.appendChild(listItem);
    }
    article.appendChild(ul);
    cookieData.appendChild(article);
  },
};

/****************
 Generic  
 ****************/

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const allShops = [seattle];

// function renderAllShops() {
//   for (let i = 0; i < allShops.length; i++) {
//     allShops[i].render();
//   }
// }

seattle.render();
tokyo.render();
dubia.render();
paris.render();
lima.render();
// console.log(tokyo);
