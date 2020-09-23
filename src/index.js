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
    viewMoreButton: document.querySelectorAll('.viewMore'),
    webArea: document.querySelector('.web'),
    artArea: document.querySelector('.art'),
    categoryButtons: document.querySelectorAll('.projectLi')
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
            div.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 400)
    }
    else
        div.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function viewMore(category) {
    let tiles = document.querySelectorAll(`.project-tile-${category}`);
    for (let i = 2; i < tiles.length; i++) {
        tiles[i].classList.toggle('hidden')
    }
    let id = category === 'web' ? 0 : 1;
    let markup = DomElements.viewMoreButton[id].innerHTML;
    if (markup === 'VIEW MORE <i class="fa fa-chevron-right" aria-hidden="true"></i>')
        markup = 'VIEW LESS <i class="fa fa-chevron-up" aria-hidden="true"></i>';
    else
        markup = 'VIEW MORE <i class="fa fa-chevron-right" aria-hidden="true"></i>';
    DomElements.viewMoreButton[id].innerHTML = markup;
}


DomElements.categoryButtons[0].addEventListener('click', () => {
    DomElements.categoryButtons[0].classList.add('selected');
    DomElements.categoryButtons[1].classList.remove('selected');
    DomElements.webArea.style.display = 'flex';
    DomElements.artArea.style.display = 'none';
})

DomElements.categoryButtons[1].addEventListener('click', () => {
    DomElements.categoryButtons[1].classList.add('selected');
    DomElements.categoryButtons[0].classList.remove('selected');
    DomElements.webArea.style.display = 'none';
    DomElements.artArea.style.display = 'flex';
})

DomElements.viewMoreButton[0].addEventListener('click', function () {
    viewMore('web');
    scrollToDiv(DomElements.projectsDiv);
})

DomElements.viewMoreButton[1].addEventListener('click', function () {
    viewMore('art');
    scrollToDiv(DomElements.projectsDiv);
})










