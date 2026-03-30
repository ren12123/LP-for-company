document.addEventListener('DOMContentLoaded', () => {
    // 修正済み：BEMクラス名 contact__btn を取得
    const formBtn = document.querySelector('.contact__btn');
    
    // スクロール先のターゲット（header）
    const targetHeader = document.querySelector('.header');

    if (formBtn && targetHeader) {
        formBtn.addEventListener('click', () => {
            targetHeader.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
});