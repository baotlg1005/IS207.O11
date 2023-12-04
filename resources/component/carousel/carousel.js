const carouselNav = document.querySelector('.carousel__nav');
const navButtons = document.querySelectorAll('.nav__btn');
const contentItems = document.querySelectorAll('.content-item');

class Carousel {
    constructor(items, buttons) { 
        this.carouselItems = [...items];
        this.navButtons = buttons;
    }

    updateGallery() {
        this.carouselItems.forEach(el => {
            el.classList.remove('content-item-1');
            el.classList.remove('content-item-2');
            el.classList.remove('content-item-3');
            el.classList.remove('content-item-4');
            el.classList.remove('content-item-5');
        });

        this.carouselItems.slice(0, 5).forEach((el, i) => { 
            el.classList.add(`content-item-${i+1}`);
        });
    }

    setButton() {
        this.navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.id == 'btn-left') {
                    this.carouselItems.unshift(this.carouselItems.pop());
                }
                else if (btn.id == 'btn-right') {
                    this.carouselItems.push(this.carouselItems.shift());
                }
                this.updateGallery();
            });
        });
    }

    autoRotate() {
        setInterval(() => {
            this.carouselItems.push(this.carouselItems.shift());
            this.updateGallery();
        }, 3000);
    }
}

const newCarousel = new Carousel(contentItems, navButtons);
newCarousel.setButton();
newCarousel.autoRotate();
