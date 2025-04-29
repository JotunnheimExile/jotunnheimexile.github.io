document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll(".reveal");

    const options = {
        threshhold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
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
