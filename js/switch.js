const navs = document.querySelectorAll('.nav-link');
const navs_li = document.querySelectorAll('.nav-item');
const contents = document.querySelectorAll('.container-body');
const nav_home = document.querySelector('#home');

window.onload = () => {
    contents.forEach(content => {
        if (content.id != 'home') {
            content.classList.add('hidden');
        }
    });
    document.getElementById('menu_home').parentElement.classList.add('active');
};

navs.forEach(nav => {
    nav.addEventListener('click', () => {
        navs_li.forEach(li => {
            li.classList.remove('active');
        });

        nav.parentElement.classList.add('active');

        const targetId = nav.getAttribute('data-target');
        
        contents.forEach(content => {
            content.classList.add('hidden');
        })

        const targetContent = document.getElementById(targetId);
        targetContent.classList.remove('hidden');

        const navbarCollapse = document.querySelector('.navbar-collapse');

        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }

    })
});