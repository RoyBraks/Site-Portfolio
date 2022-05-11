document.getElementById("api").addEventListener("click", fetchdata);

function fetchdata(){
    fetch("https://x-colors.herokuapp.com/api/random")
    .then(Response => Response.json())
    .then(data => datause(data));
    
}

function datause(datajson){
        var hex = datajson["hex"];
        jsonwrite(hex)
}

function jsonwrite(hex){
    document.getElementById("apibox").style.backgroundColor = hex;
}
