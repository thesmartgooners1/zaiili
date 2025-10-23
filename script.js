/* Home Swiper */

var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
});

/* Services Tab */

const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContent.forEach(tabContents => {
            tabContents.classList.remove('services-active');
        })

        target.classList.add('services-active');

        tabs.forEach(tab => {
            tab.classList.remove('services-active');
        })

        tab.classList.add('services-active');
    })
})

/* Scroll Header */

function scrollHeader() {
    const header = document.getElementById('header');

    if(this.scrollY >= 50) {
        header.classList.add('scroll-header');
    }else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/* Mobile Menu */

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/* Removing Menu Mobile by clicking */

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* Lightbox Gallery */

const portfolioItems = document.querySelectorAll('.work-content');
const totalPorfolioItem = portfolioItems.length;
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCounter = document.querySelector('.caption-counter');
const lightboxClose = document.querySelector('.lightbox-close');

for(let i = 0; i < totalPorfolioItem; i++) {
    portfolioItems[i].addEventListener('click', function() {
        itemIndex = i;
        changeItem();
        toggleLightbox();
    })
}

function nextItem() {
    if(itemIndex === totalPorfolioItem - 1) {
        itemIndex = 0;
    }else {
        itemIndex++;
    }

    changeItem();
}

function prevItem() {
    if(itemIndex === 0) {
        itemIndex = totalPorfolioItem - 1;
    }else {
        itemIndex--;
    }

    changeItem();
}

function toggleLightbox() {
    lightbox.classList.toggle('open');
}

function changeItem() {
    imgSrc = portfolioItems[itemIndex].querySelector('.work-content img').getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalPorfolioItem;
}

lightbox.addEventListener('click', function(event) {
    if(event.target === lightboxClose || event.target === lightbox) {
        toggleLightbox();
    }
})

/* Changing Active Links while scrolling */
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 10;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
