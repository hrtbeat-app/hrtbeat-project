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

async function displayMarkdown() {
    const target = document.getElementById('markdown-content');
    
    try {
        const response = await fetch('main.md'); 
        if (!response.ok) throw new Error('Failed to load markdown');
        
        const text = await response.text();
        
        target.innerHTML = marked.parse(text);
    } catch (error) {
        target.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}
displayMarkdown();