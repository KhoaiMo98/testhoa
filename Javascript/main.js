// Slide show
// let slideIndex = 1;
// showSlides(slideIndex);
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }
// Display buttons bar menu mobile and Nav mobile
var barBtnMobile = document.querySelector(".bar-btn-mobile");
var barBtnMobileX = document.querySelector(".bar-btn-mobile-x");
var navMobileMenu = document.querySelector(".nav-mobile-menu");
  barBtnMobile.addEventListener("click",function(){
    navMobileMenu.classList.remove("hidden");
    barBtnMobile.classList.add("hidden");
    barBtnMobileX.classList.remove("hidden");
    console.log("barBtnMobile");
  })
  barBtnMobileX.addEventListener("click", function(){
    navMobileMenu.classList.add("hidden");
    barBtnMobile.classList.remove("hidden");
    barBtnMobileX.classList.add("hidden");
  })
// Nav sub menu mobile
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}