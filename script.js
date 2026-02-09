const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const message = document.getElementById('message');
const rose = document.getElementById('rose');

const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const stars = document.getElementById('stars');
const butterfliesContainer = document.getElementById('butterflies');

let noScale = 1;
let yesScale = 1;

function resizeButtons() {
  noScale -= 0.12;
  yesScale += 0.1;

  if (noScale <= 0.05) {
    noBtn.style.display = 'none';
    return;
  }

  noBtn.style.transform = `scale(${noScale})`;
  yesBtn.style.transform = `scale(${yesScale})`;
}

noBtn.addEventListener('click', resizeButtons);
noBtn.addEventListener('touchstart', resizeButtons);

function createButterfly() {
  const b = document.createElement('div');
  b.className = 'butterfly';
  b.style.left = Math.random() * 100 + '%';
  b.style.animationDuration = 8 + Math.random() * 6 + 's';
  butterfliesContainer.appendChild(b);

  setTimeout(() => b.remove(), 14000);
}

yesBtn.addEventListener('click', () => {
  const buttons = document.querySelector('.buttons');
  buttons.style.opacity = '0';
  buttons.style.transform = 'scale(0.8)';

  setTimeout(() => {
    buttons.style.display = 'none';
  }, 600);

  message.innerHTML =
    "Sabía que eligirías el Sí 🙂";

  rose.style.display = 'block';

  sun.style.transform = 'translate(-50%, 200px)';
  sun.style.opacity = '0.35';

  moon.style.opacity = '1';
  moon.style.transform = 'translateY(0)';

  stars.style.opacity = '1';

  for (let i = 0; i < 8; i++) {
    setTimeout(createButterfly, i * 500);
  }
});