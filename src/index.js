const DomElements = {
    navBar: document.querySelector('.leftside'),
    hamburgerMenu: document.querySelector('.hamburgerIcon'),
    rightSide: document.querySelector('.rightside'),
    main: document.querySelector('.main'),
    line1: document.querySelector('.line1'),
    line2: document.querySelector('.line2'),
    line3: document.querySelector('.line3'),
}

let ok = 0;

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

function closeNav() {
    DomElements.navBar.style.transform = "translateX(-320px)";
    DomElements.hamburgerMenu.style.transform = "translateX(-320px)";
    DomElements.rightSide.style.marginLeft = "0px";
    transformMenuToNormal();
    ok = 0;
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
        closeNav();
    }

})

window.addEventListener('scroll', () => {
    if (window.innerWidth > 750) {
        if (ok === 1) {
            closeNav();
        }
    }
})

window.addEventListener('touchmove', () => {
    if (ok === 1) {
        closeNav();
    }

})




