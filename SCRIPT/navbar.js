let lastScroll = 0;
const navbar = document.querySelector(".main-navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        if (!navbar.classList.contains("navbar-scrolled")) {
            navbar.classList.add("navbar-scrolled");
        }

    } else {
        navbar.classList.remove("navbar-scrolled");
    }

    lastScroll = window.scrollY;
});