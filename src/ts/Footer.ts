import styles from '../sass/modules/app.module.scss';
import { FacebookSvg, InstagramSvg, PinterestSvg, TwitterSvg, YoutubeSvg } from './svg';

export default function Footer(DOM: HTMLDivElement){

    DOM.innerHTML = (`
    <div class='${styles.content}'>
        <div class='${styles.col}'>
            <img class='${styles.logo}' src='logo.png' alt='cara logo'>
            <h4>Contact</h4>
            <p><strong>Address : </strong> 123 Something Road, Di-Makita Street, Walang  Forever Ave, Philippines</p>
            <p><strong>Phone : </strong> (08) 1231 432 / (+63)9 123456769</p>
            <p><strong>Hours : </strong> 10:00AM - 9:00PM, Mon - Sun</p>
            <div class='${styles.follow}'>
                <h4>Follow Us</h4>
                <div class='${styles.icons}'>
                    <i class='${styles.facebook}'>${FacebookSvg}</i>
                    <i class='${styles.twitter}'>${TwitterSvg}</i>
                    <i class='${styles.instagram}'>${InstagramSvg}</i>
                    <i class='${styles.pinterest}'>${PinterestSvg}</i>
                    <i class='${styles.youtube}'>${YoutubeSvg}</i>
                </div>
            </div>
        </div>

        <div class='${styles.col}'>
            <h4>About</h4>
            <ul>
                <li><a href='#'>About us</a></li>
                <li><a href='#'>Delivery Information</a></li>
                <li><a href='#'>Privacy Policy</a></li>
                <li><a href='#'>Terms & Conditions</a></li>
                <li><a href='#'>Contact us</a></li>
            <ul>
        </div>

        <div class='${styles.col}'>
            <h4>My Account</h4>
            <ul>
                <li><a href='#'>Sign In</a></li>
                <li><a href='#'>View Cart</a></li>
                <li><a href='#'>My Wishlist</a></li>
                <li><a href='#'>Track My Order</a></li>
                <li><a href='#'>Help</a></li>
            <ul>
        </div>

        <div class='${styles.col} ${styles.install}'>
            <h4>Install App</h4>
            <div class='${styles.row}'>
                <img src='pay/app.jpg' alt='appstore'>
                <img src='pay/play.jpg' alt='playstore'>
            </div>
            <p>Secured Payment Gateways</p>
            <img src='pay/pay.png' alt='cards'>
        </div>
    </div>
        <div class='${styles.Copyright}'>
            <p>&copy; 2023 Renstrio24 - Typescript Ecommerce Template.</p>
        </div>
    `)

}