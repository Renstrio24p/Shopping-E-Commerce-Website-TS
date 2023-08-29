import styles from '../../sass/modules/app.module.scss';
import { CartSvg, MenuBarXSvg, StarSvg } from '../svg';
import { BannerData, BannerSMData, CombinedData, featuresData } from './data';
import { BlogData } from './data2';

export const FeatureAPI = (DOM: HTMLDivElement) => {

    const FeatureSection = DOM.querySelector(`.${styles.feature}`) as HTMLDivElement | null;

    featuresData.forEach(feature => {
        const FeatureBox = document.createElement('div') as HTMLDivElement | null;

        if (FeatureBox && FeatureSection) {
            FeatureBox.classList.add(styles['fe-box'])
            FeatureBox.innerHTML = (`
                    <img src='${feature.imgSrc}' alt='${feature.alt}'>
                    <h6 style='background-color: ${feature.color}'>${feature.text}</h6>
                `)
            FeatureSection.appendChild(FeatureBox);
        }

    })

}

export const CombinedAPI = (DOM: HTMLDivElement) => {
    const FeatureProductSection = DOM.querySelector('#pro') as HTMLDivElement | null;
    const NewArrivalSection = DOM.querySelector('#pro2') as HTMLDivElement | null;

    const modal = document.querySelector('#productModal') as HTMLDivElement;
    const modalContent = modal.querySelector(`.${styles['modal-content']}`) as HTMLDivElement;

    CombinedData.forEach(product => {
        const pro = document.createElement('div');
        pro.classList.add(styles.pro);
        pro.innerHTML = `
            <img src='${product.imgSrc}' alt='${product.alt}'>
            <div class='${styles.des}'>
                <span>${product.brand}</span>
                <h5>${product.name}</h5>
                <div id='star' class='${styles.star}'></div>
                <h4>${product.price}</h4>
            </div>
            <a href='#'><i>${CartSvg}</i></a>
        `;

        const starDiv = pro.querySelector('#star') as HTMLDivElement | null;

        for (let i = 0; i < product.rating; i++) {
            const starSvg = document.createElement('i');
            starSvg.innerHTML = StarSvg;
            starDiv?.appendChild(starSvg);
        }

        pro.addEventListener('click', () => {
            populateModal(product);
            modal.style.display = 'block';
        });

        if (product.new) {
            NewArrivalSection?.appendChild(pro);
        } else {
            FeatureProductSection?.appendChild(pro);
        }
    });

    function populateModal(product: any) {
        modalContent.innerHTML = `
        <div id='prodetails' class='${styles['section-p1']}'>
            <div class='${styles['single-pro-image']}'>
                <img src='${product.imgSrc}' alt='${product.alt}' id='main-product'>
                <div class='${styles['small-img-group']}' id='small-img-group-${product.id}'>
                    ${GenerateImages(product)}
                </div>
            </div>
            <div class='${styles['single-pro-details']}'>
                <h6>${product.category}</h6>
                <h4>${product.gender}</h4>
                <h2 id='price'>&#36;${product.price}.00</h2>
                <select>
                    <option>Select Size</option>
                    <option>XL</option>
                    <option>XXL</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
                <input type='number' value='1'>
                <button>Add to ${CartSvg}</button>
                <div>
                    <span>${product.desc}</span>
                </div>
            </div>
            <i id='xmark'>${MenuBarXSvg}</i>
        </div>
        `;

        const xmarkButton = modalContent.querySelector('#xmark') as HTMLButtonElement | null;

        xmarkButton?.addEventListener('click', () => {
            modal.style.display = 'none';
            console.log('Xmark button clicked');
        });

        const starDivModal = modalContent.querySelector('#star') as HTMLDivElement | null;
        for (let i = 0; i < product.rating; i++) {
            const starSvg = document.createElement('i');
            starSvg.innerHTML = StarSvg;
            starDivModal?.appendChild(starSvg);
        }

        const smallImages = modalContent.querySelectorAll(`.${styles['small-img-col']} img`);
        smallImages.forEach((image, index) => {
            image.addEventListener('click', () => {
                updateMainImageAndDetails(product.maleAdditionalImages[index]);
            });
        });

        modalContent.addEventListener('click', (event: any) => {
            if (!event.target.closest(`.${styles['small-img-col']} img`)) {
                updateMainImageAndDetails(product);
            }
        });
    }

    function GenerateImages(product: any) {
        product.maleAdditionalImages = CombinedData.slice(0, 4);

        return product.maleAdditionalImages.map((image: any, index: any) => `
            <div class='${styles['small-img-col']}'>        
                <img 
                    src='${image.imgSrc}' 
                    alt='${image.alt}' 
                    id='sm-img-${index}' 
                    class='${styles['small-img']}'
                >
            </div>
        `).join('');
    }

    function updateMainImageAndDetails(selectedImage: any) {
        const mainImage = modalContent.querySelector('#main-product') as HTMLImageElement;
        let productPrice = modalContent.querySelector('#price') as HTMLHeadingElement; 
        mainImage!.src = selectedImage.imgSrc;
        productPrice = selectedImage.price;
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

};



export const BannerSMAPI = (DOM: HTMLDivElement) => {
    const SMBanner = DOM.querySelector('#sm-banner') as HTMLDivElement | null;

    BannerSMData.forEach((SMData, index) => {
        const smdata = document.createElement('div');
        smdata.classList.add(styles['banner-box']);

        if (index === 1) {
            smdata.classList.add(styles['box2']);
        }

        smdata.innerHTML = (`
            <h4>${SMData.top}</h4>
            <h2>${SMData.middle}</h2>
            <span>${SMData.desc}</span>
            <button class='${styles.white}'>${SMData.text}</button>
        `);

        SMBanner?.appendChild(smdata);
    });
}

export const Banner3API = (DOM: HTMLDivElement) => {
    const Banner3rd = DOM.querySelector('#banner3') as HTMLDivElement | null;

    BannerData.forEach((BannerItem, index) => {
        const bannerDiv = document.createElement('div');
        bannerDiv.classList.add(styles['banner-box']);

        if (index === 0) {
            bannerDiv.classList.add(styles.img1)
        }

        if (index === 1) {
            bannerDiv.classList.add(styles.img2)
        }
        if (index === 2) {
            bannerDiv.classList.add(styles.img3)
        }

        bannerDiv.innerHTML = (`
            <h2>${BannerItem.title}</h2>
            <h3>${BannerItem.Desc}</h3>
        `)

        Banner3rd?.appendChild(bannerDiv);
    })
}

export const BlogAPI = (DOM: HTMLDivElement) => {
    const BlogSection = DOM.querySelector(`.${styles['blog-section']}`) as HTMLDivElement | null;

    BlogData.forEach(Blog => {
        const BlogDiv = document.createElement('div');
        BlogDiv.classList.add(styles['blog-box']);
        BlogDiv.innerHTML = `
            <div class='${styles['blog-img']}'>
                <img src='${Blog.imgSrc}' alt='${Blog.alt}'>
            </div>
            <div>
                <h4>${Blog.head}</h4>
                <p>${Blog.text}</p>
                <a href='#'>Continue Reading</a>
            </div>
            <h1>${Blog.date}</h1>
        `; 

        BlogSection?.appendChild(BlogDiv);
    });
}
