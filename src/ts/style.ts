document.addEventListener('DOMContentLoaded', () => {
    // 修正済み：BEMクラス名 contact__btn を取得
    const formBtn = document.querySelector('.contact__btn') as HTMLAnchorElement | null;
    
    // スクロール先のターゲット（header）
    const targetHeader = document.querySelector('.header') as HTMLElement | null; 

    if (formBtn && targetHeader) {
        formBtn.addEventListener('click', (event: MouseEvent) => {
            targetHeader.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
});