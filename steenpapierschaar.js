let steen = document.getElementById("steen");
let papier = document.getElementById("papier");
let schaar = document.getElementById("schaar");

let steenUser = document.getElementById("steenUser");
let papierUser = document.getElementById("papierUser");
let schaarUser = document.getElementById("schaarUser");

let steenPC = document.getElementById("steenPC");
let papierPC = document.getElementById("papierPC");
let schaarPC = document.getElementById("schaarPC");

var keuze = 0;

let UserScore = 0;
let PCScore = 0;

var result = "start";

steen.addEventListener("click", function() {checkUitslag(0)});
papier.addEventListener("click", function() {checkUitslag(1)});
schaar.addEventListener("click", function() {checkUitslag(2)});

function checkUitslag(keuze){

    var keuzePC = Math.round(Math.random()*2);

    schaarUser.style.display = "none";
    steenUser.style.display = "none";
    papierUser.style.display = "none";

    schaarPC.style.display = "none";
    steenPC.style.display = "none";
    papierPC.style.display = "none";

    switch (keuze) {
        case 0:
            steenUser.style.display = "block";
            switch (keuzePC) {
                case 0:
                    steenPC.style.display = "block"
                    result = "gelijkspel";
                    break;
            
                case 1:
                    papierPC.style.display = "block"
                    PCScore++;
                    result = "verloren";
                    break;
                
                case 2:
                    schaarPC.style.display = "block"
                    UserScore++;
                    result = "gewonnen";
                    break;
            }
            break;
    
        case 1:
            papierUser.style.display = "block";
            switch (keuzePC) {
                case 0:
                    steenPC.style.display = "block"
                    UserScore++;
                    result = "gewonnen";
                    break;
            
                case 1:
                    papierPC.style.display = "block"
                    result = "gelijkspel";
                    break;
                
                case 2:
                    schaarPC.style.display = "block"
                    PCScore++;
                    result = "verloren";
                    break;
            }
            break;

        case 2:
            schaarUser.style.display = "block";
            switch (keuzePC) {

                case 0:
                    steenPC.style.display = "block"
                    PCScore++;
                    result = "verloren";
                    break;
            
                case 1:
                    papierPC.style.display = "block"
                    UserScore++;
                    result = "gewonnen";
                    break;
                
                case 2:
                    schaarPC.style.display = "block"
                    result = "gelijkspel";
                    break;
            }
            break;
    }
    document.getElementById("UserScore").innerHTML = UserScore;
    document.getElementById("PCScore").innerHTML = PCScore;
    document.getElementById("result").innerHTML = result;
}

