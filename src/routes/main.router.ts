import AboutPage from "../pages/about/about";
import BlogPage from "../pages/blog/blog";
import ContactPage from "../pages/contact/contact";
import HomePage from "../pages/home/HomePage";
import CartPage from "../pages/shopping/components/Cart";
import ShoppingPage from "../pages/shopping/Shopping";
import styles from '../sass/modules/app.module.scss';

export const MainRoute = (DOM: HTMLDivElement) => {
    const Route = DOM.querySelector('#routes') as HTMLDivElement | null;

    const Home = DOM.querySelector('#home') as HTMLUListElement | null,
        Shop = DOM.querySelector('#shop') as HTMLUListElement | null,
        Blog = DOM.querySelector('#blog') as HTMLUListElement | null,
        About = DOM.querySelector('#about') as HTMLUListElement | null,
        Contact = DOM.querySelector('#contact') as HTMLUListElement | null,
        Cart = DOM.querySelector('#cart') as HTMLAnchorElement | null,
        Cart2 = DOM.querySelector('#cart2') as HTMLLIElement | null;

    { Route && HomePage(Route as HTMLDivElement) }

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

    const menuItems = [Home, Shop, Blog, About, Contact, Cart, Cart2];

    menuItems.forEach((item, index) => {
        if (item) {
            item.addEventListener('click', () => {
                const pages = [HomePage, ShoppingPage, BlogPage, AboutPage, ContactPage, CartPage, CartPage];
                switchRoute(pages[index]);
                menuItems.forEach(menuItem => {
                    if (menuItem) {
                        menuItem.classList.toggle(styles.active, menuItem === item);
                    }
                });
                localStorage.setItem('activePage', index.toString());
            });
        }
    });

    const storedActivePage = localStorage.getItem('activePage');
    if (storedActivePage) {
        const activeIndex = parseInt(storedActivePage);
        const pages = [HomePage, ShoppingPage, BlogPage, AboutPage, ContactPage, CartPage, CartPage];
        switchRoute(pages[activeIndex]);
        menuItems.forEach((menuItem, index) => {
            if (menuItem) {
                menuItem.classList.toggle(styles.active, index === activeIndex);
            }
        });
    } else {
        switchRoute(HomePage);
        if (Home) {
            Home.classList.toggle(styles.active, true);
        }
    }
};
