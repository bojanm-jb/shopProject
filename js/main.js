
    let stp;
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };

    const mobileButton = document.querySelector('.collapsed.navbar-toggle'),
          dropDownMenu = document.querySelector('.collapse.navbar-collapse'),
          mobileOverlay = document.querySelector('.overlay');

    mobileButton.addEventListener('click', function () {
        dropDownMenu.classList.add('display-me');
        mobileOverlay.classList.add('show-me');
    });
    mobileOverlay.addEventListener('click', function () {
        this.classList.remove('show-me');
        dropDownMenu.classList.remove('display-me');
    });

    class Slider {
        constructor(slider) {
            this.slider = slider;
            this.sliderItems = document.querySelectorAll('#' + this.slider.id + ' .picture-slide');
            this.sliderDotItems = document.querySelectorAll('#' + this.slider.id + ' .dots');
            this.sliderWrapper = document.querySelector('#' + this.slider.id + ' .slider-picture-wrapper');
            this.sliderDotWrapper = document.querySelector('#' + this.slider.id + ' .slider-dots');
            this.addListener();
            this.sliderMove();
            this.mouseenter = true;
        }

        addListener() {
            document.querySelector('#' + this.slider.id + ' .left-button-arrow.arrows').addEventListener('click', (e) => {
                    this.slideLeft();
            });
            document.querySelector('#' + this.slider.id + ' .right-button-arrow.arrows').addEventListener('click', (e) => {
                    this.slideRight();
            });

            this.slider.addEventListener('mouseenter', (e) => {
                this.mouseenter = false;
                this.sliderStop();
            });

            this.slider.addEventListener('mouseleave', (e) => {
                this.mouseenter = false;
                this.sliderMove();
            });


        };

        slideRight() {
            for (let i = 0; i < this.sliderItems.length; i++) {
                let el = this.sliderItems[i];
                if (el.classList.contains('active')) {
                    if (i === this.sliderItems.length - 1) {
                        this.sliderItems[0].classList.add('active');
                        this.sliderItems[this.sliderItems.length - 1].classList.remove('active');
                        this.sliderWrapper.style.transform = `translateX(0%)`;
                        if (this.slider.contains(this.sliderDotWrapper)) {
                            this.sliderDotItems[this.sliderDotItems.length - 1].classList.remove('active');
                            this.sliderDotItems[0].classList.add('active');
                        }

                    } else {
                        this.sliderItems[i].classList.remove('active');
                        this.sliderItems[i + 1].classList.add('active');
                        this.sliderWrapper.style.transform = `translateX(-${i + 1}00%)`;
                        if (this.slider.contains(this.sliderDotWrapper)) {
                            this.sliderDotItems[i].classList.remove('active');
                            this.sliderDotItems[i + 1].classList.add('active');
                        }
                    }
                    return;
                }
            }
        }

        slideLeft() {
            for (let i = 0; i < this.sliderItems.length; i++) {
                let el = this.sliderItems[i];
                if (el.classList.contains('active')) {
                    if (i === 0) {
                        this.sliderItems[0].classList.remove('active');
                        this.sliderItems[this.sliderItems.length - 1].classList.add('active');
                        this.sliderWrapper.style.transform = `translateX(-${this.sliderItems.length - 1}00%)`;
                        if (this.slider.contains(this.sliderDotWrapper)) {
                            this.sliderDotItems[0].classList.remove('active');
                            this.sliderDotItems[this.sliderDotItems.length - 1].classList.add('active');
                        }
                    } else {
                        this.sliderItems[i].classList.remove('active');
                        this.sliderItems[i - 1].classList.add('active');
                        this.sliderWrapper.style.transform = `translateX(-${i - 1}00%)`;
                        if (this.slider.contains(this.sliderDotWrapper)) {
                            this.sliderDotItems[i].classList.remove('active');
                            this.sliderDotItems[i - 1].classList.add('active');
                        }
                    }
                    return;
                }
            }
        }

        sliderMove() {
            stp = setInterval(function () {
                for (let i = 0; i < this.sliderItems.length; i++) {
                    let el = this.sliderItems[i];
                    if (el.classList.contains('active')) {
                        if (i === this.sliderItems.length - 1) {
                            this.sliderItems[0].classList.add('active');
                            this.sliderItems[this.sliderItems.length - 1].classList.remove('active');
                            this.sliderWrapper.style.transform = `translateX(0%)`;
                            if (this.slider.contains(this.sliderDotWrapper)) {
                                this.sliderDotItems[0].classList.add('active');
                                this.sliderDotItems[this.sliderDotItems.length - 1].classList.remove('active');
                            }
                        } else {
                            this.sliderItems[i].classList.remove('active');
                            this.sliderItems[i + 1].classList.add('active');
                            this.sliderWrapper.style.transform = `translateX(-${i + 1}00%)`;
                            if (this.slider.contains(this.sliderDotWrapper)) {
                                this.sliderDotItems[i].classList.remove('active');
                                this.sliderDotItems[i + 1].classList.add('active');
                            }
                        }
                        return;
                    }
                }
            }.bind(this), 3000);
        }


        sliderStop() {
            clearInterval(stp);
        }

        sliderDots() {
            for (let i = 0; i < this.sliderDotItems.length; i++) {
                this.sliderDotItems[i].addEventListener('click', function () {
                    this.setActiveDot(i);
                });
                return i;
            }

            function setActiveDot(i) {
                this.sliderDotItems.forEach(function (element, index) {
                    if (i !== index) {
                        element.classList.remove('active');
                    } else {
                        element.classList.add('active');
                        setSliderItemByIndex(index);
                    }
                });
            }

            function setSliderItemByIndex(index) {
                this.slider.style.transform = `translateX(-${index}00%)`;
                this.sliderItems.forEach(function (element) {
                    element.classList.remove('active');
                    this.sliderItems[index].classList.add('active');
                })
            }
        }
    }

    const mainSlider = document.querySelector('.main-slider.slider'),
        sliderMain = new Slider(mainSlider);

    const sliders = document.querySelectorAll('.slider');

    sliders.forEach( () => {

    });
