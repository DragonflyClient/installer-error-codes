/*---------------*/
/*== SELECTORS ==*/
/*---------------*/

/* #region selectors */
const nav = document.querySelector('.nav');
const ham = document.querySelector('.ham-wrapper');
const socials = document.querySelector('.socials');

const accordionList = document.querySelectorAll('.accordion-item-header');
const width = window.innerWidth;

/* #region main-statements */
nav.classList.remove('nav-active');
ham.classList.remove('ham-active');

// Hamburger Menu
ham.addEventListener('click', toggleNav);
/* #endregion */


/*---------------*/
/*== FUNCTIONS ==*/
/*---------------*/

/* #region functions */
// Open / Close the nav menu
function toggleNav() {
    nav.classList.toggle('nav-active');
    ham.classList.toggle('ham-active');
    socials.classList.toggle('socials-active');
}

// Close the nav menu
function closeMenu(e) {
    nav.classList.toggle('nav-active');
    ham.classList.toggle('ham-active');
}

// FAQ Accordion
accordionList.forEach((accordionHeader) => {
    accordionHeader.addEventListener('click', (event) => {
        accordionHeader.classList.toggle('accordion-active');
        const accordionItemBody = accordionHeader.nextElementSibling.nextElementSibling;
        if (accordionHeader.classList.contains('accordion-active')) {
            accordionList.forEach((otherAccordion) => {
                if (otherAccordion !== accordionHeader) {
                    otherAccordion.classList.remove('accordion-active')
                    otherAccordion.nextElementSibling.nextElementSibling.style.maxHeight = 0;
                }
            })
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 400,
    speedAsDuration: true,
});
const categoryFronend = new SmoothScroll('a[href*="#client-frontend"]', {
    speed: 400,
    speedAsDuration: true,
});
const categoryBackend = new SmoothScroll('a[href*="#client-backend"]', {
    speed: 400,
    speedAsDuration: true,
});
const categoryServerside = new SmoothScroll('a[href*="#server-side"]', {
    speed: 400,
    speedAsDuration: true,
});