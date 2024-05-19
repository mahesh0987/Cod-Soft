let dark_mode_icon = document.querySelector(".dark-mode i");

dark_mode_icon.onclick = () => {
  dark_mode_icon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode-form');
};


window.onscroll = () => {

  let header = document.querySelector(".header");

  header.classList.toggle('sticky', window.scrollY > 10);

};


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const scrollRevealOption = {
  distance: "50px",
  origin: "top",
  duration: 1000,
};


ScrollReveal().reveal(".home-content h3", {
  ...scrollRevealOption,
  reset: true,
});
ScrollReveal().reveal(".home-content h1", {
  ...scrollRevealOption,
  delay: 500,
  reset: true,
});
ScrollReveal().reveal(".home-content p", {
  ...scrollRevealOption,
  delay: 1000,
  reset: true,
});

ScrollReveal().reveal(".social-media a", {
  ...scrollRevealOption,
  origin: "bottom",
  interval: 500,
  reset: true,
});

ScrollReveal().reveal(".download-btn", {
  ...scrollRevealOption,
  delay: 900,
  origin: "left",
  reset: true,
});

ScrollReveal().reveal(".home-img img", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 700,
  reset: true,
});


ScrollReveal().reveal(".about-img img", {
  ...scrollRevealOption,
  origin: "left",
  delay: 500,
});


ScrollReveal().reveal(".about-content h1", {
  ...scrollRevealOption,
  origin: "bottom",
});
ScrollReveal().reveal(".about-content h3", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 500,
});
ScrollReveal().reveal(".about-content p", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 1000,
});
ScrollReveal().reveal(".about-btn", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 1500,
});


ScrollReveal().reveal(".services .service-heading", {
  ...scrollRevealOption,
  origin: "top",
});


ScrollReveal().reveal(".services .service-container", {
  ...scrollRevealOption,
  origin: "bottom",
  delay: 500,
});


ScrollReveal().reveal(".skills-container h1", {
  ...scrollRevealOption,
  origin: "top",
});

ScrollReveal().reveal(".skills-content .skill", {
  ...scrollRevealOption,
  origin: "bottom",
  interval: 400,
});



