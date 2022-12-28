
const nav = document.querySelector('nav');
const header = document.querySelector('section');

const options = {
        rootMargin: '-12%'
}

const observer = new IntersectionObserver( entries => {
        entries.forEach(entry => {
                if (entry.isIntersecting) {
                        nav.classList.remove('changeColor');
                } else {
                        nav.classList.add('changeColor');
                }
        })
}, options)

observer.observe(header)
