const links = document.querySelectorAll('a[data-target]');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.getElementById(link.dataset.target);
    document.querySelectorAll('section').forEach(sec => sec.classList.add('hidden'));
    target.classList.remove('hidden');
  });
});


const heroImage = document.querySelector('.hero-image');
const images = ['./img/image1.jpg', './img/image2.jpg', './img/image3.jpg'];
let current = 0;

setInterval(() => {
  current = (current + 1) % images.length;
  heroImage.src = images[current];
}, 5000);

   