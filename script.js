document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');

  if (!display) {
    console.error('Error: No element with id="display" found.');
    return;
  }

  window.appendValue = function (value) {
    if (display.value === 'Error') display.value = '';
    display.value += value;
  };

  window.clearDisplay = function () {
    display.value = '';
  };

  window.deleteLast = function () {
    display.value = display.value.slice(0, -1);
  };

  window.calculate = function () {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  };
});
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Auto slide every 4 seconds
setInterval(() => {
  plusSlides(1);
}, 4000);