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
const language = document.querySelector('.languageDetect').value;

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

function openNav() {
    DomElements.navBar.style.transform = "translateX(0px)";
    DomElements.navBar.style.width = "100%";
    DomElements.hamburgerMenu.style.left = "unset";
    DomElements.hamburgerMenu.style.right = "10px";
    transformMenuToClose();
    ok = 1;
}

function closeNav(check) {
    if (check === 1) {
        DomElements.navBar.style.transform = "translateX(-320px)";
        DomElements.navBar.style.width = "320px";
        DomElements.hamburgerMenu.style.left = "10px";
        transformMenuToNormal();
        ok = 0;
    }

}

DomElements.hamburgerMenu.addEventListener('click', () => {
    if (ok === 0) {
        openNav();
    }
    else {
        closeNav(ok);
    }

})

window.addEventListener('resize', () => {
    let length = window.innerWidth;
    if (length > 780) {
        DomElements.navBar.style.transform = "translateX(0px)";
        DomElements.navBar.style.width = "320px";
        DomElements.hamburgerMenu.style.left = "unset";
        DomElements.hamburgerMenu.style.right = "10px";
        transformMenuToClose();
    }
    else if (length <= 780) {
        DomElements.navBar.style.transform = "translateX(-320px)";
        DomElements.hamburgerMenu.style.right = "unset";
        DomElements.hamburgerMenu.style.left = "10px";
        transformMenuToNormal();
    }
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
        tiles[i].classList.toggle('hidden');
    }
    let id = category === 'web' ? 0 : 1;
    let markup = DomElements.viewMoreButton[id].innerHTML;
    if (language === 'en') {
        if (markup === 'VIEW MORE <i class="fa fa-chevron-down" aria-hidden="true"></i>')
            markup = 'VIEW LESS <i class="fa fa-chevron-up" aria-hidden="true"></i>';
        else
            markup = 'VIEW MORE <i class="fa fa-chevron-down" aria-hidden="true"></i>';
    }
    else if (language === 'ro') {
        if (markup === 'VEZI MAI MULT <i class="fa fa-chevron-down" aria-hidden="true"></i>')
            markup = 'VEZI MAI PUȚIN <i class="fa fa-chevron-up" aria-hidden="true"></i>';
        else
            markup = 'VEZI MAI MULT <i class="fa fa-chevron-down" aria-hidden="true"></i>';
    }

    DomElements.viewMoreButton[id].innerHTML = markup;
}


DomElements.categoryButtons[0].addEventListener('click', () => {
    DomElements.categoryButtons[0].classList.add('selected');
    DomElements.categoryButtons[1].classList.remove('selected');
    DomElements.webArea.style.display = 'inherit';
    DomElements.artArea.style.display = 'none';
})

DomElements.categoryButtons[1].addEventListener('click', () => {
    DomElements.categoryButtons[1].classList.add('selected');
    DomElements.categoryButtons[0].classList.remove('selected');
    DomElements.webArea.style.display = 'none';
    DomElements.artArea.style.display = 'inherit';
})

DomElements.viewMoreButton[0].addEventListener('click', function () {
    viewMore('web');
    scrollToDiv(DomElements.projectsDiv);
})

DomElements.viewMoreButton[1].addEventListener('click', function () {
    viewMore('art');
    scrollToDiv(DomElements.projectsDiv);
})










