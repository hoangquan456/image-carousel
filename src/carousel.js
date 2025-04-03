export class carousel {
  constructor(container, size) {
    this.container = container;
    this.show = 0;
    this.size = size;
    this.init();
  }

  init() {
    let prev = this.container.querySelector(".prev");
    let next = this.container.querySelector(".next");
    let dots = this.container.querySelectorAll(".dot");

    prev.addEventListener("click", () => {
      this.show = (this.show - 1 + this.size) % this.size;
      this.render();
    });

    next.addEventListener("click", () => {
      this.show = (this.show + 1 + this.size) % this.size;
      this.render();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        this.show = index;
        this.render();
      });
    });

    this.render();
  }

  render() {
    //add active class to current show
    this.container.querySelectorAll(".slide").forEach((slide) => {
      if (slide.matches(`[data-${this.show}]`)) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });

    this.container.querySelectorAll(".dot").forEach((slide) => {
      if (slide.matches(`[data-${this.show}]`)) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }
}
