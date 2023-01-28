let imagesItems = [...document.querySelectorAll(".img-wrap")];
let titles = [...document.querySelectorAll("h2")];
let titleMessage = document.querySelector(".title");

const setItemActive = (entries) => {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
};

const options = {};

const observer = new IntersectionObserver(setItemActive, options);
observer.observe(titleMessage);

// img-wrapは偶数と奇数で出現する場所が違う
imagesItems.map((item, index) => {
  item.children[0].style.backgroundImage = "url(./imgs/sectionImg.jpg)";
  index % 2 === 0 ? (item.style.left = "55%") : (item.style.left = "5%");
  observer.observe(item);
});

titles.map((title, index) => {
  index % 2 === 0 ? title.style.left = '35%' : title.style.left = '10%';
  observer.observe(title)
})