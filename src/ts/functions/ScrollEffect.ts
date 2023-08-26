import styles from '../../sass/modules/app.module.scss';

export const ScrollEffect = (DOM: HTMLDivElement) => {
        const HeroDiv = DOM.querySelector(`.${styles.herodiv}`) as HTMLDivElement | null;

        if (HeroDiv) {
            const initialHeroTop = HeroDiv.getBoundingClientRect().top;

            let isHeroHidden = false; 

            const updateHeroPosition = () => {
                const scrollY = window.scrollY || window.pageYOffset;
                if (scrollY >= initialHeroTop && !isHeroHidden) {
                    HeroDiv.style.left = '-100%'; 
                    HeroDiv.style.transition = 'left 1s ease-in-out'; 
                    HeroDiv.style.position = 'relative';
                    isHeroHidden = true;
                } else if (scrollY < initialHeroTop && isHeroHidden) {
                    HeroDiv.style.left = '0'; 
                    HeroDiv.style.transition = 'left 1s ease-in-out'; 
                    isHeroHidden = false;
                }
            };
            const handleScroll = () => {
                requestAnimationFrame(updateHeroPosition);
            };
            window.addEventListener('scroll', handleScroll);
        }
};
