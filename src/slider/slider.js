let slideIndex = 1;

function Slider(el) {
  console.log("slider el=", el);
  if (!(el instanceof HTMLElement)) {
    console.log("Container is not DOM element");
    return;
  }
  showSlides(el, slideIndex);
  console.log("this=", this);

  this.previous = () => {
    showSlides(el, (slideIndex -= 1));
  };

  this.next = () => {
    showSlides(el, (slideIndex += 1));
  };
}

function showSlides(el, n) {
  let slides = el.querySelectorAll(".slider__item");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

export { Slider };
