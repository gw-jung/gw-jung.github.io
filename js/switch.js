const navs = document.querySelectorAll('.nav-link');
const navs_li = document.querySelectorAll('.nav-item');
const contents = document.querySelectorAll('.container-body');

function switchSection(targetId) {
    navs_li.forEach(li => li.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    const targetNav = document.querySelector(`[data-target="${targetId}"]`);
    const targetContent = document.getElementById(targetId);

    if (targetNav && targetContent) {
        targetNav.parentElement.classList.add('active');
        targetContent.classList.add('active');
    }

    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
    }
}

function switchSectionByHash() {
    const hash = window.location.hash.substring(1) || 'home' ;
    switchSection(hash);
}

window.addEventListener('load', () => {
    switchSectionByHash();
});

window.addEventListener('hashchange', () => {
    switchSectionByHash();
});

navs.forEach(nav => {
    nav.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = nav.getAttribute('data-target');
        window.location.hash = targetId;
    });
});
