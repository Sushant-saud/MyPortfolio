//Navigation bar effect on Scroll
window.addEventListener('scroll', function () {
   const header = document.querySelector("header");
   header.classList.toggle('sticky', window.scrollY > 0);
})
//services section ==>model
const serviceModels = document.querySelectorAll('.service-model');
const learnmoreBtns = document.querySelectorAll(".learn-more-btn")
const modalCloseBtns = document.querySelectorAll(".model-close-btn");
var modal = function (modalClick) {
   serviceModels[modalClick].classList.add('active');
}
learnmoreBtns.forEach((learnmoreBtns, i) => {
   learnmoreBtns.addEventListener('click', () => {
      modal(i);
   })

});
modalCloseBtns.forEach((modalCloseBtns) => {
   modalCloseBtns.addEventListener('click', () => {
      serviceModels.forEach((modalview) => {
         modalview.classList.remove('active');
      })
   })
})
//  our client swiper
var swiper = new Swiper(".client-Swiper", {
   slidesPerView: 1,
   spaceBetween: 30,
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
// scroll to the top button
const scrollTopbtn = document.querySelector('.scrollToTop-btn')
window.addEventListener('scroll', function () {
   scrollTopbtn.classList.toggle('active', window.scrollY > 500);
});
scrollTopbtn.addEventListener('click', () => {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
})
//Navigation menu items active on page scroll
// light/dark theme button
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
   document.body.classList.toggle("dark-theme");
   themeBtn.classList.toggle("sun");
   localStorage.setItem('saved-theme', getCurrentTheme());
   localStorage.setItem('saved-icon', getCurrentIcon());
});
const getCurrentTheme = () => {
   document.body.classList.contains("dark-theme" ? "dark" : "light")
}
const getCurrentIcon = () => {
   themeBtn.classList.contains("sun") ? "sun" : "moon";
}
const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");
if (savedTheme) {
   document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
   themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}
// Responsive navigation menu toggle
const menuBtn = document.querySelector('.nav-menu-btn');
const closeBtn = document.querySelector('.nav-close-btn');
const navigation = document.querySelector('.navigation');
const naviItem = document.querySelectorAll(".nav-items a");
naviItem.forEach((navItem) => {
   navItem.addEventListener('click', function () {

      navigation.classList.remove('active');
   }
   )

});
menuBtn.addEventListener('click', () => {
   navigation.classList.toggle('active');
});
closeBtn.addEventListener('click', () => {
   navigation.classList.remove('active');
});
ScrollReveal({
   reset:true,
   distance:'60px',
   duration:2500,
   delay:100
});
ScrollReveal().reveal('.home .info h2, .section-title-01,section-title-02',{delay:500,origin:'left'});
ScrollReveal().reveal('.home .info h2 , .home .info p,.about-info .btn',{delay:600,origin:'right'});
ScrollReveal().reveal('.home .info .btn',{delay:700,origin:'bottom'});
ScrollReveal().reveal('.media-icons,.contact-left li',{delay:500,origin:'left' ,interval:200});
ScrollReveal().reveal('.home-img ,.about-img',{delay:500,origin:'bottom'});
ScrollReveal().reveal('.about .description,contact-right,.contact-right',{delay:500,origin:'right'});
ScrollReveal().reveal('.about .professional-list li',{delay:500,origin:'right',interval:200});
ScrollReveal().reveal('.skils-description-list li',{delay:500,origin:'right',interval:200});
ScrollReveal().reveal('.skils-description,.services-description, .service-card, .client-swiper,.contact-left h2',{delay:700,origin:'left'});
ScrollReveal().reveal('.experience-card .services-card, .education, .contact-card, .client-swiper,contact-left h2',{delay:700,origin:'bottom',interval:200});
ScrollReveal().reveal('footer .group ,.about-group',{delay:500,origin:'top',interval:200});




