const img = document.getElementById('bouncing-gif');

let x = 100;
let y = 100;
let speedX = 3;
let speedY = 3;

function animate() {
  const imgWidth = img.clientWidth || 80;
  const imgHeight = img.clientHeight || 80;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  x += speedX;
  y += speedY;

  if (x + imgWidth >= screenWidth) {
    speedX = -Math.abs(speedX);
    x = screenWidth - imgWidth;
  } else if (x <= 0) {
    speedX = Math.abs(speedX);
    x = 0;
  }

  if (y + imgHeight >= screenHeight) {
    speedY = -Math.abs(speedY);
    y = screenHeight - imgHeight;
  } else if (y <= 0) {
    speedY = Math.abs(speedY);
    y = 0;
  }

  img.style.left = x + 'px';
  img.style.top = y + 'px';

  requestAnimationFrame(animate);
}

if (img.complete) {
  animate();
} else {
  img.onload = animate;
}