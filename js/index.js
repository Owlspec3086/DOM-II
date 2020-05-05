// Your code goes here
//Flex redid whole MVP GOALS again.

//////////////////////////////////////////////////////Change image to a different image with click///////////////////////////
const changeImg = document.querySelector('img');
changeImg.addEventListener("click", () => {
  if (changeImg.src != "/img/fun-bus.png"){
    changeImg.src = "/img/fun-bus.png";
  }
})

//////////////////////////////////////////////////////////////////change image back with double click//////////////////////////
changeImg.addEventListener("dblclick", () => {
  if (changeImg.src != "/img/fun-bus.jpg"){
    changeImg.src = "/img/fun-bus.jpg";
  }
});

//////////////////////////////////////////////////////////////////// change anchor tag color on mouse-hover////////////////////////////////////////
let hover = document.querySelector('.nav');
hover.addEventListener('mouseover', (event) => {
  event.target.style.color = 'orange';
  

/////////////////////////////////////////////////////////////////// reset the color after a short delay //////////////////////////////////////////
  setTimeout(function() {
    event.target.style.color = "";
  }, 1000);
}, false);

///////////////////////////////////////////////////////////// IMG resizing ///////////////////////////////////////////////////////////////////
const images = document.querySelector('#blow-bus')

window.addEventListener('resize', () => {
  images.src ="/img/blown-bus.jpg";
})

//////////////////////////////////////////////////////////// change to dark mode with keydown /////////////////////////////////////////////////
const background = document.querySelector('*');
const header = document.querySelector('.main-navigation')
const footer = document.querySelector('.footer')
document.addEventListener('keydown', (event) => {
  if(background.style.backgroundColor != 'black'){
    background.style.backgroundColor = 'black';
    background.style.color = 'whitesmoke';
    header.style.backgroundColor = 'black';
    header.style.color = 'whitesmoke';
    footer.style.backgroundColor = 'black';
    footer.style.color = 'whitesmoke';
  }
})

/////////////////////////////////////////////////////////// change back to light mode with keypress Spacebar/////////////////////////////////////
document.addEventListener('keypress', (event) => {
  if(background.style.backgroundColor != 'white'){
    background.style.backgroundColor = 'white';
    background.style.color = 'black';
    header.style.backgroundColor = 'white';
    header.style.color = 'black';
    footer.style.backgroundColor = 'white';
    footer.style.color = 'black';
  }
})

///////////////////////////////////////////////////////////// change text color when mouse pressed down ///////////////////////////////////////////
const changeText = document.querySelectorAll('p');
document.addEventListener('mousedown', (event) => {
  changeText.forEach(item => item.style.color = 'red')
})

////////////////////////////////////////////////////////////// change text color back with mouseup ///////////////////////////////////////////////
document.addEventListener('mouseup', (event) => {
  changeText.forEach(item => item.style.color = 'black')
})

//////////////////////////////////////////////////////////////// scroll ////////////////////////////////////////////////////////////////////
window.addEventListener('scroll', (event) => {
  background.style.backgroundColor = 'red';
  header.style.backgroundColor = 'dodgerblue';
  footer.style.backgroundColor = 'rebeccapurple'
})

////////////////////////////////////////////////////////////////////////// flip cards with gsap ///////////////////////////////////////////////////////
const introsec = document.querySelector('.intro').addEventListener("contextmenu", (event) => {
  gsap.to('.intro', {
       duration: 1,
       rotateY: 180,
       ease: "elastic(1, 0.75)"
       

      })
      event.stopPropagation();
  })//5
  
const allimg = document.querySelectorAll("img").forEach(el => {
el.addEventListener("dblclick", () => {
  gsap.to(el, {
   duration: 1,
   rotateX: 180,
   ease: "elastic(1, 0.75)"
  })
})
})

////////////////////////////////////////////////////////////////////// prevent default /////////////////////////////////////////////////////////////
const prevent = document.querySelectorAll('a').forEach(el => {
  eladdEventListener('click', () => {
    event.preventDefault();
  })
})