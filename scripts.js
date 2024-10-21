document.addEventListener('DOMContentLoaded', function() {
    const heroText = document.querySelector('.hero-text');

    function updateTextColor() {
        const rect = heroText.getBoundingClientRect();
        const middle = window.innerHeight / 2;
        const offset = rect.top + rect.height / 2 - middle;

        if (offset > 0) {
            heroText.classList.add('dynamic-color');
        } else {
            heroText.classList.remove('dynamic-color');
        }
    }

    window.addEventListener('scroll', updateTextColor);
    updateTextColor();

    // Dynamic background color change
    let hue = 0;

    function updateBackgroundColor() {
        hue = (hue + 1) % 360;
        document.body.style.background = `linear-gradient(135deg, hsl(${hue}, 50%, 20%), hsl(${hue + 180}, 50%, 80%))`;
    }

    setInterval(updateBackgroundColor, 10000); // Change color every 10 seconds
});
