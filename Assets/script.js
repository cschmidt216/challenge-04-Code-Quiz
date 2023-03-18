let timeLeft = 60;

const countdown = setInterval(function() {
  timeLeft--;
  document.getElementById("timer").innerHTML = timeLeft + " seconds remaining";

  if (timeLeft <= 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "Time's up!";
  }
}, 1000);