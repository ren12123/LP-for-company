document.addEventListener('DOMContentLoaded', () => {
    const formBtn = document.querySelector('.move_btn');
    const contact_head = document.querySelector('.header');

    formBtn.addEventListener('click', () => {
            contact_head.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
    });
});
