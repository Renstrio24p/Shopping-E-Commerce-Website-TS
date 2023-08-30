import styles from '../../sass/modules/app.module.scss';
import Footer from '../../ts/Footer';
import { FeatureAPI } from '../../ts/functions/api';
import { ArrowRightSvg } from '../../ts/svg';

export default function AboutPage(DOM: HTMLDivElement){

    DOM.innerHTML = (`
    <section class='${styles['page-header']} ${styles['about-header']}'>
    <div>
       <h2>#KnowUs</h2>
       <p>Lorem ipsum dolor sit amet,consectetur</p>
    </div>
    </section>

    <section id='about-head' class='${styles['section-p1']} ${styles['about-head']}'>
        <img src='about/a6.jpg' alt='about img'>
        <div class='${styles.div}'>
            <h2>Who We Are?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>

            <abbr title='this'>Create stunning images with as much
                or as little control as you like thanks to a choice of
                basics and Creative modes.</abbr>
            <div class='${styles['marquee-container']}'>
                <div class='${styles['marquee']}'>
                    <p>Create stunning images with as much or as little control as you like, thanks to a choice of basic and Creativity.</p>
                </div>
            </div>
        </div>
    </section>

    <section id='about-app' class='${styles['about-app']} ${styles['section-p1']}'>
        <h1>Download Our <a href='#'>App</a></h1>
        <div class='${styles.video}'>
            <video controls autoplay muted src='videos/1.mp4' type='video/mp4'>
            </video>
        </div>
    </section>

    <section id='features' class='${styles.feature} ${styles['section-p1']}'>
    </section>

    <section id='newsletter' class='${styles['news-letter']} ${styles['section-p1']} ${styles['section-m1']}'>
        <div>
            <h4>Sign Up For Newsletters</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers</span></p>
        </div>
            <div>
            <form>
                <input type='text' placeholder='Your email address'>
                <button class='${styles.normal}'>Submit</button>
            </form>
        </div>
    </section>

   <footer id='footer' class='${styles['section-p1']} ${styles.footer}'></footer>
    `)

    FeatureAPI(DOM);

    const footer = DOM.querySelector('#footer') as HTMLDivElement | null;
    {footer && Footer(footer)}
}