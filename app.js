const seattle = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  avgCustPerHour: function () {
    return (
      Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour)) +
      (this.minCustPerHour + 1)
    );
  },
};

// seattle.avgCustPerHour();

const tokyo = {
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  avgCustPerHour: function () {
    return (
      Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour)) +
      (this.minCustPerHour + 1)
    );
  },
};

// tokyo.avgCustPerHour();

const dubia = {
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  avgCustPerHour: function () {
    return (
      Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour)) +
      (this.minCustPerHour + 1)
    );
  },
};

// dubia.avgCustPerHour();

const paris = {
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  avgCustPerHour: function () {
    return (
      Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour)) +
      (this.minCustPerHour + 1)
    );
  },
};

// paris.avgCustPerHour();

const lima = {
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  avgCustPerHour: function () {
    return (
      Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour)) +
      (this.minCustPerHour + 1)
    );
  },
};

// lima.avgCustPerHour();

// ###########################

const seattleList = document.getElementById("seattleList");
const tokyoList = document.getElementById("tokyoList");
const dubiaList = document.getElementById("dubiaList");
const parisList = document.getElementById("parisList");
const limaList = document.getElementById("limaList");

function render(data, list) {
  let totalCookies = 0;

  for (let i = 0; i < 15; i++) {
    if (i === 14) {
      const li = document.createElement("li");
      li.textContent = `Total: ${totalCookies} cookies`;
      list.appendChild(li);
    } else if (i <= 5) {
      const li = document.createElement("li");
      li.textContent = `${i + 6}am: ${Math.floor(
        data.avgCustPerHour() * data.avgCookiesPerCust
      )} cookies`;
      list.appendChild(li);
      totalCookies += Math.floor(
        data.avgCustPerHour() * data.avgCookiesPerCust
      );
    } else if (i === 6) {
      const li = document.createElement("li");
      li.textContent = `${i + 6}pm: ${Math.floor(
        data.avgCustPerHour() * data.avgCookiesPerCust
      )} cookies`;
      list.appendChild(li);
      totalCookies += Math.floor(
        data.avgCustPerHour() * data.avgCookiesPerCust
      );
    } else {
      const li = document.createElement("li");
      li.textContent = `${i - 6}pm: ${Math.floor(
        data.avgCustPerHour() * data.avgCookiesPerCust
      )} cookies`;
      list.appendChild(li);
      totalCookies += Math.floor(
        data.avgCustPerHour() * data.avgCookiesPerCust
      );
    }
  }
}

render(seattle, seattleList);
render(tokyo, tokyoList);
render(dubia, dubiaList);
render(paris, parisList);
render(lima, limaList);
