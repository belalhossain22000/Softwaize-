const main = document.querySelector('main');


const navContainer = document.createElement('div');
navContainer.className = 'nav-container';


const navItems = [
    { name: 'Best Sellers', imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/best-sellers.png', link: '/collections/best-sellers' },
    { name: 'New', imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/new.png', link: '/collections/new-non-serials' },
    { name: 'Necklaces', imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/necklaces.png', link: '/collections/necklaces' },
    { name: 'Rings', imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/rings.png', link: '/collections/rings' },
    { name: 'Earrings', imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/bracelets.png', link: '/collections/earrings' },
    { name: 'Personalized', imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/personalized.png', link: '/collections/personalized' },
    { name: 'Ring', imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/fine.png', link: '/collections/ring' },
    { name: 'Ring', imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/clearance.png', link: '/collections/clearance', },
    { name: 'Ring', imgSrc: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/jm-fine-sample.png', link: '/collections/fine-sample-sale' },


];


navItems.forEach(item => {
  
    const link = document.createElement('a');
    link.href = item.link;


    const img = document.createElement('img');
    img.src = item.imgSrc;
    img.alt = item.name;


    const label = document.createElement('p');
    label.textContent = item.name;

  
    link.appendChild(img);
    link.appendChild(label);


    navContainer.appendChild(link);
});


main.prepend(navContainer);

