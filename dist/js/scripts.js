document.addEventListener('DOMContentLoaded', () => {
    const newYear = new Date('Aug 31 2025 00:00:00');

    const daysVal = document.querySelector('.time-count__days .time-count__val');
    const hoursVal = document.querySelector('.time-count__hours .time-count__val');
    const minutesVal = document.querySelector('.time-count__minutes .time-count__val');

    const normalize = (n) => n <= 9 ? `0${n}` : n

    const timeCount = () => {
        let now = new Date();
        let leftUntil = newYear - now;

        let days = normalize(Math.floor(leftUntil / 1000 / 60 / 60 / 24));
        let hours = normalize(Math.floor(leftUntil / 1000 / 60 / 60) % 24);
        let minutes = normalize(Math.floor(leftUntil / 1000 / 60) % 60);

        daysVal.innerHTML = days.toString().replace(/\d/gi, (substring) => `<span>${substring}</span>`);
        hoursVal.innerHTML = hours.toString().replace(/\d/gi, (substring) => `<span>${substring}</span>`);
        minutesVal.innerHTML = minutes.toString().replace(/\d/gi, (substring) => `<span>${substring}</span>`);
    };

    timeCount();
    setInterval(timeCount, 1000);
});

let video = document.querySelector('.block-video__item');
if (video) {
    video.addEventListener('click', function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
}

if (document.querySelector('.block-reviews__slider')) {
    const blockReviews = new Swiper('.block-reviews__slider', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 400,
        preloadImages: true,
        navigation: {
            prevEl: '.block-reviews__arrow-prev',
            nextEl: '.block-reviews__arrow-next',
        },
    });
}