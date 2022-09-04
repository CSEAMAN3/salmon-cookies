const locations = document.getElementsByClassName("section-location");
let locationPosition = 0;
const totalLocations = locations.length;

const dots = document.getElementsByClassName("location-btn");
let dotPosition = 0;
const totalDots = dots.length;

function hideAllLocations() {
  for (let local of locations) {
    local.classList.remove("section-location-visible");
    local.classList.add("section-location-hidden");
  }
}

function hideAllDots() {
  for (let dot of dots) {
    dot.classList.remove("location-btn-active");
    dot.classList.add("location-btn-inactive");
  }
}

document.getElementById("prev-btn").addEventListener("click", function () {
  hideAllLocations();
  hideAllDots();
  if (locationPosition === 0) {
    locationPosition = totalLocations - 1;
    dotPosition = totalDots - 1;
  } else {
    locationPosition--;
    dotPosition--;
  }
  locations[locationPosition].classList.remove("section-location-hidden");
  locations[locationPosition].classList.add("section-location-visible");
  dots[dotPosition].classList.remove("location-btn-inactive");
  dots[dotPosition].classList.add("location-btn-active");
});

document.getElementById("next-btn").addEventListener("click", function () {
  hideAllLocations();
  hideAllDots();
  if (locationPosition === totalLocations - 1) {
    locationPosition = 0;
    dotPosition = 0;
  } else {
    locationPosition++;
    dotPosition++;
  }
  locations[locationPosition].classList.remove("section-location-hidden");
  locations[locationPosition].classList.add("section-location-visible");
  dots[dotPosition].classList.remove("location-btn-inactive");
  dots[dotPosition].classList.add("location-btn-active");
});

document
  .getElementById("location-one-btn")
  .addEventListener("click", function () {
    hideAllLocations();
    hideAllDots();
    dotPosition = 0;
    locationPosition = 0;
    locations[locationPosition].classList.remove("section-location-hidden");
    locations[locationPosition].classList.add("section-location-visible");
    dots[dotPosition].classList.remove("location-btn-inactive");
    dots[dotPosition].classList.add("location-btn-active");
  });

document
  .getElementById("location-two-btn")
  .addEventListener("click", function () {
    hideAllLocations();
    hideAllDots();
    dotPosition = 1;
    locationPosition = 1;
    locations[locationPosition].classList.remove("section-location-hidden");
    locations[locationPosition].classList.add("section-location-visible");
    dots[dotPosition].classList.remove("location-btn-inactive");
    dots[dotPosition].classList.add("location-btn-active");
  });

document
  .getElementById("location-three-btn")
  .addEventListener("click", function () {
    hideAllLocations();
    hideAllDots();
    dotPosition = 2;
    locationPosition = 2;
    locations[locationPosition].classList.remove("section-location-hidden");
    locations[locationPosition].classList.add("section-location-visible");
    dots[dotPosition].classList.remove("location-btn-inactive");
    dots[dotPosition].classList.add("location-btn-active");
  });

document
  .getElementById("location-four-btn")
  .addEventListener("click", function () {
    hideAllLocations();
    hideAllDots();
    dotPosition = 3;
    locationPosition = 3;
    locations[locationPosition].classList.remove("section-location-hidden");
    locations[locationPosition].classList.add("section-location-visible");
    dots[dotPosition].classList.remove("location-btn-inactive");
    dots[dotPosition].classList.add("location-btn-active");
  });

document
  .getElementById("location-five-btn")
  .addEventListener("click", function () {
    hideAllLocations();
    hideAllDots();
    dotPosition = 4;
    locationPosition = 4;
    locations[locationPosition].classList.remove("section-location-hidden");
    locations[locationPosition].classList.add("section-location-visible");
    dots[dotPosition].classList.remove("location-btn-inactive");
    dots[dotPosition].classList.add("location-btn-active");
  });
