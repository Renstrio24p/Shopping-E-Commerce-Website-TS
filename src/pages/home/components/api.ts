import styles from '../../../sass/modules/app.module.scss';
import { CartSvg, StarSvg } from '../../../ts/svg';
import { BannerData, BannerSMData, NewArrivalData, ProductData, featuresData } from './data';

export const FeatureAPI = (DOM: HTMLDivElement) => {

    const FeatureSection = DOM.querySelector(`.${styles.feature}`) as HTMLDivElement | null;

    featuresData.forEach(feature => {
        const FeatureBox = document.createElement('div') as HTMLDivElement | null;
        
            if(FeatureBox && FeatureSection){
                FeatureBox.classList.add(styles['fe-box'])
                FeatureBox.innerHTML = (`
                    <img src='${feature.imgSrc}' alt='${feature.alt}'>
                    <h6 style='background-color: ${feature.color}'>${feature.text}</h6>
                `)
                FeatureSection.appendChild(FeatureBox);
            }

    })

}

export const ProductAPI = (DOM: HTMLDivElement) => {
    const FeatureProductSection = DOM.querySelector('#pro') as HTMLDivElement | null;

    ProductData.forEach(Product => {
        const pro = document.createElement('div');
        pro.classList.add(styles.pro);
        pro.innerHTML = (`
            <img src='${Product.imgSrc}' alt='${Product.alt}'>
            <div class='${styles.des}'>
                <span>${Product.brand}</span>
                <h5>${Product.name}</h5>
                <div id='star' class='${styles.star}'></div>
                <h4>${Product.price}</h4>
            </div>
            <a href='#'><i>${CartSvg}</i></a>
        `)

        const starDiv = pro.querySelector('#star') as HTMLDivElement | null;

        for (let i = 0; i < Product.rating; i++) {
            const starSvg = document.createElement('i');
            starSvg.innerHTML = StarSvg; 
            starDiv?.appendChild(starSvg);
        }

        FeatureProductSection?.appendChild(pro);
    })
}

export const NewArrivalAPI = (DOM: HTMLDivElement) => {
    const NewArrivalSection = DOM.querySelector('#pro2') as HTMLDivElement | null;

    NewArrivalData.forEach(Arrival => {
        const pro2 = document.createElement('div');
        pro2.classList.add(styles.pro);
        pro2.innerHTML = (`
        <img src='${Arrival.imgSrc}' alt='${Arrival.alt}'>
        <div class='${styles.des}'>
            <span>${Arrival.brand}</span>
            <h5>${Arrival.name}</h5>
            <div id='star' class='${styles.star}'></div>
            <h4>${Arrival.price}</h4>
        </div>
        <a href='#'><i>${CartSvg}</i></a>
        `)

        const starDiv = pro2.querySelector('#star') as HTMLDivElement | null;

        for (let i = 0; i < Arrival.rating; i++) {
            const starSvg = document.createElement('i');
            starSvg.innerHTML = StarSvg; 
            starDiv?.appendChild(starSvg);
        }

        NewArrivalSection?.appendChild(pro2);

    })
}

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

    BannerData.forEach((BannerItem,index) => {
        const bannerDiv = document.createElement('div');
        bannerDiv.classList.add(styles['banner-box']);

        if(index === 0) {
            bannerDiv.classList.add(styles.img1)
        }

        if(index === 1) {
            bannerDiv.classList.add(styles.img2)
        }
        if(index === 2) {
            bannerDiv.classList.add(styles.img3)
        }

        bannerDiv.innerHTML = (`
            <h2>${BannerItem.title}</h2>
            <h3>${BannerItem.Desc}</h3>
        `)

        Banner3rd?.appendChild(bannerDiv);
    })
}
