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

    const userEmail = localStorage.getItem('userEmail');
    const signinBtns = document.querySelectorAll('.signin-btn, .sidebar-login-btn');
    signinBtns.forEach(btn => {
        if (userEmail) {
            const displayEmail = userEmail.length > 18 ? userEmail.substring(0, 15) + '...' : userEmail;
            if (btn.classList.contains('sidebar-login-btn')) {
                btn.innerHTML = `<img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/premierleague.svg" alt="logo"> ${displayEmail}`;
            } else {
                btn.innerHTML = `<i class="bi bi-person-fill me-1"></i> ${displayEmail}`;
            }
            btn.addEventListener('click', function () {
                if (confirm('Do you want to sign out?')) {
                    localStorage.removeItem('userEmail');
                    window.location.reload();
                }
            });
        } else {
            btn.addEventListener('click', function () {
                window.location.href = 'signin.html';
            });
        }
    });
});
