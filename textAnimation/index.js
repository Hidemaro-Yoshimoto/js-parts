// const animationTargetElements = document.querySelectorAll(".text-animation");

// for (let i = 0; i < animationTargetElements.length; i++) {
//   const targetElement = animationTargetElements[i];
//   let texts = targetElement.textContent;
//   const textsArry = [];

//   targetElement.textContent = "";

//   // split('')で配列へ
//   const splitTexts = texts.split("");
//   for (let j = 0; j < splitTexts.length; j++) {
//     if (splitTexts[j] === "") {
//       textsArry.push("");
//     }
//     textsArry.push(`<span>${splitTexts[j]}</span>`);
//     // console.log(textsArry);
//   }

//   for(let k = 0; k < textsArry.length; k++) {
//     targetElement.innerHTML += textsArry[k]
//   }
// }

class textAnimation {
  constructor(el) {
    this.targetEl = el instanceof HTMLElement ? el : document.querySelector(el);
    this.chars = this.targetEl.innerHTML.split("");
    this.targetEl.innerHTML = this.splitTextFunc();
    this.animate();
    console.log(this.targetEl);
    console.log(this.chars);
    // console.log(this.chars)
  }

  splitTextFunc() {
    return this.chars.reduce((accu, curr) => {
      curr = curr.replace(/\s+/, "&nbsp;");
      const result = `${accu}<span class="char">${curr}</span>`;
      return result;
    }, "");
  }

  animate() {
    const targetArry = [...this.targetEl.children];
    console.log(targetArry);

    targetArry.map((target, index) => {
      target.classList.add(`inview`);

      // const inview = () => {
      //   return new Promise((resolve) => {
      //     setInterval(() => {
      //       if (!target.classList.contains("inview")) {
      //         target.classList.add(`inview`);
      //         console.log('contain')
      //       }
      //     }, 300);
      //   });
      // };

      // const example = async () => {
      //   const result = await inview();
      //   console.log(result);
      // };
      // example();
    });
  }
}

const textAnimationInstance = new textAnimation(".text-animation");
