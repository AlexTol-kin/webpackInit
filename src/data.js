import soundWinter from "./assets/sounds/winter.mp3";
import soundSummer from "./assets/sounds/summer.mp3";
import soundRain from "./assets/sounds/rain.mp3";
import iconWinter from "./assets/icons/cloud-snow.svg";
import iconSummer from "./assets/icons/sun.svg";
import iconRain from "./assets/icons/cloud-rain.svg";
import bgWinter from "./assets/winter-bg.jpg";
import bgSummer from "./assets/summer-bg.jpg";
import bgRain from "./assets/rainy-bg.jpg";

export default [
  {
    id: 1,
    weather: "winter",
    sound: soundWinter,
    icons: iconWinter,
    background: bgWinter,
  },
  {
    id: 2,
    weather: "summer",
    sound: soundSummer,
    icons: iconSummer,
    background: bgSummer,
  },
  {
    id: 3,
    weather: "rain",
    sound: soundRain,
    icons: iconRain,
    background: bgRain,
  },
];

HTMLAudioElement.prototype.stop = function () {
  this.pause();
  this.currentTime = 0.0;
};
const divCheck = document.getElementById("app");

let prevAudio = null;
let value = "";
let flagSound = false;

divCheck.addEventListener("click", ({ target }) => {
  const isAudio = target.querySelector("audio");
  if (target.value) {
    return;
  }
  if (value !== target.classList.value && value !== "") {
    flagSound = false;
    prevAudio.stop();
    value = target.classList.value;
    prevAudio = isAudio;
    isAudio.play();
    return;
  }
  if (flagSound) {
    prevAudio = isAudio;
    flagSound = false;
    isAudio.play();
    return;
  }
  if (value === "" || value !== target.classList.value) {
    prevAudio = isAudio;
    value = target.classList.value;
    isAudio.play();
  } else if (value === target.classList.value) {
    prevAudio = isAudio;
    flagSound = true;
    isAudio.pause();
  }
});
