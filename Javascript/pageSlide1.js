var imgBig = document.querySelector(".img-big");
var imgCartContainer = document.querySelector(".cartDetail-left > a");
var imgSmall1 =document.querySelector(".img-small-1");
var imgSmall2 =document.querySelector(".img-small-2");
var imgSmall3 =document.querySelector(".img-small-3");
var imgSmall4 =document.querySelector(".img-small-4");
var imgSmall5 =document.querySelector(".img-small-5");
imgSmall1.addEventListener("click",function(){
    imgBig.style.backgroundImage = "url(../imgFlower/imgPageSlide1/item1.jpg)";
    imgSmall1.style.border = "3px solid black";
    imgSmall2.style.border= "none";
    imgSmall3.style.border= "none";
    imgSmall4.style.border= "none";
    imgSmall5.style.border= "none";
    imgCartContainer.href = "../imgFlower/imgPageSlide1/item1.jpg";
})
imgSmall2.addEventListener("click",function(){
    imgBig.style.backgroundImage = "url(../imgFlower/imgPageSlide1/item2.jpg)";
    imgSmall2.style.border = "3px solid black";
    imgSmall1.style.border= "none";
    imgSmall3.style.border= "none";
    imgSmall4.style.border= "none";
    imgSmall5.style.border= "none";
    imgCartContainer.href = "../imgFlower/imgPageSlide1/item2.jpg";
})
imgSmall3.addEventListener("click",function(){
    imgBig.style.backgroundImage = "url(../imgFlower/imgPageSlide1/item3.jpg)";
    imgSmall3.style.border = "3px solid black";
    imgSmall2.style.border= "none";
    imgSmall1.style.border= "none";
    imgSmall4.style.border= "none";
    imgSmall5.style.border= "none";
    imgCartContainer.href = "../imgFlower/imgPageSlide1/item3.jpg";
})
imgSmall4.addEventListener("click",function(){
    imgBig.style.backgroundImage = "url(../imgFlower/imgPageSlide1/item4.jpg)";
    imgSmall4.style.border = "3px solid black";
    imgSmall2.style.border= "none";
    imgSmall3.style.border= "none";
    imgSmall1.style.border= "none";
    imgSmall5.style.border= "none";
    imgCartContainer.href = "../imgFlower/imgPageSlide1/item4.jpg";
})
imgSmall5.addEventListener("click",function(){
    imgBig.style.backgroundImage = "url(../imgFlower/imgPageSlide1/item5.jpg)";
    imgSmall5.style.border = "3px solid black";
    imgSmall2.style.border= "none";
    imgSmall3.style.border= "none";
    imgSmall4.style.border= "none";
    imgSmall1.style.border= "none";
    imgCartContainer.href = "../imgFlower/imgPageSlide1/item5.jpg";
})
