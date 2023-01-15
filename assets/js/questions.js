// Reveal first question by hiding and revealing Divs on buton click

let startButton = document.querySelector("#start");

document.getElementById("start").addEventListener("click", function(){
    document.getElementById("questions").style.display="block";
    document.getElementById("start-screen").style.display="none";
});



