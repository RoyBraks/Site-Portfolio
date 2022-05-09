document.getElementById("json").addEventListener("click", fetchdata);

function fetchdata(){
    fetch("files/test.json")
    .then(Response => Response.json())
    .then(data => datause(data));
    document.getElementById("jsonwrite").innerHTML = ""
}

function datause(datajson){
    datajson.forEach(element => {
        var name = document.createTextNode(element.name);
        var age = document.createTextNode(element.age);
        var gender = document.createTextNode(element.gender);
        var email = document.createTextNode(element.email);
        jsonwrite(name, age, gender, email)
    });
}

function jsonwrite(name,age, gender, email){
    var ulobj = document.createElement("ul");
    var liname = document.createElement("li");
    liname.appendChild(name);
    ulobj.appendChild(liname);
    

    var li_age = document.createElement("li");
    li_age.appendChild(age);
    ulobj.appendChild(li_age);

    var li_gender = document.createElement("li");
    li_gender.appendChild(gender);
    ulobj.appendChild(li_gender);

    var li_email = document.createElement("li");
    li_email.appendChild(email);
    ulobj.appendChild(li_email);

    document.getElementById("jsonwrite").appendChild(ulobj);
}
