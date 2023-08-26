import AboutPage from "../pages/about/about";
import BlogPage from "../pages/blog/blog";
import ContactPage from "../pages/contact/contact";
import HomePage from "../pages/home/HomePage";
import ShoppingPage from "../pages/shopping/Shopping";
import styles from '../sass/modules/app.module.scss';

export const MainRoute = (DOM: HTMLElement) => {
    const Route = DOM.querySelector('#routes') as HTMLDivElement | null;

    const Home = DOM.querySelector('#home') as HTMLUListElement | null,
        Shop = DOM.querySelector('#shop') as HTMLUListElement | null,
        Blog = DOM.querySelector('#blog') as HTMLUListElement | null,
        About = DOM.querySelector('#about') as HTMLUListElement | null,
        Contact = DOM.querySelector('#contact') as HTMLUListElement | null;

    { Route && HomePage(Route as HTMLDivElement) } // HomePage By Default

    const switchRoute = (pageFunction: (Route: HTMLDivElement) => void) => {
        if (Route) {
            Route.classList.add(styles['transition-page']);

            setTimeout(() => {
                clearInterval(loadingInterval);
                pageFunction(Route as HTMLDivElement);
                Route.classList.remove(styles['transition-page']);
            }, 3000);

            const loadingInterval = setInterval(() => {
                const loadingText = 'Loading' + Array.from({ length: 9 }, (_, i) => i < ((Date.now() / 300) % 4) ? '.' : '').join('');
                Route.innerHTML = `<p>${loadingText}</p>`;
            }, 200);


        }
    };


    // ES Modular Routing Typescript

    const menuItems = [Home, Shop, Blog, About, Contact];

    menuItems.forEach(item => {
        if (item) {
            item.addEventListener('click', () => {
                const pages = [HomePage, ShoppingPage, BlogPage, AboutPage, ContactPage];
                const activeIndex = menuItems.indexOf(item);

                switchRoute(pages[activeIndex]);

                menuItems.forEach(menuItem => {
                    if (menuItem) {
                        menuItem.classList.toggle(styles.active, menuItem === item);
                    }
                });
            });
        }
    });

};
