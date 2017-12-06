function main() {
  var d = document;
  var slideIndex = 1;
  var timer;
  var previousB = d.getElementById("previousButton");
  var nextB = d.getElementById("nextButton");
  showSlides(slideIndex);

  function plusSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    var i;
    var slides = d.getElementsByClassName("slides");
    if (n===undefined){
      n = ++slideIndex;
    }
    if (n > slides.length) {
      slideIndex = 1;
    } 
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    slides[slideIndex-1].style.display = "block";
    timer = setTimeout(showSlides, 5000);
  }

  if(previousB.addEventListener) {
    previousB.addEventListener("click", function() {plusSlides(-1);},false);
  }
  else if(previousB.attachEvent){
    previousB.attachEvent("onclick", function() {plusSlides(-1);},false);
  }
  
  if(nextB.addEventListener) {
    nextB.addEventListener("click", function() {plusSlides(1);},false);
  }
  else if(nextB.attachEvent) {
    nextB.attachEvent("onclick", function() {plusSlides(1);},false);
  }
  
  
}




if (document.readyState!="loading") main();
else if (document.addEventListener) document.addEventListener("DOMContentLoaded", main);
else document.attachEvent("onreadystatechange", function(){
    if (document.readyState=='complete') main();
});