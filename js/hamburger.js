function hamburger() {
  var temp = document.getElementById('nav4');
  if (temp.style.visibility=='' || temp.style.visibility=='hidden') {
    temp.style.visibility="visible";
  }
  else {
    temp.style.visibility="hidden";
  }
}
function expand() {
  var nav2 = document.getElementById('nav2');
  if (nav2.style.display=='' || nav2.style.display=='none') {
    nav2.style.display='flex';
    document.getElementById('minus').style.display="inline";
    document.getElementById('plus').style.display="none";
  }
  else {
    nav2.style.display='none';
    document.getElementById('minus').style.display="none";
    document.getElementById('plus').style.display="inline";  
  }
}
