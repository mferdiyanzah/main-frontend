var countDownDate = new Date("Feb 7, 2022 09:00:00").getTime();

var timer = function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((distance % (1000 * 60)) / 1000);

  function digit(n) {
    return n < 10 ? "0" + n : "" + n;
  }

  document.querySelector("#days-number").innerHTML = digit(days);
  document.querySelector("#hours-number").innerHTML = digit(hour);
  document.querySelector("#mins-number").innerHTML = digit(min);
  document.querySelector("#secs-number").innerHTML = digit(sec);

  if (distance < 0) {
    clearInterval(x);
    document.querySelector("#days-number").innerHTML = '00';
    document.querySelector("#hours-number").innerHTML = '00';
    document.querySelector("#mins-number").innerHTML = '00';
    document.querySelector("#secs-number").innerHTML = '00';
  }
}

timer();
var x = setInterval(function () {
  timer();
}, 1000);