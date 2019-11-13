var slideIndex = 1;


function currentSlide(index,slides) {
  showSlides(slideIndex=index, slides);
}
function plusSlide(index,slides) {
  displayon(index+1);
  showSlides(slideIndex=index+1, slides);
}
function minusSlide(index,slides) {
  displayon(index-1);
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
  var len = document.getElementsByClassName("homeslidedesc").length + 1;
  if (inid >= len) {inid = 1}
  if (inid < 1) {inid = len-1}
  for (i=1; i<len; i++) {
    document.getElementById('home'+i).style.display="none";
  }
  document.getElementById('home'+inid).style.display="flex";
  currentSlide(inid,25);
}

function displayoff(inid) {
  var len = document.getElementsByClassName("homeslidedesc").length + 1;
  if (inid >= len) {inid = 1}
  if (inid < 1) {inid = len-1}
  for (i=1; i<len; i++) {
    document.getElementById('home'+i).style.display="none";
  }
  document.getElementById('home'+inid).style.display="none";
}
function homeoff() {
  var len = document.getElementsByClassName("homeslidedesc").length + 1;
  for (i=1; i<len; i++) {
    document.getElementById('home'+i).style.display="none";
  }
}
function automate() {
  var i =1;
  currentSlide(i,25);
  i++;
  var len = document.getElementsByClassName("homeslidedesc").length + 1;
  if (i >= len) {i = 1}
  if (i < 1) {i = len-1}
  console.log(slideIndex);
  setInterval(automate, 1000);
}
