var button1 = document.querySelector('button');
var button2 = document.getElementById('btn2');
var button3 = document.getElementById('btn3');

button1.addEventListener('click', function(){
    alert("hello from addeventlistener");
    })

// button1.onclick = function(){
//     alert("hello");
// }

button2.onmouseover = function(){
    alert("mouse is over the button");
}
button3.onmouseleave = function(){
    alert("mouse is leaving the button");
}
