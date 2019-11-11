var slideIndex = 1;


function currentSlide(index,slides) {
  showSlides(slideIndex=index, slides);
}
function plusSlide(index,slides) {
  showSlides(slideIndex=index+1, slides);
}
function minusSlide(index,slides) {
  showSlides(slideIndex=index-1,slides);
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

function changeNav(inid, outid) {
  document.getElementById("p"+inid).style.display="none";
  document.getElementById("p"+outid).style.display="flex";
}

function displayon(inid) {
  for (i=1; i<3; i++) {
    document.getElementById('home'+i).style.display="none";
  }
  document.getElementById(inid).style.display="flex";
}

function displayoff(inid) {
  document.getElementById(inid).style.display="none";
}
function homeoff() {
  for (i=1; i<3; i++) {
    document.getElementById('home'+i).style.display="none";
  }
}
