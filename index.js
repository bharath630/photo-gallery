
    const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('.slider img');
    const prevArrow = document.querySelector('.pre');
    const nextArrow = document.querySelector('.next');
    const displayImg = document.querySelector('.display-img');

    images.forEach(img => {
      img.addEventListener('click', () => {
        displayImg.src = img.src;
        displayImg.style.display = "block";
      });
    });
    displayImg.addEventListener('click', () => {
      displayImg.style.display = "none";
    });
    prevArrow.addEventListener('click', () => {
      slider.scrollLeft -= slider.offsetWidth;
    });
    nextArrow.addEventListener('click', () => {
      slider.scrollLeft += slider.offsetWidth;
    });

//...........................
    