document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('#closeSidebarBtn');
    const backdrop = document.querySelector('#sidebarBackdrop');
    const drawer = document.querySelector('#sidebarDrawer');

    if (menuBtn && closeBtn && backdrop && drawer) {
        menuBtn.addEventListener('click', function () {
            drawer.classList.add('active');
            backdrop.classList.add('active');
        });

        closeBtn.addEventListener('click', function () {
            drawer.classList.remove('active');
            backdrop.classList.remove('active');
        });

        backdrop.addEventListener('click', function () {
            drawer.classList.remove('active');
            backdrop.classList.remove('active');
        });
    }

    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    const signinBtns = document.querySelectorAll('.signin-btn, .sidebar-login-btn');
    signinBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            window.location.href = 'signin.html';
        });
    });
});
