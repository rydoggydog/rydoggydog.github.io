document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.title');
    const tagline = document.querySelector('.tagline');
    const badge = document.querySelector('.coming-soon-badge');

    tagline.style.opacity = '0';
    badge.style.opacity = '0';

    setTimeout(() => {
        tagline.style.transition = 'opacity 1s ease, transform 1s ease';
        tagline.style.opacity = '0.95';
    }, 600);

    setTimeout(() => {
        badge.style.transition = 'opacity 1s ease, transform 1s ease';
        badge.style.opacity = '1';
    }, 1000);

    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;

        const content = document.querySelector('.content');
        content.style.transform = `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
    });
});
