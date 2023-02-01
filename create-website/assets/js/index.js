/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "assets/js/articles.json", function () {
  console.log("callback - particles.js config loaded");
});

function disableScroll(event) {
  event.preventDefault();
}

window.onload = () => {
    // Scroll禁止(sp)
    document.addEventListener('touchmove', disableScroll, { passive: false });

    // Scroll禁止(pc)
    document.body.classList.add('overflow-hidden')

  setTimeout(() => {
    // Loaderを消す。
    const loader = document.querySelector(".loader");
    loader.classList.add("loaded");
    
    // Contentを見せる。
    const globalContainer = document.querySelector(".global-container");
    globalContainer.style.opacity = 1;

    // Scroll解除(sp)
    document.removeEventListener('touchmove', disableScroll, { passive: false });

    // Scroll解除(pc)
    document.body.classList.remove('overflow-hidden')
  }, 1500);
};
