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
