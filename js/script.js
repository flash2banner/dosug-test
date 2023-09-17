//

// const menu = document.querySelector('.nav')
// const menuBtn = document.querySelector('.burger')

// if (menu && menuBtn) {
//     menuBtn.addEventListener('click', () => {
//         menu.classList.toggle('active')
//         menuBtn.classList.toggle('active')
//     } )
// }

// header transformation

const header = document.querySelector(".header");
const body = document.querySelector("body");

window.onscroll = function () {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    header.classList.add("active");
    body.classList.add("active");
    // let headerHeight = header.getBoundingClientRect().height
    // body.style = 'padding-top:' + headerHeight + 'px;'
  } else {
    header.classList.remove("active");
    body.classList.remove("active");
    // body.style = 'padding-top: 0;'
  }
};

// top menu slider

const swiper = new Swiper(".top-menu__items", {
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
  breakpoints: {
    741: {
      spaceBetween: 45,
    },
    1231: {
      spaceBetween: 75,
    },
  },
});

// show more
// html elements other than <strong></strong> and <b></b> should be placed outside the visible shortened element

if (window.matchMedia("(max-width: 480px)").matches) {
  new ShowMore(".intro-article__content", {
    config: {
      type: "text",
      limit: 150,
      after: 50,
      more: "Подробнее",
    },
  });
} else if (window.matchMedia("(max-width: 740px)").matches) {
  new ShowMore(".intro-article__content", {
    config: {
      type: "text",
      limit: 250,
      after: 50,
      more: "Подробнее",
    },
  });
} else if (window.matchMedia("(max-width: 900px)").matches) {
  new ShowMore(".intro-article__content", {
    config: {
      type: "text",
      limit: 350,
      after: 50,
      more: "Подробнее",
    },
  });
}

// show phone

const showPhoneBtns = document.querySelectorAll(".catalog-item__show-phone");

for (let showPhoneBtn of showPhoneBtns) {
  showPhoneBtn.addEventListener("click", () => {
    showPhoneBtn.parentNode.classList.add("active");
  });
}

// favorite btn

const catalogItemFavoriteBtns = document.querySelectorAll(
  ".catalog-item__favorite-btn"
);

for (let catalogItemFavoriteBtn of catalogItemFavoriteBtns) {
  catalogItemFavoriteBtn.addEventListener("click", () => {
    catalogItemFavoriteBtn.classList.toggle("active");
  });
}
