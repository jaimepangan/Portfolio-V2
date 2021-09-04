// ABOUT PAGE EVENTS ================================

const fullPage = document
const pageTwo = document.getElementById('page-two')
const navBar = document.getElementById('page-two-nav');

const navAbout = document.getElementById('li-About');
const navExperience = document.getElementById('li-Experience');
const navProjects = document.getElementById('li-Projects');
const navContact = document.getElementById('li-Contact');
const navJaime = document.getElementById('nav-header-Jaime')
const navPangan = document.getElementById('nav-header-Pangan')

fullPage.onscroll =  function showPage() {
    let scrolled = scrollY;
    // console.log(scrolled)
    if (scrolled >= 75) {
        pageTwo.style.animation = 'fadeIn 2s ease-in';
        fullPage.removeEventListener('scroll', showPage);
    };

    if (scrolled >= 950) {
        navBar.style.transition = 'background-color 400ms ease-out';
        navBar.style.backgroundColor = 'black';
        navAbout.style.color = 'white';
        navExperience.style.color = 'white';
        navProjects.style.color = 'white';
        navContact.style.color = 'white';
        navJaime.style.color = 'white';
        navPangan.style.color = 'white';
    } else if (scrolled < 950) {
        navBar.style.transition = 'background-color 400ms ease-out';
        navBar.style.backgroundColor = 'white';
        navAbout.style.color = 'black';
        navExperience.style.color = 'black';
        navProjects.style.color = 'black';
        navContact.style.color = 'black';
        navJaime.style.color = 'black';
        navPangan.style.color = 'black';
    }
}

// MOBILE NAV BAR

const navIcon = document.getElementById('mobile-nav-section');
const navPage = document.getElementById('mobile-nav');
const navItems = document.getElementById('display-mobile-nav');
const aboutMobile = document.getElementById('about-mobile');
const experienceMobile = document.getElementById('experience-mobile');
const contactMobile = document.getElementById('contact-mobile');

let clearNav = function() {
    navPage.classList.toggle('mobile-active');
    navItems.classList.toggle('mobile-nav-active');
    navItems.style.transition = 'all 300ms ease-in';
}

aboutMobile.onclick = clearNav;
navIcon.onclick = clearNav;
experienceMobile.onclick = clearNav;
contactMobile.onclick = clearNav;

