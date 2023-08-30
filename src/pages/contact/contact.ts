import Footer from "../../ts/Footer";
import styles from '../../sass/modules/app.module.scss';
import { ClockSvg, EnvelopeSvg, MapSvg, MenuBarSvg, PhoneSvg } from "../../ts/svg";
import { PoepleAPI } from "../../ts/functions/api";


export default function ContactPage(DOM: HTMLDivElement){

    DOM.innerHTML = (`
    <section class='${styles['page-header']} ${styles['about-header']}'>
    <div>
       <h2>#let's_talk</h2>
       <p>LEAVE A MESSAGE,We've love to hear from you!.</p>
    </div>
    </section>

    <section id='contact-details' class='${styles['contact-details']} ${styles['section-p1']}'>
        <div class='${styles.details}'>
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agencies location or contact with us today.</h2>
            <h3>Head Office</h3>
            <ul>
                <li>
                    ${MapSvg}
                    <p>56 Glassford Street Glassgow G1 1UL New York.</p>
                </li>
                <li>
                    ${EnvelopeSvg}
                    <p>contact@example.com</p>
                </li>
                <li>
                    ${PhoneSvg}
                    <p>+1 (123) 123 123</p>
                </li>
                <li>
                    ${ClockSvg}
                    <p>Monday to Saturday: 9:00am to 6:00pm</p>
                </li>
            </ul>
        </div>
        <div class='${styles.map}'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.83368114295!2d-1.2576186241605591!3d51.754364792632806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sfil!2sph!4v1693416713263!5m2!1sfil!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>

    <section id='form-details' class='${styles['form-details']} ${styles['section-p1']}'>
        <form action='#'>
            <span>LEAVE US A MESSAGE</span>
            <h2>We've love to hear it from you.</h2>
            <input type='text' placeholder='Your Name'>
            <input type='email' placeholder='E-mail'>
            <input type='text' placeholder='Subject'>
            <textarea 
                name='' 
                id='' 
                cols='30' 
                row='15'
                placeholder='Your Message'
            ></textarea>
            <button>Submit</button>
        </form>

        <div id='people' class='${styles.people}'></div>
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

    PoepleAPI(DOM);

    const footer = DOM.querySelector('#footer') as HTMLDivElement | null;
    {footer && Footer(footer)}

}