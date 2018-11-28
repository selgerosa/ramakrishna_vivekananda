function hamburger() {
  var temp = document.getElementById('nav4');
  if (temp.style.visibility=='' || temp.style.visibility=='hidden') {
    temp.style.visibility="visible";
  }
  else {
    temp.style.visibility="hidden";
  }
}
function close() {
  alert('alert');
  document.getElementById(nav4).style.visibility="hidden";
}
