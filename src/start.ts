import styles from './sass/modules/app.module.scss';
import Render from "./render/render";


export default function Start(start: HTMLElement): void {
    start.innerHTML = (`
        <nav id='navbar' class='${styles.navbar}'></nav>
        <main id='routes'></main>
    `)

    Render(start);
  }
  
