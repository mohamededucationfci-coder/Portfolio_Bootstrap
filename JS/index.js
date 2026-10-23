function loading() {
  const loading = document.querySelector(".loading");
  window.addEventListener("load", () => {
    loading.style.display = "none";
  });
}
loading();

const track = document.querySelector(".track");
const trackName = "Front-end developer";
let init = 0;

function type() {
  if (init <= trackName.length) {
    track.textContent = trackName.slice(0, init++);
    track.textContent += " |"
    setTimeout(type, 100);
  }
}
type();
