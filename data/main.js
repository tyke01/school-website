// cange navbar color when scrolling
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scoll', window.scrollY > 10);
});


// show/hide faq
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq-icon i');
        if (icon.className === 'ri-add-line'){
            icon.className= 'ri-subtract-line';
        }
        else{
            icon.className='ri-add-line';
        }
    });
});

// show/hide menu
const menu = document.querySelector('.menu')
const openBtn = document.querySelector('#menu-open')
const closeBtn = document.querySelector('#menu-close')

openBtn.addEventListener('click', ()=> {
    menu.style.display = "flex"
    closeBtn.style.display= "inline-block"
    openBtn.style.display = "none"
})
const closenav = ()=> {
    menu.style.display = "none"
    closeBtn.style.display= "none"
    openBtn.style.display = "inline-block"
}
closeBtn.addEventListener('click', closenav)