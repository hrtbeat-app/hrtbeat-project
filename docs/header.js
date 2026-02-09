//totally didnt steal this from previous projects i have... nah nope idk what you mean!
document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('header-placeholder');
    fetch('header.html')
        .then(response => {
            if (!response.ok) throw new Error('Header not found');
            return response.text();
        })
        .then(data => {
            placeholder.innerHTML = data;
            const banner = placeholder.querySelector('.top-banner');
            
            if (banner) {
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 300) { 
                        banner.classList.add('visible');
                    } else {
                        banner.classList.remove('visible');
                    }
                });
            }
        })
        .catch(err => console.error('Error loading header:', err));
});