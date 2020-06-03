// Drums = node list of each btn
var drums = document.querySelectorAll(".drum");


// Detecting button press

for (var i = 0; i < drums.length; ++i) {
    // Loop through each in node list and add event
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

// Detecting keyboard press

document.addEventListener("keydown", function (event) {
    var keyPressed = event.key;
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
});


function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var bass = new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;

        default:
            console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) {
    var btn = document.querySelector("." + currentKey);
    // Add class to give animation
    btn.classList.add("pressed");

    // Remove class after delay
    setTimeout(function () {
        btn.classList.remove("pressed");
    }, 100);
}