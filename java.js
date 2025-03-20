//for index.html
const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
})

$(document).ready(function () {
    $(".card").on("mouseover", function () {
        $(this).nextAll().addClass("prev");
    });
    $(".card").on("mouseout", function () {
        $(this).nextAll().removeClass("prev");
    });
});

var targetDate = new Date('May 3, 2025 09:00:00').getTime();

function getTime(){
  var current = new Date().getTime();

  difference = targetDate - current;

  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  var d = Math.floor(difference / (day));
  var h = Math.floor((difference % (day)) / (hour));
  var m = Math.floor((difference % (hour)) / (minute));
  var s = Math.floor((difference % (minute)) / (second));

  document.getElementById('day').innerText = d;
  document.getElementById('hour').innerText = h;
  document.getElementById('minute').innerText = m;
  document.getElementById('second').innerText = s;
}

setInterval(function(){
  getTime();
})


