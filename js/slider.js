// Slider functionality
document.addEventListener('DOMContentLoaded', function() {
    initSlider();
});

function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (!slides.length || !dots.length || !prevBtn || !nextBtn) return;

    console.log('Slider initialized with', slides.length, 'slides'); // Debug log

    let currentSlide = 0;
    let slideInterval;

    // Start automatic slideshow
    startSlideshow();

    // Add event listeners for controls
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Add event listeners for dots
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            goToSlide(slideIndex);
        });
    });

    // Pause slideshow on hover
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', pauseSlideshow);
    sliderContainer.addEventListener('mouseleave', startSlideshow);

    // Functions
    function startSlideshow() {
        // Clear any existing interval
        if (slideInterval) {
            clearInterval(slideInterval);
        }

        // Start new interval
        slideInterval = setInterval(function() {
            console.log('Auto-changing slide...'); // Debug log
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        console.log('Automatic slideshow started'); // Debug log
    }

    function pauseSlideshow() {
        clearInterval(slideInterval);
        console.log('Automatic slideshow paused'); // Debug log
    }

    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }

    function prevSlide() {
        goToSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    function goToSlide(slideIndex) {
        // Validate slide index
        if (slideIndex < 0 || slideIndex >= slides.length) {
            console.error('Invalid slide index:', slideIndex);
            return;
        }

        console.log('Changing to slide', slideIndex); // Debug log

        // Remove active class from current slide and dot
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        // Update current slide index
        currentSlide = slideIndex;

        // Add active class to new slide and dot
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');

        // Reset the timer when manually changing slides
        if (slideInterval) {
            clearInterval(slideInterval);
            startSlideshow();
        }
    }
}
