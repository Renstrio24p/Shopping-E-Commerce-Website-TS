import styles from '../sass/modules/app.module.scss';
import { MenuBarSvg, MenuBarXSvg, ShopSvg } from './svg';

export default function Navbar(DOM : HTMLDivElement){

    DOM.innerHTML = (`
        <div>
            <img src='logo.webp' alt='logo'>
        </div>
        <ul id='collapse'>
            <li id='menu' class='${styles.menu}'>${MenuBarXSvg}</li>
            <li id='home' class='${styles.home} ${styles.active}'>Home</li>
            <li id='shop' class='${styles.shop}'>Shop</li>
            <li id='blog' class='${styles.blog}'>Blog</li>
            <li id='about' class='${styles.about}'>About</li>
            <li id='contact' class='${styles.contact}'>Contact</li>
            <li id='cart' class='${styles.cart}'>${ShopSvg}</li>
        </ul>
        <div id='mobile' class='${styles.mobile}'>
            <i id='cart2'>${ShopSvg}</i>
            <i id='menu-bar'>${MenuBarSvg}</i>
        </div>
    `)

    document.addEventListener('DOMContentLoaded', () => {
        const MenuBar = document.querySelector('#menu-bar') as HTMLButtonElement | null;
        const NavList = document.querySelector('#collapse') as HTMLUListElement | null;
        const NavItems = NavList?.querySelectorAll('li') || [];
      
        if (MenuBar && NavList) {
          // Toggle the menu when MenuBar is clicked
          MenuBar.addEventListener('click', () => {
            NavList.classList.toggle(styles.show);
          });
      
          // Close the menu when clicking anywhere outside
          document.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            if (!NavList.contains(target) && !MenuBar.contains(target)) {
              NavList.classList.remove(styles.show);
            }
          });
      
          // Close the menu when clicking on a list item
          NavItems.forEach((item) => {
            item.addEventListener('click', () => {
              NavList.classList.remove(styles.show);
            });
          });
      
          // Close the menu when clicking anywhere on the NavList
          NavList.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            if (!MenuBar.contains(target)) {
              NavList.classList.remove(styles.show);
            }
          });
        }
      });
}