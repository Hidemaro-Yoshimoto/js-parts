window.onload = () => {
  setTimeout(() => {
    // Loaderを消す。
    const loader = document.querySelector('.loader');
    loader.classList.add('loaded');
  
    // Contentを見せる。
    const content = document.querySelector('.content');
    content.style.visibility = 'visible';
  }, 3000)
}