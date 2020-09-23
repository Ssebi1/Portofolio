const DomElements = {
    navBar: document.querySelector('.leftside'),
    hamburgerMenu: document.querySelector('.hamburgerIcon'),
    rightSide: document.querySelector('.rightside'),
    main: document.querySelector('.main'),
    line1: document.querySelector('.line1'),
    line2: document.querySelector('.line2'),
    line3: document.querySelector('.line3'),
    navLinks: document.querySelectorAll('.navLink'),
    homeDiv: document.querySelector('.banner'),
    aboutDiv: document.querySelector('.about'),
    educationDiv: document.querySelector('.education'),
    skillsDiv: document.querySelector('.skills'),
    projectsDiv: document.querySelector('.projects'),
    contactDiv: document.querySelector('.contact'),
}

let ok = 0;

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

function transformMenuToClose() {
    DomElements.line1.style.transform = "rotate(45deg)"
    DomElements.line2.style.opacity = "0";
    DomElements.line3.style.transform = "rotate(-45deg)"
    DomElements.line3.style.marginTop = "-8px"
    DomElements.line1.style.marginTop = "10px"
}

function transformMenuToNormal() {
    DomElements.line1.style.transform = "rotate(0deg)"
    DomElements.line2.style.opacity = "1";
    DomElements.line3.style.transform = "rotate(0deg)";
    DomElements.line3.style.marginTop = "5px"
    DomElements.line1.style.marginTop = "0px"
}

function closeNav(check) {
    if (check === 1) {
        DomElements.navBar.style.transform = "translateX(-320px)";
        DomElements.hamburgerMenu.style.transform = "translateX(-320px)";
        DomElements.rightSide.style.marginLeft = "0px";
        transformMenuToNormal();
        ok = 0;
    }

}

DomElements.hamburgerMenu.addEventListener('click', () => {
    if (ok === 0) {
        DomElements.navBar.style.transform = "translateX(0px)";
        DomElements.hamburgerMenu.style.transform = "translateX(0px)";
        DomElements.rightSide.style.marginLeft = "320px";
        transformMenuToClose();
        ok = 1;
    }
    else {
        closeNav(ok);
    }

})

window.addEventListener('scroll', () => {
    if (!isMobile)
        closeNav(ok);


})

window.addEventListener('touchmove', () => {
    closeNav(ok);
})

function activateNavLink(id) {
    DomElements.navLinks.forEach(el => {
        el.classList.remove('active');
    })
    DomElements.navLinks[id].classList.add('active');
}

function scrollToDiv(div) {
    if (isMobile) {
        setTimeout(() => {
            div.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 400)
    }
    else
        div.scrollIntoView({ behavior: 'smooth', block: 'center' });
}








