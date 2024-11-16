document.querySelectorAll('a[href^="#"]') .forEach(anchor =>{
    anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(tjis.getAttribute('href')).scrollintoView({
        behavior: 'smooth'
    });
  });
});