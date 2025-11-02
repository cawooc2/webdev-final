// Hamburger menu toggle
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Carousel functionality
function initCarousels() {
    // Get all carousel wrappers
    const carouselWrappers = document.querySelectorAll('.carousel-wrapper');
    
    carouselWrappers.forEach((wrapper, index) => {
        const carousel = wrapper.querySelector('.carousel-images');
        const prevBtn = wrapper.querySelector('.carousel-btn.prev');
        const nextBtn = wrapper.querySelector('.carousel-btn.next');
        
        console.log('Initializing carousel', index);
        console.log('Carousel:', carousel);
        console.log('Prev button:', prevBtn);
        console.log('Next button:', nextBtn);
        
        if (carousel && prevBtn && nextBtn) {
            // Remove any existing listeners
            prevBtn.replaceWith(prevBtn.cloneNode(true));
            nextBtn.replaceWith(nextBtn.cloneNode(true));
            
            // Get fresh references
            const newPrevBtn = wrapper.querySelector('.carousel-btn.prev');
            const newNextBtn = wrapper.querySelector('.carousel-btn.next');
            
            newPrevBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Prev clicked');
                carousel.scrollLeft -= 195;
            });
            
            newNextBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Next clicked');
                carousel.scrollLeft += 195;
            });
            
            // Update button visibility
            function updateButtons() {
                newPrevBtn.style.opacity = carousel.scrollLeft <= 0 ? '0.3' : '1';
                newNextBtn.style.opacity = 
                    carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth ? '0.3' : '1';
            }
            
            carousel.addEventListener('scroll', updateButtons);
            updateButtons();
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initCarousels();
});