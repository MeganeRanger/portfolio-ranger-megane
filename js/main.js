/* Tous les logiciels sont affichés statiquement */

// Menu Hamburger - Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const nav = document.getElementById('nav');
    
    if (menuBtn && nav) {
        // Toggle menu on button click
        menuBtn.addEventListener('click', function() {
            menuBtn.classList.toggle('active');
            nav.classList.toggle('mobile-open');
        });
        
        // Close menu when a link is clicked
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuBtn.classList.remove('active');
                nav.classList.remove('mobile-open');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = nav.contains(event.target);
            const isClickInsideBtn = menuBtn.contains(event.target);
            
            if (!isClickInsideNav && !isClickInsideBtn && nav.classList.contains('mobile-open')) {
                menuBtn.classList.remove('active');
                nav.classList.remove('mobile-open');
            }
        });
        
        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (window.innerWidth > 640) {
                    menuBtn.classList.remove('active');
                    nav.classList.remove('mobile-open');
                }
            }, 250);
        });
    }
});
