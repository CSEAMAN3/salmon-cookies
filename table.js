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
    this.totalDailyCookies += oneHour;
  }
};

CookieStand.prototype.render = function () {
  this.calcCookiesEachHour();
  const tr = document.createElement("tr");
  let td = document.createElement("td");
  td.textContent = this.locationName;
  tr.appendChild(td);
  // loop through and add the data for each hour to a new td element
  for (let i = 0; i < hours.length; i++) {
    td = document.createElement("td");
    td.textContent = this.cookiesEachHour[i];
    tr.appendChild(td);
  }

  // create a final table header (so its bold and nice) for the total

  const totalHeader = document.createElement("th");
  totalHeader.textContent = this.totalDailyCookies;
  tr.appendChild(totalHeader);
  cookieData.appendChild(tr);
};

const seattle = new CookieStand("Seattle", 23, 65, 6.3);
const tokyo = new CookieStand("Tokyo", 3, 24, 1.2);
const dubai = new CookieStand("Dubia", 11, 38, 3.7);
const paris = new CookieStand("Paris", 20, 38, 2.3);
const lima = new CookieStand("Lima", 2, 16, 4.6);

const allShops = [seattle, tokyo, dubai, paris, lima];

let tableRow = document.createElement("tr");
let th = document.createElement("th");
th.textContent = "Location";
tableRow.appendChild(th);

for (let i = 0; i < hours.length; i++) {
  th = document.createElement("th");
  th.textContent = hours[i];
  tableRow.appendChild(th);
}

th = document.createElement("th");
th.textContent = "Totals";
tableRow.appendChild(th);

cookieData.appendChild(tableRow);

for (let i = 0; i < allShops.length; i++) {
  allShops[i].render();
}

//show daily totals

const totalTR = document.createElement("tr");
function renderTotals() {
  // create a new th
  let totalTHHeading = document.createElement("th");

  // write something in the th and append it
  totalTHHeading.textContent = `Hourly Totals:`;
  totalTR.appendChild(totalTHHeading);

  // for (let i = 0; i < hours.length; i++) {
  //   let hourlyTotal = 0;
  //   for (let j = 0; j < allShops.length; i++) {
  //     hourlyTotal += allShops[j].cookiesSoldEachHour[i];
  //   }
  // }

  // totalTH = document.createElement("th");
  // totalTH.textContent = hourlyTotal;

  // totalTR.appendChild(totalTh);]
  let total = 0;
  for (let k = 0; k < hours.length; k++) {
    let hourlyTotal = 0;
    for (let i = 0; i < allShops.length; i++) {
      hourlyTotal += allShops[i].cookiesEachHour[k];
    }

    let totalTH = document.createElement("th");
    totalTH.textContent = hourlyTotal;
    totalTR.appendChild(totalTH);
    total += hourlyTotal;
  }

  let finalTotalTH = document.createElement("th");
  finalTotalTH.textContent = total;
  totalTR.appendChild(finalTotalTH);

  cookieData.appendChild(totalTR);
}
renderTotals();

// form

const cookieForm = document.getElementById("cookie-form");

cookieForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = event.target.name.value;
  const minCust = event.target.minCust.value;
  const maxCust = event.target.maxCust.value;
  const average = event.target.average.value;

  const newStore = new CookieStand(name, minCust, maxCust, average);

  // clear the total row
  totalTR.innerHTML = "";
  newStore.render();
  // rerender the total row
  renderTotals();
  // reset input values
  document.getElementById("name").value = "";
  document.getElementById("min-cust").value = "";
  document.getElementById("max-cust").value = "";
  document.getElementById("average").value = "";
});

// locations script
