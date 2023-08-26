import styles from '../sass/modules/app.module.scss';
import { ShopSvg } from './svg';

export default function Navbar(DOM : HTMLDivElement){

    DOM.innerHTML = (`
        <div>
            <img src='logo.png' alt='logo'>
        </div>
        <ul>
            <li id='home' class='${styles.home} ${styles.active}'>Home</li>
            <li id='shop' class='${styles.shop}'>Shop</li>
            <li id='blog' class='${styles.blog}'>Blog</li>
            <li id='about' class='${styles.about}'>About</li>
            <li id='contact' class='${styles.contact}'>Contact</li>
            <li>${ShopSvg}</li>
        </ul>
    `)

}