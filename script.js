document.addEventListener("mousemove", (e) => {
  const glow = document.querySelector(".glow1");
  glow.style.left = e.clientX - 200 + "px";
  glow.style.top = e.clientY - 200 + "px";
});
console.log("Welcome to Jai's Portfolio Website");

