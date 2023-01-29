const container = document.querySelector(".container");
for (let i = 0; i < 50; i++) {
  const blocks = document.createElement("div");
  blocks.classList.add("block");
  container.appendChild(blocks);
}

// animeJsを使用

const animateBlocks = () => {
  anime({
    targets: ".block",
    translateX: () => {
      // x座標を-800～700までランダムに動く。
      return anime.random(-800, 700);
    },
    translateY: () => {
      return anime.random(-500, 500)
    },
    scale: () => {
      return anime.random(1,3)
    },
    duration: 2500,
    delay: anime.stagger(15),
    complete: animateBlocks
  });
};

animateBlocks();
