// scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// navbar
const menuToggle = document.querySelector('.menuToggle');
const header = document.querySelector('header');
menuToggle.addEventListener('click', function () {
  header.classList.toggle('active');
});

// animasi
var contentElement = document.getElementById('unggul');
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var contentPosition = contentElement.getBoundingClientRect().top + window.scrollY;
    var activationPoint = window.innerHeight / 2;
    if (scrollPosition + activationPoint >= contentPosition) {
        contentElement.classList.add('animasiUnggul');
    } else {
        contentElement.classList.remove('animasiUnggul');
    }
});

// refresh button
document.getElementById("send").addEventListener("click", function() {
    location.reload();

  });

