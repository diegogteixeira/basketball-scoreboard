let homeScore = document.getElementById("home-pts");
let guestScore = document.getElementById("guest-pts");

let homePoints = 0
let guestPoints = 0

homeScore.textContent = homePoints;
guestScore.textContent = guestPoints;

function add1Home() {
  homePoints++;
  homeScore.textContent = homePoints;
}

function add2Home() {
  homePoints += 2;
  homeScore.textContent = homePoints;
}

function add3Home() {
  homePoints += 3;
  homeScore.textContent = homePoints;
}

function add1Guest() {
  guestPoints++;
  guestScore.textContent = guestPoints;
}

function add2Guest() {
  guestPoints += 2;
  guestScore.textContent = guestPoints;
}

function add3Guest() {
  guestPoints += 3;
  guestScore.textContent = guestPoints;
}
