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

//einde navigatiebar script