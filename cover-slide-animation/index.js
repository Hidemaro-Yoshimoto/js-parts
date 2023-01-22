const targets = document.querySelectorAll(".cover-slide");

const callback = (entries) => {
  entries.map((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('inview')
    }
  });
};

const options = {};

const observer = new IntersectionObserver(callback, options);

targets.forEach((target) => {
  observer.observe(target)
})

// NodeListはmapは使えずforEachを使う
// 又は下記のような形で取得する
// console.log(targets);
// console.log(Array.prototype.slice.call(targets));
// console.log(Array.prototype.slice.call(document.querySelectorAll('.cover-slide')))