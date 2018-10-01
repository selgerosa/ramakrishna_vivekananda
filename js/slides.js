var slideIndex = 1;


function currentSlide(index,slides) {
  showSlides(slideIndex =index, slides);
}

function showSlides(index,slides) {
  var i;
  var slides = document.getElementsByClassName("slides"+slides);
  if (index > slides.length) {slideIndex = 1}
  if (index < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}
