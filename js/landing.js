const landingScroll = function () {
    $(window).on('scroll', function () {
        const img = document.getElementsByClassName("hero")[0];
        const height = img.clientHeight;
        const scrollPos = window.scrollY;
        const pct = scrollPos / height;
        if (scrollPos <= height) {
            img.style.transform = `scale(${1 + pct * 2})`;
            img.style.top = `${scrollPos}px`;
        }
    });
};
