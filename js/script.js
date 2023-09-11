// 

// const menu = document.querySelector('.nav')
// const menuBtn = document.querySelector('.burger')

// if (menu && menuBtn) {
//     menuBtn.addEventListener('click', () => {
//         menu.classList.toggle('active')
//         menuBtn.classList.toggle('active')
//     } )
// }

//

const header = document.querySelector('.header')
const body = document.querySelector('body')

window.onscroll = function() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10)  {
    header.classList.add('active')
    body.classList.add('active')
    // let headerHeight = header.getBoundingClientRect().height
    // body.style = 'padding-top:' + headerHeight + 'px;'
  } else {
    header.classList.remove('active')
    body.classList.remove('active')
    // body.style = 'padding-top: 0;'
  }
}


// 

const swiper = new Swiper('.top-menu__items', {    
    slidesPerView: 'auto',
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




