const links = document.querySelectorAll('a[data-target]');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.getElementById(link.dataset.target);
    document.querySelectorAll('section[id]').forEach(sec => sec.classList.add('hidden'));
    target.classList.remove('hidden');
  });
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('section[id]').forEach(sec => sec.classList.add('hidden'));
  document.getElementById('home-section').classList.remove('hidden');
});



const heroImage = document.querySelector('.hero-image');
const images = ['./img/nen1.png', './img/nen2.jpg', './img/nen3.jpg', './img/nen4.jpg'];
let current = 0;

heroImage.src = images[current];

setInterval(() => {
  current = (current + 1) % images.length;
  heroImage.src = images[current];
}, 7000);



document.addEventListener('DOMContentLoaded', function () {
    const menuButtons = document.querySelectorAll('.menu-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    menuButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');

            // Cập nhật nút active
            menuButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Lọc mục theo danh mục
            filterMenuItems(category);
        });
    });

    function filterMenuItems(category) {
        menuItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');

            if (category === 'all' || itemCategory === category) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    // Khởi tạo với tất cả hiện
    filterMenuItems('all');
});




