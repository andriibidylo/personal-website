
// init Swiper:
const swiper = new Swiper('.mySwiper', {

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    loop: true,
    resizeObserver: false,
    setWrapperSize: true,
}
)