const targets = [...document.querySelectorAll('.img-wrap')];

const callback = (entries) => {
  entries.map((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('observe')
      entry.target.classList.add('splashbg')
    }
  })
}

const options = {}

const observer = new IntersectionObserver(callback, options);
targets.map((target) => {
  observer.observe(target)
})