"use strict";

const cookieData = document.getElementById("cookie-data");

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

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function CookieStand(
  locationName,
  minCustPerHour,
  maxCustPerHour,
  avgCookiesPerSale
) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customerEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
}

CookieStand.prototype.calcCustomersEachHour = function () {
  console.log("hey buddy");
  for (let i = 0; i < hours.length; i++) {
    this.customerEachHour.push(
      randomNum(this.minCustPerHour, this.maxCustPerHour)
    );
  }
};

CookieStand.prototype.calcCookiesEachHour = function () {
  this.calcCustomersEachHour();

  for (let i = 0; i < hours.length; i++) {
    const oneHour = Math.ceil(
      this.customerEachHour[i] * this.avgCookiesPerSale
    );
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies += this.cookiesEachHour;
  }
};

CookieStand.prototype.render = function () {
  this.calcCookiesEachHour();

  const article = document.createElement("article");
  article.classList.add("country-container");
  const h3 = document.createElement("h3");
  h3.classList.add("sales-title");
  article.appendChild(h3);

  const ul = document.createElement("ul");

  for (let i = 0; i < hours.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
    ul.appendChild(listItem);
  }
  article.appendChild(ul);
  cookieData.appendChild(article);
};

const seattle = new CookieStand("Seattle", 23, 65, 6.3);
const tokyo = new CookieStand("Tokyo", 3, 24, 1.2);
const dubai = new CookieStand("Dubia", 11, 38, 3.7);
const paris = new CookieStand("Paris", 20, 38, 2.3);
const lima = new CookieStand("Lima", 2, 16, 4.6);

const allShops = [seattle, tokyo, dubai, paris, lima];
for (let i = 0; i < allShops.length; i++) {
  allShops[i].render();
}
