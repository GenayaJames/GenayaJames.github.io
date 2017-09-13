function main() {
  var slideIndex = 1;
  var timer;
  showSlides(slideIndex);

  function plusSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
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

  document.getElementById("previousButton").onclick = function() {
    plusSlides(-1);
  }

  document.getElementById("nextButton").onclick = function() {
    plusSlides(1);
  }
  
}




if (document.readyState!="loading") main();
else if (document.addEventListener) document.addEventListener("DOMContentLoaded", main);
else document.attachEvent("onreadystatechange", function(){
    if (document.readyState=='complete') main();
});