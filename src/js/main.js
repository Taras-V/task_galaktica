document.addEventListener('DOMContentLoaded', function() {
    const titleLine = document.querySelectorAll(
    '.chose__title-line, .chose__title-line1, .intro__title-line, .about__title, .service__title, .partners__title'
    );
    
    function checkVisibility() {
        titleLine.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                element.classList.add(element.className.split(' ')[0] + '_visible');
            } else {
                element.classList.remove(element.className.split(' ')[0] + '_visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});
