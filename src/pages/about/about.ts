import styles from '../../sass/modules/app.module.scss';
import Footer from '../../ts/Footer';
import { ArrowRightSvg } from '../../ts/svg';

export default function AboutPage(DOM: HTMLDivElement){

    DOM.innerHTML = (`
    <section class='${styles['page-header']} ${styles['about-header']}'>
    <div>
       <h2>#KnowUs</h2>
       <p>Lorem ipsum dolor sit amet,consectetur</p>
    </div>
    </section>

   <footer id='footer' class='${styles['section-p1']} ${styles.footer}'></footer>
    `)



    const footer = DOM.querySelector('#footer') as HTMLDivElement | null;
    {footer && Footer(footer)}
}