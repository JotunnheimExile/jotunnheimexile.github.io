// Reveal on scroll
document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        reveals.forEach(reveal => {
            const boxTop = reveal.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                reveal.classList.add('active');
            } else {
                reveal.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load
});


document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length; // loop back to 0
            showSlide(currentSlide);
        }

        setInterval(nextSlide, 4000); // slide every 4 seconds
    }
});

function flip(button) {
    const container = button.closest('.piece-container');
    container.classList.toggle('flipped');
}
