const intro = document.getElementById("introMusic");
const aizen = document.getElementById("aizenMusic");
const goku = document.getElementById("gokuMusic");

function startMusic() {
  intro.play();
  document.getElementById("musicPrompt").style.display = "none";
}

function closePrompt() {
  document.getElementById("musicPrompt").style.display = "none";
}

function choiceOne() {
  document.getElementById("questionSection").classList.add("hidden");
  document.getElementById("envelopeSection").classList.remove("hidden");
}

function openEnvelope() {
  intro.pause();
  goku.pause();
  aizen.play();

  document.getElementById("envelopeSection").classList.add("hidden");
  document.getElementById("letter").classList.remove("hidden");
}

function choiceTwo() {
  intro.pause();
  aizen.pause();
  goku.play();

  document.getElementById("questionSection").classList.add("hidden");
  document.getElementById("noSection").classList.remove("hidden");
}

function goBack() {
  goku.pause();
  document.getElementById("noSection").classList.add("hidden");
  document.getElementById("questionSection").classList.remove("hidden");
}

function choiceThree() {
  document.getElementById("questionSection").classList.add("hidden");

  const couples = document.getElementById("couples");
  couples.classList.remove("hidden");

  document.querySelectorAll(".float").forEach(img => {
    const x = Math.random() * 180 - 90;
    const y = Math.random() * 180 - 90;
    const duration = Math.random() * 4 + 4;

    img.style.left = Math.random() * 70 + "%";
    img.style.top = Math.random() * 70 + "%";
    img.style.setProperty("--x", `${x}px`);
    img.style.setProperty("--y", `${y}px`);
    img.style.animation = `randomFloat ${duration}s ease-in-out infinite`;
  });

  startFireworks();
}

/* Fireworks */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
window.addEventListener("resize", resize);

function startFireworks() {
  setInterval(() => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (let i = 0; i < 100; i++) {
      ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
      ctx.fillRect(
        Math.random()*canvas.width,
        Math.random()*canvas.height,
        3,3
      );
    }
  }, 300);
}
