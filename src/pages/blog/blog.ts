import Footer from "../../ts/Footer";
import styles from '../../sass/modules/app.module.scss';
import { ArrowRightSvg } from "../../ts/svg";
import { BlogAPI } from "../../ts/functions/api";

export default function BlogPage(DOM: HTMLDivElement){

    DOM.innerHTML = (`
    <section class='${styles['page-header']} ${styles['blog-header']}'>
    <div>
       <h2>#readmore</h2>
       <p>Read all case studies about our products! </p>
    </div>
    </section>

    <section id='blog' class='${styles['blog-section']}'>
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


    BlogAPI(DOM);

    const footer = DOM.querySelector('#footer') as HTMLDivElement | null;
    {footer && Footer(footer)}


}