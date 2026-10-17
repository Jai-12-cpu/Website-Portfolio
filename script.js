const glow = document.querySelector(".glow1");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (glow && !reduceMotion) {
  document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX - 200 + "px";
    glow.style.top = e.clientY - 200 + "px";
  });
}
