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
showSlide();

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