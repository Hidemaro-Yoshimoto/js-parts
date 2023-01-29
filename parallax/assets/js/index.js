document.querySelectorAll("main > section").forEach((element) => {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  element.appendChild(circle);
});

// const image = new Rellax('.image img');
const image = new Rellax(".image img", {
  speed: -2,
  // center: true スクロールで画像が動いて余白ができるからわざと画像を少し大きめに指定する
  center: true,
  callback: function (position) {
    console.log(position);
  },
});

const circle = new Rellax('.circle', {
  center: true,
  speed: 2
})

const header = new Rellax('header', {
  speed: 2,
})