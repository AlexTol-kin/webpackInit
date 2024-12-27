import data from "./data";
import "./index.scss";

const root: HTMLElement = document.querySelector("#app");

interface IWeather {
  id: number;
  weather: string;
  sound: string;
  icons: string;
  background: string;
}

function renderWeather(item: IWeather) {
  const divWindow: HTMLDivElement = document.createElement("div");
  divWindow.classList.add("diwWindow");

  const myAudio: HTMLAudioElement = new Audio(item.sound);

  const button: HTMLButtonElement = document.createElement("button");
  button.innerHTML = `<img src=${item.icons} width="40px" pointer-events: none/>`;
  button.classList.add(`btn${item.weather}`);

  const divCheck = document.querySelector("body");

  divWindow.addEventListener("click", () => {
    divCheck.style.backgroundImage = `url(${item.background})`;
  });

  const range: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("range")
  );
  range.addEventListener("input", () => {
    myAudio.volume = Number(range.value) / 100;
  });

  button.appendChild(myAudio);
  divWindow.appendChild(button);
  root.append(divWindow);
}

data.forEach(renderWeather);
