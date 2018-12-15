var colors = ["red", "green", "blue", "yellow", "orange", "pink"];

var confettiCount = 400;

function createConfetti() {
  var confetti = document.createElement("div");

  confetti.style.position = "absolute";

  confetti.style.width = Math.random() * 10 + 1 + "px";
  confetti.style.height = Math.random() * 10 + 1 + "px";
  confetti.style.backgroundColor =
    colors[Math.ceil(Math.random() * colors.length)];

  confetti.style.top = "-20%";
  confetti.style.left = Math.random() * 200 - 100 + "%";

  // confetti.style.borderRadius = `${Math.random() * 50}% ${Math.random() *
  //   50}% ${Math.random() * 50}% ${Math.random() * 50}%`;

  confetti.style.animation =
    "drop " +
    (Math.random() * 20 + 3) +
    "s linear " +
    (Math.random() * 10 + 2) +
    "s infinite";

  document.getElementsByClassName("confetti")[0].appendChild(confetti);
}

for (var i = 0; i < confettiCount; i++) {
  createConfetti();
}
