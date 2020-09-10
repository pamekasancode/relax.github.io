const rain = new Audio("rain.mp3");
rain.loop = true;
volRain();
const telephone = new Audio("telephone.mp3");
telephone.loop = true;
volTelephone();
const openwindow = new Audio("openwindow.mp3");
openwindow.loop = true;
volOpenwindow();
const keyboard = new Audio("keyboard.mp3");
keyboard.loop = true;
volKeyboard();
const waves = new Audio("waves.mp3");
waves.loop = true;
volWaves();
const ambience = new Audio("ambience.mp3");
ambience.loop = true;
volAmbience();
function play() {
  $("#play").on("click", function(){
    if(rain.paused) {
      rain.play()
      telephone.play();
      openwindow.play();
      keyboard.play();
      waves.play();
      ambience.play();
      $(".fa-play").attr("class", "fa fa-pause")
    } else {
      rain.pause()
      telephone.pause();
      openwindow.pause();
      keyboard.pause();
      waves.pause();
      ambience.pause();
      $(".fa-pause").attr("class", "fa fa-play")
    }
  })

}

play();

function mute() {
  $("#mute").on("click", function() {
    if (rain.muted) {
      rain.muted = false;
      telephone.muted = false;
      openwindow.muted = false;
      keyboard.muted = false;
      waves.muted = false;
      ambience.muted = false;
      $(".fa-volume-off").attr("class", "fa fa-volume-up float-right")
    } else {
      rain.muted = true;
      telephone.muted = true;
      openwindow.muted = true;
      keyboard.muted = true;
      waves.muted = true;
      ambience.muted = true;
      $(".fa-volume-up").attr("class", "fa fa-volume-off float-right")
    }
  })
}

mute();

function volRain() {
  const vol = document.querySelector("input[name=rain]");
  vol.addEventListener("input", function() {
    rain.volume = vol.value / 100;

  })
}

function volTelephone() {
  const vol = document.querySelector("input[name=telephone]");
  vol.addEventListener("input", function() {
    telephone.volume = vol.value / 100;

  })
}

function volOpenwindow() {
  const vol = document.querySelector("input[name=openwindow]");
  vol.addEventListener("input", function() {
    openwindow.volume = vol.value / 100;

  })
}

function volKeyboard() {
  const vol = document.querySelector("input[name=keyboard]");
  vol.addEventListener("input", function() {
    keyboard.volume = vol.value / 100;

  })
}
function volWaves() {
  const vol = document.querySelector("input[name=waves]");
  vol.addEventListener("input", function() {
    waves.volume = vol.value / 100;

  })
}

function volAmbience() {
  const vol = document.querySelector("input[name=ambience");
  vol.addEventListener("input", function() {
    ambience.volume = vol.value / 100;

  })
}

var about = document.querySelector(".about");
about.style.display = "none";
function Relax() {
  about.style.display = "block";
  var close = document.querySelector(".fa-times");
  close.addEventListener("click", function() {
    about.style.display = "none";
  })
}
