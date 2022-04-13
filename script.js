// Navigatiebar script. Hier worden de element gekozen en vervolgens wordt er een extra naam aan de class gegeven door een clickevent
let aMain = document.querySelectorAll(".aMain");

aMain.forEach(function(aMain_item){
    aMain_item.addEventListener('click', function(){
        aMain.forEach(function(aMain_item){
            aMain_item.classList.remove("active"); 
        })  
        aMain_item.classList.add("active"); 
    })  
})

document.addEventListener('click', function(){
    if(event.target.matches(".aMain" && ".active") == false){
        CloseNavbar();
    }
})

function CloseNavbar(){
    aMain.forEach(function(aMain_item){
        aMain_item.classList.remove("active");   
    })  
}

// einde navigatiebar script

// Script voor auto slideshow POC breakdowns 

var imgIndex = 0;
var imgIndex2 = 0;
var imgIndex3 = 0;

showSlide();
showSlide2();
showSlide3();

function showSlide(){
    let i;
    let slideshow = document.getElementsByClassName("SlideShow");
    for (i = 0; i <slideshow.length; i++){
        slideshow[i].style.display = "none";
    }
    imgIndex++;
    if (imgIndex > slideshow.length) {
        imgIndex = 1;
    }
    slideshow[imgIndex-1].style.display = "block";
    setTimeout(showSlide, 1000);
}

function showSlide2(){
    let i;
    let slideshow2 = document.getElementsByClassName("SlideShow2");
    for (i = 0; i <slideshow2.length; i++){
        slideshow2[i].style.display = "none";
    }
    imgIndex2++;
    if (imgIndex2 > slideshow2.length) {
        imgIndex2 = 1;
    }
    slideshow2[imgIndex2-1].style.display = "block";
    setTimeout(showSlide2, 1000);
}

function showSlide3(){
    let i;
    let slideshow3 = document.getElementsByClassName("SlideShow3");
    for (i = 0; i <slideshow3.length; i++){
        slideshow3[i].style.display = "none";
    }
    imgIndex3++;
    if (imgIndex3 > slideshow3.length) {
        imgIndex3 = 1;
    }
    slideshow3[imgIndex3-1].style.display = "block";
    setTimeout(showSlide3, 1000);
}