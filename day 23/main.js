function sum(x,y){
    document.write(x+y);
}

sum(2,5);
document.write("<br>");
sum(2,5);
document.write("<br>");
sum(120,54);




function testFunction(){
    var localVar = "SHABAN";
    alert(localVar);
}

testFunction();

var car = {name:"mercedes",
    color: "red",
    year: 2010,
    startEngine:0,
    start: function(){
        alert("the car is moving");
}
get getKilometers(){
    return this.kilometers
}
set setKilometers(km){
    this.kilometers = km;
}

console.log(car.getKilometers);
car.setKilometers = 100;
console.log(car.getKilometers);