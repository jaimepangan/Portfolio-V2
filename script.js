// ABOUT PAGE EVENTS ================================

const fullPage = document
const pageTwo = document.getElementById('page-two')

fullPage.onscroll =  function showPage() {
    let scrolled = scrollY;
    // console.log(scrolled)
    if (scrolled >= 75) {
        pageTwo.style.animation = 'fadeIn 2s ease-in';
        fullPage.removeEventListener('scroll', showPage);
    }
}