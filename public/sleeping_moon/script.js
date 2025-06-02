function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.warn("Fullscreen request denied", err);
        });
    } else {
        document.exitFullscreen();
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "f") {
        toggleFullscreen();
    }
});

let lastTap = 0;
document.addEventListener("DOMContentLoaded", () => {
  const starContainer = document.querySelector(".stars");
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    starContainer.appendChild(star);
  }
});

const starContainer = document.querySelector('.stars');
for (let i = 0; i < 100; i++) {
    let star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDelay = Math.random() * 2 + 's';
    starContainer.appendChild(star);
}