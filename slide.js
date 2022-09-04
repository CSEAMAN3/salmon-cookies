const locations = document.getElementsByClassName("section-location");
let locationPosition = 0;
const totalLocations = locations.length;

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function hideAllLocations() {
  for (let loco of locations) {
    loco.classList.remove("section-location-visible");
    loco.classList.add("section-location-hidden");
  }
}

prevBtn.addEventListener("click", function () {
  hideAllLocations();
  if (locationPosition === 0) {
    locationPosition = totalLocations - 1;
    locations[locationPosition].classList.add("section-location-visible");
  } else {
    locationPosition--;
    locations[locationPosition].classList.add("section-location-visible");
  }
});

nextBtn.addEventListener("click", function () {
  hideAllLocations();
  if (locationPosition === totalLocations - 1) {
    locationPosition = 0;
    locations[locationPosition].classList.add("section-location-visible");
  } else {
    locationPosition++;
    locations[locationPosition].classList.add("section-location-visible");
  }
});

// buttons

document
  .getElementById("location-one-btn")
  .addEventListener("click", function () {
    hideAllLocations();
    locationPosition = 0;
    locations[locationPosition].classList.add("section-location-visible");
  });
