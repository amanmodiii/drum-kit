var noOfDrums = document.querySelectorAll(".drum").length;
var i;
for(i = 0 ; i < noOfDrums ; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    playSound(this.innerHTML);
    animation(this.innerHTML);
  });
}

document.addEventListener("keypress",function(){
  playSound(event.key);
  animation(event.key);
});

function animation(key)
{
  var button = document.querySelector("." + key);
  button.classList.add("pressed");

  setTimeout(function(){
    button.classList.remove("pressed");
  }, 150);
}

function playSound(key)
{
   var audio;
   switch (key) {
     case "w":
     audio = new Audio('sounds/tom-1.mp3');
     audio.play();
     break;
     case "a":
     audio = new Audio('sounds/tom-2.mp3');
     audio.play();
     break;
     case "s":
     audio = new Audio('sounds/tom-3.mp3');
     audio.play();
     break;
     case "d":
     audio = new Audio('sounds/tom-4.mp3');
     audio.play();
     break;
     case "j":
     audio = new Audio('sounds/snare.mp3');
     audio.play();
     break;
     case "k":
     audio = new Audio('sounds/crash.mp3');
     audio.play();
     break;
     case "l":
     audio = new Audio('sounds/kick-bass.mp3');
     audio.play();
     break;
     default:
     console.log("invalid key");

   }
 }
