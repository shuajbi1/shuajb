function validation(){
    var name = document.getElementById("name").value;
    var valid_name_regex = /^[A-Za-z]+$/;

    
    var age = document.getElementById("age").value;

    var valid_age_regex = /^[0-9]+$/;

var city = document.getElementById("city").value;
if(!(name .match(valid_name_regex) || age.match(valid_age_regex) || city =="")){
if(!(name.match(valid_name_regex))){
    document.getElementById("name-error").style.visibility = "visible";
    document.getElementById("name-error").style.color = "red";
}else{
    document.getElementById("name-error").style.visibility = "hidden";
    document.getElementById("name-error").style.color = "black";
}

if(!(age.match(valid_age_regex))){
    document.getElementById("age-error").style.visibility = "visible";
    document.getElementById("age-error").style.color = "red";
}else{
    document.getElementById("age-error").style.visibility = "hidden";
    document.getElementById("age-error").style.color = "black";
}

if(!(city.match(valid_city_regex))){
    document.getElementById("city-error").style.visibility = "visible";
    document.getElementById("city-error").style.color = "red";
}else{
    document.getElementById("city-error").style.visibility = "hidden";
    document.getElementById("city-error").style.color = "black";
}
}else{
        document.getElementById("name-error").style.visibility = "hidden";
        document.getElementById("name").style.color = "black";
        document.getElementById("age-error").style.visibility = "hidden";
        document.getElementById("age").style.color = "black";
        document.getElementById("city-error").style.visibility = "hidden";
        document.getElementById("city").style.color = "black";
        return true;
    }
}