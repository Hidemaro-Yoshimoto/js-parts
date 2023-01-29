document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  gsap.to(".circle", {
    x: mouseX,
    y: mouseY,
    // 若干遅れて円が来る
    stagger: -0.1,
  });

  // 遅延がない
  gsap.set('.cursor', {
    x: mouseX,
    y: mouseY,
  })
});
