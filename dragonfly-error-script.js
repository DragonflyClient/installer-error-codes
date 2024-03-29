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
    nav.classList.remove('nav-active');
    ham.classList.remove('ham-active');
}

// FAQ Accordion
accordionList.forEach((accordionHeader) => {
    accordionHeader.addEventListener('click', (event) => {
        toggleAccordion(accordionHeader);
    });
});

function toggleAccordion(element) {
    element.classList.toggle('accordion-active');
    const accordionItemBody = element.nextElementSibling.nextElementSibling;
    if (element.classList.contains('accordion-active')) {
        accordionList.forEach((otherAccordion) => {
            if (otherAccordion !== element) {
                otherAccordion.classList.remove('accordion-active')
                otherAccordion.nextElementSibling.nextElementSibling.style.maxHeight = 0;
            }
        })
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
    } else {
        accordionItemBody.style.maxHeight = '0';
    }
}


// Change direction of logo anchor by scroll position
window.addEventListener("scroll", function () {
    const logoImg = document.querySelector("#logo a")
    if (document.documentElement.scrollTop > 0) {
        logoImg.removeAttribute("href")
        logoImg.setAttribute("onclick", "scrollToTop()")
    } else {
        logoImg.setAttribute("href", "https://inceptioncloud.net/dragonfly")
    }
})
// /*window.addEventListener("load", () => {
//     setTimeout(function () {
//         document.getElementsByTagName("html")[0].style.scrollBehavior = "auto"
//     }, 600)
// })*/

// auto-scroll
let targetElement
let highlighted = false
window.onload = function () {
    let url = window.location.href
    let code = url.substr(url.length - 3)
    targetElement = document.getElementById(code)
    if (code != null && targetElement != null) {
        const posY = targetElement.getBoundingClientRect().top - document.getElementById("navbar").clientHeight - 20
        window.scrollBy(0, posY)
        checkHighlightElement()
    } else if (targetElement == null) {
        document.getElementsByTagName("html")[0].style.scrollBehavior = "auto"
    }
}

function scrollToTop() {
    $("html, body").animate({
        scrollTop: 0
    }, 400)
    closeMenu()
}

window.addEventListener('scroll', function () {
    checkHighlightElement()
});

function checkHighlightElement() {
    if (highlighted || targetElement == null)
        return

    const position = targetElement.getBoundingClientRect();

    // checking whether fully visible
    if (position.top >= 0 && position.bottom <= window.innerHeight && !targetElement.parentElement.classList.contains("highlight")) {
        highlighted = true
        setTimeout(() => {
            toggleAccordion(targetElement)
        }, 300)
        setTimeout(() => {
            targetElement.parentElement.classList.add("highlight")
            document.getElementsByTagName("html")[0].style.scrollBehavior = "auto"
        }, 600)
    }
}
