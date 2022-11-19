var swiper = new Swiper(".blog", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    loop: true,

    autoplay: {
        delay: 6000,
        disableOnInteraction: true,
    },

    slidesPerView: 2,
    spaceBetween: 76,
});