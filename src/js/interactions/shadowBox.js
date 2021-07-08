function imageModal(e){

  let imageReference = e.target.getAttribute('src');
  let modal = document.createElement('con-shadow-box');
  let img = document.createElement('img');
  img.setAttribute('src',`${imageReference}`);
  modal.appendChild(img);
        if(e.target.parentNode.className.includes('white-matte')){
          img.classList.add('white-matte');
        }
  // modal.appendChild(figCaption);
  document.querySelector('body').appendChild(modal);
 document.querySelector('main').classList.add('body-filter');
  modal.addEventListener('click', () => {
    let delay = parseFloat(window.getComputedStyle(modal).animationDuration) * 1000;
    modal.style.opacity = '0';
   document.querySelector('main').classList.remove('body-filter');
    setTimeout(()=>{
      document.querySelector('body').removeChild(modal);
      modal = null;
    },delay);//additional delay to prevent flashing
  });
}
export const shadowBox = () => {

let images = document.querySelectorAll('#shadowBox');
images.forEach(image => {
    image.addEventListener('click', (e) => imageModal(e))
  });
  
}