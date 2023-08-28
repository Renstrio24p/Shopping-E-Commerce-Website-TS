import styles from '../../sass/modules/app.module.scss';
import Footer from '../../ts/Footer';
import { ArrowRightSvg } from '../../ts/svg';
import { CombinedAPI } from '../../ts/functions/api';

export default function ShoppingPage(DOM: HTMLDivElement){

    DOM.innerHTML = (`
    <section class='${styles['page-header']}'>
    <div>
       <h2>#stayhome</h2>
       <p>Save more with coupons & up to 70% off!</p>
    </div>
    </section>

    <section id='productModal' class='${styles['modal-section']}'>
        <div class='${styles['modal-content']}'></div>
    </section>

    <section id='prodetails' class='${styles['section-p1']}'>
    </section>
    
    <section id='product1' class='${styles['section-p1']} ${styles.product1}'>

           <h2>Shop more</h2>
           <p>browse the latest styles.</p>

           <div id='pro' class='${styles['pro-container']}'>
           </div>
       
           <div id='pro2' class='${styles['pro-container']}'>
           </div>
    </section>

    <section id='pagination' class='${styles.pagination} ${styles['section-p1']}'>
        <a href='#'>1</a>
        <a href='#'>2</a>
        <a href='#'>${ArrowRightSvg}</a>
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

    const ModalSection = document.getElementById('productModal') as HTMLModElement | null;

    if (ModalSection) {
        ModalSection.style.display = 'none'
    }

    const footer = DOM.querySelector('#footer') as HTMLDivElement | null;
    {footer && Footer(footer)}

   CombinedAPI(DOM);



}
