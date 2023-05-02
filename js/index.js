$(document).ready(function () {
  $("#navMenu").on("click", function () {
    $(".nav-menu").toggleClass("active");
    $("#navMenu").toggleClass("active");
    $(".overlay").toggleClass("active");
  });
  $(".main,.gallery").click(function () {
    $(".nav-menu .menu").removeClass("active");
  });
});

window.onload = function () {
  document.querySelector("#loader").style.display = "none";
};

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 10,
    stretch: 0,
    depth: 80,
    modifier: 2,
    slideShadows: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
