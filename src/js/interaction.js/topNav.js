export const topNavInteraction = () => {
  function hideNav() {
    let scrollY = window.scrollY
    let pageHeaderHeight;

    if(document.querySelector('.page-header')){
      pageHeaderHeight = document.querySelector('.page-header').getBoundingClientRect().height;
    }else{
      pageHeaderHeight = 720;
    }
    
    if(window.pageYOffset > pageHeaderHeight){
    if (scrollY < scrollYPrev) {
      scrollingUp = true
    } else {
      scrollingUp = false
    }
    scrollYPrev = scrollY

    topNav.classList.toggle('up', scrollingUp === false)
  }
}

  let scrollingUp = null
  let scrollYPrev

  const topNav = document.querySelector('.top-navigation')
  window.addEventListener('scroll', () => {
    hideNav()
  })
}
