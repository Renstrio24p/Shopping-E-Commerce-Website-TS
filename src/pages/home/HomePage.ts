import styles from '../../sass/modules/app.module.scss';
import Footer from '../../ts/Footer';
import { ScrollEffect } from '../../ts/functions/ScrollEffect';
import { Banner3API, BannerSMAPI, FeatureAPI, NewArrivalAPI, ProductAPI } from './components/api';

export default function HomePage(DOM: HTMLDivElement){

    DOM.innerHTML = (`
         <section class='${styles.hero}'>
         <div class='${styles.herodiv}'>
            <h4>Trade-in-offer</h4>
            <h2>Super value deals</h2>
            <h1>On all products</h1>
            <p>Save more with coupons & up to 70% off!</p>
            <button>Shop Now</button>
         </div>
         </section>
         
         <section id='features' class='${styles.feature} ${styles['section-p1']}'>
         </section>

         <section id='product1' class='${styles['section-p1']} ${styles.product1}'>
                <h2>Featured Products</h2>
                <p>Summer Collection New Morden Design</p>
                <div id='pro' class='${styles['pro-container']}'>
                </div>
         </section>

         <section id='banner' class='${styles.banner} ${styles['section-m1']}'>
            <h4>Repair Services</h4>
            <h2>Up to <span>70% Off</span> - All t-Shirts & Accessories</h2>
            <button class='${styles.normal}'>Explore More</button>
         </section>

         <section id='product2' class='${styles['section-p1']} ${styles.product2}'>
                <h2>New Arrivals</h2>
                <p>Summer Collection New Morden Design</p>
                <div id='pro2' class='${styles['pro-container']}'>
                </div>
         </section>

         <section id='sm-banner' class='${styles['sm-banner']} ${styles['pro']}'>
         </section>

         <section id='banner3' class='${styles.banner3}'>
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

    const Foot = document.getElementById('footer') as HTMLDivElement | null;
    {Foot && Footer(Foot)}

    // Function

    ScrollEffect(DOM);

    // API's
    FeatureAPI(DOM);
    ProductAPI(DOM);
    NewArrivalAPI(DOM);
    BannerSMAPI(DOM);
    Banner3API(DOM);
}