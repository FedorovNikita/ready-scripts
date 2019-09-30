let slider1 = new Slider({
    images: '.gallery1 .gallery__image',
    imagesActive: 'gallery__image--active',
    btnPrev: '.gallery1 .gallery__buttons-prev',
    btnNext: '.gallery1 .gallery__buttons-next',
    auto: false
})

let slider2 = new Slider({
    images: '.gallery2 .gallery__image',
    imagesActive: 'gallery__image--active',
    btnPrev: '.gallery2 .gallery__buttons-prev',
    btnNext: '.gallery2 .gallery__buttons-next',
    auto: true
})

function Slider(obj) {
    this.images = document.querySelectorAll(obj.images);
    this.btnPrev = document.querySelector(obj.btnPrev);
    this.btnNext = document.querySelector(obj.btnNext);
    this.imagesActive = obj.imagesActive;
    this.auto = obj.auto;
    let ls = this;

    this.next = function() {
        for (let i = 0; i < this.images.length; i++) {
            if (this.images[i].classList.contains(this.imagesActive)) {
                this.images[i].classList.remove(this.imagesActive);
                i++;
                if ( i == this.images.length ) {
                    i = 0;
                }
                this.images[i].classList.add(this.imagesActive);
            }
        }
    }
    this.prev = function() {
        for (let i = 0; i < this.images.length; i++) {
            if (this.images[i].classList.contains(this.imagesActive)) {
                this.images[i].classList.remove(this.imagesActive);
                i--;
                if ( i < 0 ) {
                    i = this.images.length - 1;;
                }
                this.images[i].classList.add(this.imagesActive);
            }
        }
    }
    this.btnNext.onclick = function() {
        ls.next();
    }
    this.btnPrev.onclick = function() {
        ls.prev();
    }
    if(this.auto) {
        setInterval(function() {
            ls.next();
        }, 1000)
    }
}