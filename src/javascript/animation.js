function animateNumber(element, start, end, duration) {
    let startTime = null;
  
    function update(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
  
      element.textContent = value + '+';
  
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
  
    requestAnimationFrame(update);
  }

  const firstH2 = document.querySelector('#info_box > div:first-child > h2');
  const lastH2 = document.querySelector('#info_box > div:last-child > h2');
  
  animateNumber(firstH2, 0, 200, 2000);
  animateNumber(lastH2, 0, 5000, 2000);

ScrollReveal().reveal('.section-title', {
    duration: 1000,
    distance: '50px',
    origin: 'left',
    reset: false,
});
ScrollReveal().reveal('.section-sub-title', {
  duration: 1000,
  distance: '50px',
  origin: 'top',
  reset: false,
  delay: 100,
});

ScrollReveal().reveal('section > div:first-child p:last-child', {
  duration: 1000,
  distance: '50px',
  origin: 'bottom',
  reset: false,
  delay: 300,
})

ScrollReveal().reveal('#about_description p:first-child', {
  duration: 1000,
  distance: '50px',
  origin: 'left',
  delay: 200,
  reset: false,
})
ScrollReveal().reveal('#about_description p:last-child', {
  duration: 1000,
  distance: '50px',
  origin: 'right',
  delay: 400,
  reset: false,
})

ScrollReveal().reveal('#about_gallery .side1 .about-img1',{
  duration: 1000,
  distance: '50px',
  origin: 'left',
  delay: 200,
  reset: false,
})


ScrollReveal().reveal('#about_gallery .side1 .about-img-circle',{
  duration: 1000,
  distance: '50px',
  origin: 'top',
  delay: 200,
  reset: false,
})

ScrollReveal().reveal('#about_gallery .side2 .about-img1',{
  duration: 1000,
  distance: '50px',
  origin: 'right',
  delay: 200,
  reset: false,
})

ScrollReveal().reveal('#about_gallery .side2 .about-img2',{
  duration: 1000,
  distance: '50px',
  origin: 'bottom',
  delay: 200,
  reset: false,
})
ScrollReveal().reveal('.content-services .service-card:first-child',{
    duration: 1000, 
    opacity: 0,    
    distance: '0px', 
    reset: false,
})

ScrollReveal().reveal('.content-services .service-card:nth-child(2)',{
  duration: 1000, 
  opacity: 0,    
  distance: '0px', 
  reset: false,
  delay: 50,
})
ScrollReveal().reveal('.content-services .service-card:nth-child(3)',{
  duration: 1000, 
  opacity: 0,    
  distance: '0px', 
  reset: false,
  delay: 100,
})
ScrollReveal().reveal('.content-services .service-card:nth-child(4)',{
  duration: 1000, 
  opacity: 0,    
  distance: '0px', 
  reset: false,
  delay: 150,
})

ScrollReveal().reveal('#servicos .cat-image',{
  duration: 1000,
  distance: '50px',
  origin: 'right',
  reset: false,
})

ScrollReveal().reveal('#servicos .paw-image', {
  duration: 800,
  scale: 0.5,
  opacity: 0,
  easing: 'ease-in-out',
  reset: false
});

ScrollReveal().reveal('.under-services-content',{
  duration: 1000, 
  opacity: 0,    
  distance: '0px', 
  reset: false,
  delay: 150,
})

ScrollReveal().reveal('.under-produtos-content',{
  duration: 1000, 
  opacity: 0,    
  distance: '0px', 
  reset: false,
})

ScrollReveal().reveal('#contato .contato-form',{
  duration: 1000,
  distance: '50px',
  origin: 'left',
  delay: 100,
  reset: false,
})

ScrollReveal().reveal('#contato .contato-side-container',{
  duration: 1000,
  distance: '50px',
  origin: 'right',
  delay: 200,
  reset: false,
})

ScrollReveal().reveal('#contato .img-contato',{
  duration: 800,
  scale: 0.5,
  opacity: 0,
  easing: 'ease-in-out',
  reset: false
})

ScrollReveal().reveal('#contato .mapa',{
  duration: 1000, 
  opacity: 0,    
  distance: '0px', 
  reset: false,
})

ScrollReveal().reveal('footer img:first-child',{
  duration: 800,
  origin: 'top',
  distance:'50px',
  reset: false,
  delay:200
})
ScrollReveal().reveal('footer img:nth-child(2)',{
  duration: 800,
  origin: 'left',
  distance:'50px',
  reset: false,
  delay:200
})

ScrollReveal().reveal('.footer-info',{
  duration: 500,
  distance: '50px',
  reset: false,
})










