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
  experienceDiv: document.querySelector('.experience'),
  trainingDiv: document.querySelector('.training'),
  skillsDiv: document.querySelector('.skills'),
  projectsDiv: document.querySelector('.projects'),
  achivementsDiv: document.querySelector('.achivement'),
  contactDiv: document.querySelector('.contact'),
  viewMoreButton: document.querySelectorAll('.viewMore'),
  webArea: document.querySelector('.web'),
  artArea: document.querySelector('.art'),
  categoryButtons: document.querySelectorAll('.projectLi'),
};

let ok = 0;
const language = document.querySelector('.languageDetect').value;

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

//Init function
(function () {
  const id = parseInt(localStorage.getItem('category'));
  if (id) {
    selectCategory(id);
    showCategory(id);
  } else {
    selectCategory(0);
    showCategory(0);
  }

  for (i = 0; i <= 1; i++) {
    if (parseInt(localStorage.getItem(`viewMoreCategory-${i}`))) {
      viewMore(i === 0 ? 'web' : 'art');
    }
  }
})();

function transformMenuToClose() {
  DomElements.line1.style.transform = 'rotate(45deg)';
  DomElements.line2.style.opacity = '0';
  DomElements.line3.style.transform = 'rotate(-45deg)';
  DomElements.line3.style.marginTop = '-10px';
  DomElements.line1.style.marginTop = '10px';
}

function transformMenuToNormal() {
  DomElements.line1.style.transform = 'rotate(0deg)';
  DomElements.line2.style.opacity = '1';
  DomElements.line3.style.transform = 'rotate(0deg)';
  DomElements.line3.style.marginTop = '5px';
  DomElements.line1.style.marginTop = '0px';
}

function openNav() {
  DomElements.navBar.style.transform = 'translateX(0px)';
  DomElements.navBar.style.width = '100%';

  DomElements.hamburgerMenu.style.transition = '0s';
  DomElements.hamburgerMenu.style.opacity = '0';
  DomElements.hamburgerMenu.style.left = 'unset';
  DomElements.hamburgerMenu.style.right = '10px';

  setTimeout(() => {
    DomElements.hamburgerMenu.style.transition = '0.3s';
    DomElements.hamburgerMenu.style.opacity = '1';
    setTimeout(() => {
      transformMenuToClose();
    }, 50);
  }, 300);

  ok = 1;
}

function closeNav(check) {
  if (check === 1) {
    DomElements.navBar.style.transform = 'translateX(-320px)';
    DomElements.navBar.style.width = '320px';
    setTimeout(() => {
      DomElements.hamburgerMenu.style.opacity = '0';
    }, 50);
    setTimeout(() => {
      DomElements.hamburgerMenu.style.left = '10px';
      DomElements.hamburgerMenu.style.opacity = '1';
      DomElements.hamburgerMenu.style.right = 'unset';
      transformMenuToNormal();
    }, 300);
    ok = 0;
  }
}

DomElements.hamburgerMenu.addEventListener('click', () => {
  if (ok === 0) {
    openNav();
  } else {
    closeNav(ok);
  }
});

// window.addEventListener('resize', () => {
// 	let length = window.innerWidth;
// 	if (length > 780) {
// 		DomElements.navBar.style.transform = 'translateX(0px)';
// 		DomElements.navBar.style.width = '320px';
// 		DomElements.hamburgerMenu.style.left = 'unset';
// 		DomElements.hamburgerMenu.style.right = '10px';
// 		transformMenuToClose();
// 	}
// 	else if (length <= 780) {
// 		DomElements.navBar.style.transform = 'translateX(-320px)';
// 		DomElements.hamburgerMenu.style.right = 'unset';
// 		DomElements.hamburgerMenu.style.left = '10px';
// 		transformMenuToNormal();
// 	}
// });

function activateNavLink(id) {
  DomElements.navLinks.forEach((el) => {
    el.classList.remove('active');
  });
  DomElements.navLinks[id].classList.add('active');
}

function scrollToDiv(div) {
  if (isMobile) {
    setTimeout(() => {
      div.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 400);
  } else div.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleProjects(el) {
  for (let i = 2; i < el.length; i++) {
    el[i].classList.toggle('hidden');
  }
}

function viewMore(category) {
  let tiles = document.querySelectorAll(`.project-tile-${category}`);
  let id = category === 'web' ? 0 : 1;

  let markup = DomElements.viewMoreButton[id].innerHTML;
  if (language === 'en') {
    if (
      markup ===
      'VIEW MORE <i class="fa fa-chevron-down" aria-hidden="true"></i>'
    ) {
      markup = 'VIEW LESS <i class="fa fa-chevron-up" aria-hidden="true"></i>';
      toggleProjects(tiles);
      localStorage.setItem(`viewMoreCategory-${id}`, 1);
    } else {
      markup =
        'VIEW MORE <i class="fa fa-chevron-down" aria-hidden="true"></i>';
      toggleProjects(tiles);
      localStorage.setItem(`viewMoreCategory-${id}`, 0);
    }
  } else if (language === 'ro') {
    if (
      markup ===
      'VEZI MAI MULT <i class="fa fa-chevron-down" aria-hidden="true"></i>'
    ) {
      markup =
        'VEZI MAI PUȚIN <i class="fa fa-chevron-up" aria-hidden="true"></i>';
      toggleProjects(tiles);
      localStorage.setItem(`viewMoreCategory-${id}`, 1);
    } else {
      markup =
        'VEZI MAI MULT <i class="fa fa-chevron-down" aria-hidden="true"></i>';
      toggleProjects(tiles);
      localStorage.setItem(`viewMoreCategory-${id}`, 0);
    }
  }

  DomElements.viewMoreButton[id].innerHTML = markup;
}

function selectCategory(id) {
  DomElements.categoryButtons[id].classList.add('selected');
  DomElements.categoryButtons[(id + 1) % 2].classList.remove('selected');
}

function showCategory(id) {
  DomElements.webArea.style.display = id === 0 ? 'inherit' : 'none';
  DomElements.artArea.style.display = id === 0 ? 'none' : 'inherit';
}

DomElements.categoryButtons[0].addEventListener('click', () => {
  localStorage.setItem('category', 0);
  selectCategory(0);
  showCategory(0);
});

DomElements.categoryButtons[1].addEventListener('click', () => {
  localStorage.setItem('category', 1);
  selectCategory(1);
  showCategory(1);
});

DomElements.viewMoreButton[0].addEventListener('click', function () {
  viewMore('web');
  scrollToDiv(DomElements.projectsDiv);
});

DomElements.viewMoreButton[1].addEventListener('click', function () {
  viewMore('art');
  scrollToDiv(DomElements.projectsDiv);
});
