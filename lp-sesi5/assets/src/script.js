window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav')
    const footer = document.querySelector('footer')

    if(window.scrollY > 0){
        nav.classList.add('sc')
        footer.classList.add('ft')
    }else{
        nav.classList.remove('sc')
        footer.classList.remove('ft')
    }
})

function navTo(id){
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}
const cards = document.querySelectorAll("#s2, .card")

const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add("visible")
                }, index * 500);
            })
        }else{
            cards.forEach((card) =>{
                card.classList.remove("visible")
            })
        }
    })

}, {threshold: 0.2});
observer.observe(document.querySelector("#s2"))

// Lazy-load YouTube iframe when thumbnail is clicked (section s3)
document.addEventListener('DOMContentLoaded', () => {
    const thumbs = document.querySelectorAll('.video-thumb');
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            const src = thumb.dataset.src;
            if(!src) return;
            const iframe = document.createElement('iframe');
            iframe.setAttribute('width', '100%');
            iframe.setAttribute('height', '450');
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
            iframe.setAttribute('allowfullscreen', '');
            iframe.setAttribute('src', src + (src.includes('?') ? '&' : '?') + 'autoplay=1');
            thumb.replaceWith(iframe);
        });
    });
});