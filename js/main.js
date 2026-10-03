const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');

// open/close when the hamburger is clicked
toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
});

// close menu after tapping link
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
    });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);             
    }
  });
}, { threshold: 0.15 });                            

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));