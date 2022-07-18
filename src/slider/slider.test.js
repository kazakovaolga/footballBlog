import { Slider } from "./slider.js";

describe("Inspect Slider function", () => {
  let container;
  let logSpy;
  let slideIndex = 1;
  let previous;
  let next;

  beforeEach(() => {
    container = document.createElement("ul");
    container.className = "slider";
    for (let i = 1; i <= 4; i += 1) {
      const li = document.createElement("li");
      li.className = "slider__item";
      container.append(li);
    }
    previous = document.createElement("a");
    previous.className = "previous";
    next = document.createElement("a");
    next.className = "next";

    logSpy = jest.spyOn(console, "log");
  });

  it("is a function", () => {
    expect(Slider).toBeInstanceOf(Function);
  });

  it("container is not  HTMLElement", () => {
    const container2 = [];
    const s = document.getElementsByTagName("script");
    console.log(Slider(container2));
    expect(logSpy).toHaveBeenCalledWith("Container is not DOM element");
  });

  it("container is ul Element", () => {
    expect(container).toBeInstanceOf(HTMLUListElement);
  });

  it("container class name is slider ", () => {
    const className = container.className;
    expect(className).toEqual("slider");
  });

  it("show slider ", () => {
    const sliderItem = new Slider(container);
    previous.addEventListener("click", () => {
      sliderItem.previous();
    });
    next.addEventListener("click", () => {
      sliderItem.next();
    });
    previous.click();
    next.click();
  });
});
