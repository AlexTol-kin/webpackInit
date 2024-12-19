import data from "./data";
import "./index.scss";

const root = document.querySelector("#app");

function renderItem(item, index) {
  const divWindow = document.createElement("div");
  divWindow.classList.add("diwWindow");

  const myAudio = new Audio(item.sound);

  const button = document.createElement("button");
  button.innerHTML = `<img src=${item.icons} width="40px" pointer-events: none/>`;
  button.classList.add(`btn${item.weather}`);

  const divCheck = document.querySelector("body");

  divWindow.addEventListener("click", () => {
    divCheck.style.backgroundImage = `url(${item.background})`;
  });

  const range = document.getElementById("range");
  range.addEventListener("input", () => {
    myAudio.volume = Number(range.value) / 100;
  });

  // let volumes = Number(target.value);
  // console.log(volumes);

  // console.log(target.value);
  // isAudio.volume = volumes;

  button.appendChild(myAudio);
  divWindow.appendChild(button);
  root.append(divWindow);
}

data.forEach(renderItem);
