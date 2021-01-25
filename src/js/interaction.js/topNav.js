export const topNavInteraction = () => {
function hideNav(){
let scrollY = window.scrollY
if (scrollY < scrollYPrev) {
  scrollingUp = true
} else {
  scrollingUp = false
}
scrollYPrev = scrollY

topNav.classList.toggle('up', scrollingUp === false);
}

let scrollingUp = null
let scrollYPrev

const topNav = document.querySelector('.top-navigation');
window.addEventListener('scroll', () => {
hideNav()
});
};
