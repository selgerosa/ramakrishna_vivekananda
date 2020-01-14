var slideIndex = 1;
function totd() {
  var quotes = new Array(70);
  var today = new Date();

  quotes[1]="<em>One should desire of God desirelessness. Desire is the obstacle to liberation.</em><br>&mdash; <b>Sri Sarada Devi</b>"
  quotes[2]="<em>Trust in God and do the Right.</em><br>&mdash; <b>Zoroaster</b>"
  quotes[3]="<em>That which is most needed is a loving heart.</em><br>&mdash; <b>Buddha</b>"
  quotes[4]="<em>God is spirit; and they that worship Him must worship in spirit and in truth.</em><br>&mdash; <b>Christian Scripture</b>"
  quotes[5]="<em>Love the Lord your God with all your heart, and with all your soul, and with all your mind.</em><br>&mdash; <b>Jesus Christ</b>"
  quotes[6]="<em>All people are seeking the same Truth. Everyone is going toward God.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[7]="<em>All knowledge that the world has ever received comes from the mind.</em><br>&mdash; <b>Swami Vivekananda</b>"
  quotes[8]="<em>Devotion is the only thing that is essential to worship Me.</em><br>&mdash; <b>Rama</b>"
  quotes[9]="<em>Once a person has faith he has achieved everything.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[10]="<em>The infinite library of the universe is in your own mind.</em><br>&mdash; <b>Swami Vivekananda</b>"
  quotes[11]="<em>Among things conducive to liberation, devotion alone holds the supreme place.</em><br>&mdash; <b>Sankara</b>"
  quotes[12]="<em>There is nothing greater than faith.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[13]="<em>Like fire in a piece of flint, knowledge exists in the mind.</em><br>&mdash; <b>Swami Vivekananda</b>"
  quotes[14]="<em>Let the Fire burning within you consume your heart with love for God.</em><br>&mdash; <b>Zoroaster</b>"
  quotes[15]="<em>The body was born and it will die. But for the soul there is not death.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[16]="<em>Pray to God with a yearning heart that you may take delight in His name. He will certainly fulfill your heart?s desire.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[17]="<em>Those who know nothing else but God repeat His name with every breath.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[18]="<em>Never harbor malice toward anyone.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[19]="<em>Giving up all other thoughts, with the whole mind day and night worship God.</em><br>&mdash; <b>Swami Vivekananda</b>"
  quotes[20]="<em>This is the gist of all worship - to be pure and to do good to others.</em><br>&mdash; <b>Swami Vivekananda</b>"
  quotes[21]="<em>It is impossible to find God outside of ourselves.</em><br>&mdash; <b>Swami Vivekananda</b>"
  quotes[22]="<em>We are the greatest temple. The objectification is only a faint imitation of what we see within ourselves.</em><br>&mdash; <b>Swami Vivekananda</b>"
  quotes[23]="<em>Stand up for God; let the world go.</em><br>&mdash; <b>Swami Vivekananda</b>"
  quotes[24]="<em>To me the very essence of education is concentration of mind, not collection of facts.</em><br>&mdash; <b>Swami Vivekananda</b>"
  quotes[25]="<em>The test of true religiousness is love and charity for the whole human race.</em><br>&mdash; <b>Swami Vivekananda</b>"
  quotes[26]="<em>If one lives unattached and seeks God with sincerity, then one is able to attain Him.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[27]="<em>All paths ultimately lead to the same Truth.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[28]="<em>The Great Spirit does right. He knows what is best for his children.</em><br>&mdash; <b>Native American</b>"
  quotes[29]="<em>Bondage and liberation are of the mind alone. The mind will take the color you dye it with.</em><br>&mdash; <b>Sri Ramakrishna</em></b>"
  quotes[30]="<em>Say but once, O Lord, I have undoubtedly done wicked things, but I won?t repeat them, and have faith in His name.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[31]="<em>Yearning is all you need to realize Him.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[32]="<em>Man?s sufferings and worries spring only from his persistent thought that he is the doer.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[33]="<em>One receives the grace of God by subduing the passions - lust, anger, and greed. Then one sees God.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[34]="<em>All troubles come to an end when the ego dies.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[35]="<em>The nearer you come to God, the more you feel peace. Peace, peace, peace - supreme peace!</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[36]="<em>Know for certain that all forms are the forms of one God alone.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[37]="<em>Always remember that the two-leggeds and all other peoples who stand upon this earth are sacred and should be treated as such.</em><br>&mdash; <b>Native American</b>"
  quotes[38]="<em>God alone it is who dwells in you, in me, in everything.</em><br>&mdash; <b>Sankara</b>"
  quotes[39]="<em>Forget self and identify Ahura Mazda in every being and in everything.</em><br>&mdash; <b>Zoroaster</b>"
  quotes[40]="<em>No one is a believer until he loves for his brother what he loves for himself.</em><br>&mdash; <b>Islamic Scripture</b>"
  quotes[41]="<em>Love the Lord your God with all your heart, and with all your soul, and with all your might.</em><br>&mdash; <b>Judaism</b>"
  quotes[42]="<em>Learn to make the whole world your own. No one is a stranger, my child; the whole world is your own.</em><br>&mdash; <b>Sri Sarada Devi</b>"
  quotes[43]="<em>Persevere in your efforts. You are sure to realize Him at last.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[44]="<em>It can not be that the Soul is happy, It is happiness Itself.</em><br>&mdash; <b>Swami Vivekananda</b>"
  quotes[45]="<em>Cherish in your hearts boundless goodwill to all that lives.</em><br>&mdash; <b>Buddha</b>"
  quotes[46]="<em>Men shed a jugful of tears for the sake of their children, for their wives, or for money. But who weeps for God?</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[47]="<em>As the water-bird shakes off the water from its wings with a little flutter, as the mudfish lives in the mud without becoming soiled, so should a man remain in the world entirely unaffected by it.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[48]="<em>The power of meditation gets us everything.</em><br>&mdash; <b>Swami Vivekananda</b>"
  quotes[49]="<em>God exists everywhere and at all times.</em><br>&mdash; <b>Sri Sarada Devi</b>"
  quotes[50]="<em>One is safe to live in the world, if one has discrimination and non-attachment, and along with these, intense devotion to God.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[51]="<em>Ignorance seems manifold. Knowledge realizes one.</em><br>&mdash; <b>Swami Vivekananda</b>"
  quotes[52]="<em>He who is able to renounce all for God's sake is a living God.</em><br>&mdash; <b>Sri Sarada Devi</b>"
  quotes[53]="<em>A true lover sees God as his nearest and dearest.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[54]="<em>Meditation consists in this practice of dissolving everything into the ultimate Reality - spirit.</em><br>&mdash; <b>Swami Vivekananda</b>"
  quotes[55]="<em>When the fruit appears the blossom drops off. Love of God is the fruit, and rituals are the blossom.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[56]="<em>In the love of God, one forgets all outward objects, the universe, and even one's own body, usually so dear to one.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[57]="<em>He is born to no purpose, who, having the rare privilege of being born a man, is unable to realize God.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[58]="<em>Knowledge is inherent in man; no knowledge comes from outside; it is all inside.</em><br>&mdash; <b>Swami Vivekananda</b>"
  quotes[59]="<em>Pure Knowledge and pure love are both one and the same.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  quotes[60]="<em>Self-control will tend to produce a mighty will, a character which makes a Christ or a Buddha.</em><br>&mdash; <b>Swami Vivekananda</b>"
  quotes[61]="<em>He is born to no purpose who, having the rare privilege of being born a man, is unable to realize God in this life.</em><br>&mdash; <b>Sri Ramakrishna</b>"
  console.log(document.getElementById("totd"));
  console.log(quotes[((today.getMonth()*29)+today.getDay())%61]);
  document.getElementById("totd").innerHTML = quotes[((today.getMonth()*29)+today.getDay())%61];
}

function currentSlide(index,slides) {
  showSlides(slideIndex=index, slides);
}
function plusSlide(index,slides) {
  displayon(index+1);
  //showSlides(slideIndex=index+1, slides);
}
function minusSlide(index,slides) {
  displayon(index-1);
  //showSlides(slideIndex=index-1,slides);
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
  //currentSlide(inid,25);
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
