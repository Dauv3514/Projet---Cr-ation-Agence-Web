const lancementDate = new Date('may 25, 2022 18:36:00').getTime();

function newAgence() {

  const now = new Date().getTime();

  gap = lancementDate - now;

  const secondes = 1000;
  const minutes = secondes * 60;
  const heures = minutes * 60;
  const jours = heures * 24;

  const d = Math.floor(gap / (jours));
  const h = Math.floor((gap % (jours)) / (heures));
  const m = Math.floor((gap % (heures)) / (minutes));
  const s = Math.floor((gap % (minutes)) / (secondes));

  document.getElementById('jours').innerText = d;
  document.getElementById('heures').innerText = h;
  document.getElementById('minutes').innerText = m;
  document.getElementById('secondes').innerText = s;

}

setInterval(function () {
  newAgence();

}, 1000)








const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {

  for (i = 0; i < allRonds.length; i++) {

    if (allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')) {

      let tween = gsap.from(box, { y: -50, opacity: 0, duration: 0.5 })

      let scene = new ScrollMagic.Scene({
        triggerElement: allRonds[i],
        reverse: true
      })
        .setTween(tween)
        .addIndicators()
        .addTo(controller)

    }

  }

})









var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

}


var captionText = document.getElementById("caption");
captionText.innerHTML = dots[slideIndex - 1].alt;
