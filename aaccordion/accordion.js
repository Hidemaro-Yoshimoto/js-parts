class Accordion {
  constructor(obj) {
    this.els = document.querySelector(obj.hookName);
    this.trigger = this.els.getElementsByTagName(obj.tagName);

    this.i = 0;
    while (this.i < this.trigger.length) {
      this.trigger[this.i].addEventListener("click", (e) => this.handleClick(e));
      this.i++;
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    const target = e.currentTarget;

    const answer = target.nextElementSibling;
    let displayStyle = answer.style.display;

    if (displayStyle === "") {
      answer.style.display = "block";
      console.log(answer.style.display);
    } else if (displayStyle === "none") {
      answer.style.display = "block";
      console.log(answer.style.display);
    } else {
      answer.style.display = "none";
      console.log(answer.style.display);
    }
  };
}

const accordionInstance1 = new Accordion({
  hookName: "#js-accordion",
  tagName: "a",
});

const accordionInstance2 = new Accordion({
  hookName: "#js-faq",
  tagName: "span",
});
