let x = 0;
const h1Element = document.getElementById('cntval');
function Increment(){
    if(x == 20) alert("You are at highest level")
    else x++;
    h1Element.textContent = x;
}
function Decrement(){
    if(x == 0) alert("Counter value should not be less than zero")
    else x--;
    h1Element.textContent = x;
}
function Reset(){
    if(x == 0) alert("Counter value is already zero")
    else x = 0;
    h1Element.textContent = x;
}


const secondid = document.getElementById("abcd")
let colors = ["Red", "Orange", "Pink", "Yellow", "Sky Blue","#0F52BA", "#50C878", "#FF4500",  "#E6E6FA","#B76E79", "#40E0D0", "#DC143C", "#FFD700", "#800080", "#98FF98" ]

function Random(){
    let random = Math.floor((Math.random()*15))
    secondid.style.backgroundColor = colors[random]
}
function ResetColor(){
    secondid.style.backgroundColor = "white";
}
const button = document.getElementsByTagName("button")
const Dark = document.getElementById("DarkButton")
const body = document.body
Dark.addEventListener('click', ChangeTheme, true)
function ChangeTheme(){
    body.classList.toggle("Dark")
}