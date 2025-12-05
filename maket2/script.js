
const burger = document.getElementById('tree');
const menu = document.getElementById('menu');
burger.addEventListener('click', function() {
    this.classList.toggle('active');
    menu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // Функция для перехода к определенному слайду
    function goToSlide(slideIndex) {
        if (slideIndex < 0) {
            slideIndex = slideCount - 1;
        } else if (slideIndex >= slideCount) {
            slideIndex = 0;
        }
        
        sliderWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
        currentSlide = slideIndex;
        
        // Обновление активной точки
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Обработчики для стрелок
    prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });
    
    // Обработчики для точек
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            goToSlide(slideIndex);
        });
    });
    
    // Автопереключение слайдов (опционально)
    let slideInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);
    
    // Остановка автопереключения при наведении
    sliderWrapper.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    // Возобновление автопереключения при уходе курсора
    sliderWrapper.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);
    });

const modal = document.querySelector('#modal');
const btn = document.querySelector('.btn1');
const close = document.querySelector('.close');

btn.onclick = function() {
  modal.style.display = 'block';
};

close.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
});

