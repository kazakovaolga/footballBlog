import "./index.scss";
import { Slider } from "./slider/slider.js";

const element = document.querySelector(".slider");
const sliderItem = new Slider(element);

document.querySelector(".previous").addEventListener("click", () => {
  sliderItem.previous();
});
document.querySelector(".next").addEventListener("click", () => {
  sliderItem.next();
});
