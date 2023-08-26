import styles from '../sass/modules/app.module.scss';

export default function Footer(DOM: HTMLDivElement){

    DOM.innerHTML = (`
        <div class='${styles.col}'>
            <img src='logo.png' alt='cara logo'>
            <h4>Contact</h4>
            <p><strong>Address : </strong> 123 Something Road, Di-Makita Street, Walang  Forever Ave, Philippines</p>
            <p><strong>Phone : </strong> (08) 1231 432 / (+63)9 123456769</p>
            <p><strong>Hours : </strong> 10:00AM - 9:00PM, Mon - Sun</p>
        </div>
    `)

}