for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    btnanimation(buttonInnerHTML);
  });
}
document.addEventListener("keydown",function(event){

  makeSound(event.key);
  btnanimation(event.key);
});

function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    default:console.log(key);

  }
}
function btnanimation(keys){
  var button = document.querySelector("."+keys);
  button.classList.add("pressed");
  setTimeout(function(){
      button.classList.remove("pressed");
  },100);
}
