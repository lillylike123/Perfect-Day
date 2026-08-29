const img = document.getElementById('bouncing-gif');

let x = 100;
let y = 100;
let speedX = 3;
let speedY = 3;

function animate() {
  const imgWidth = img.clientWidth;
  const imgHeight = img.clientHeight;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Bounce off right or left edge
  if (x + imgWidth >= screenWidth || x <= 0) {
    speedX = -speedX;
  }

  // Bounce off bottom or top edge
  if (y + imgHeight >= screenHeight || y <= 0) {
    speedY = -speedY;
  }

  x += speedX;
  y += speedY;

  img.style.left = x + 'px';
  img.style.top = y + 'px';

  requestAnimationFrame(animate);
}

// Start animation once the image loads
img.onload = () => {
  animate();
};