let timeLeft = 120;

const countdown = setInterval(function() {
  timeLeft--;
  document.getElementById("timer").innerHTML = timeLeft + " seconds remaining";

  if (timeLeft <= 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "Time Expired";
  }
}, 1000);

