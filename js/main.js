$(window).on("load", function () {
    $(".loader .svg").fadeOut(1500, function () {
        $(".loader").fadeOut(500);
        $('body').css("overflow-y", "visible");
        $('body').animate({
            scrollTop: 0
        }, 1);
    });

    $(function () {
        jQuery('img.svg').each(function () {
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function (data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Check if the viewport is set, else we gonna set it if we can.
                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });
    });
});
$(document).ready(function () {

    var minVal = 1, maxVal = 20; // Set Max and Min values
    // Increase product quantity on cart page
    $(".increaseQty").on('click', function () {
        var $parentElm = $(this).parents(".qtySelector");
        $(this).addClass("clicked");
        setTimeout(function () {
            $(".clicked").removeClass("clicked");
        }, 100);
        var value = $parentElm.find(".qtyValue").val();
        if (value < maxVal) {
            value++;
        }
        $parentElm.find(".qtyValue").val(value);
    });
    // Decrease product quantity on cart page
    $(".decreaseQty").on('click', function () {
        var $parentElm = $(this).parents(".qtySelector");
        $(this).addClass("clicked");
        setTimeout(function () {
            $(".clicked").removeClass("clicked");
        }, 100);
        var value = $parentElm.find(".qtyValue").val();
        if (value > 1) {
            value--;
        }
        $parentElm.find(".qtyValue").val(value);
    });

    if ($('body').hasClass("homePage")) {
        var mainswiper = new Swiper('.main-slider .swiper-container', {
            navigation: {
                nextEl: '.main-slider .swiper-button-next',
                prevEl: '.main-slider .swiper-button-prev',
            },
            autoplay: {
                delay: 10000,
            },
            spaceBetween: 10,
            loop: true,
        });
        var specialsswiper = new Swiper('#specials .Product-slider', {
            slidesPerView: 4,
            spaceBetween: 16,
            slidesPerGroup: 4,
            loop: true,
            loopFillGroupWithBlank: false,
            autoplay: {
                delay: 10000,
            },
            pagination: {
                el: '#specials .swiper-pagination',
                clickable: true,
            },
            navigation: false,
            breakpoints: {
                500: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                992: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                },
                1200: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
            },
        });
        var choosedswiper = new Swiper('#choosed1 .Product-slider', {
            slidesPerView: 4,
            spaceBetween: 16,
            slidesPerGroup: 4,
            loop: true,
            loopFillGroupWithBlank: false,
            autoplay: {
                delay: 10000,
            },
            navigation: {
                nextEl: '#choosed1 .swiper-button-next',
                prevEl: '#choosed1 .swiper-button-prev',
            },
            breakpoints: {
                500: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    pagination: {
                        el: '#choosed1 .swiper-pagination',
                        clickable: true,
                    },
                },
                992: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    pagination: {
                        el: '#choosed1 .swiper-pagination',
                        clickable: true,
                    },
                },
                1200: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    navigation: false,
                    pagination: {
                        el: '#choosed1 .swiper-pagination',
                        clickable: true,
                    },
                },
            },
        });
        var choosedswiper = new Swiper('#choosed2 .Product-slider', {
            slidesPerView: 4,
            spaceBetween: 16,
            slidesPerGroup: 4,
            loop: true,
            loopFillGroupWithBlank: false,
            autoplay: {
                delay: 10000,
            },
            navigation: {
                nextEl: '#choosed2 .swiper-button-next',
                prevEl: '#choosed2 .swiper-button-prev',
            },
            breakpoints: {
                500: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    pagination: {
                        el: '#choosed2 .swiper-pagination',
                        clickable: true,
                    },
                },
                992: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    pagination: {
                        el: '#choosed2 .swiper-pagination',
                        clickable: true,
                    },
                },
                1200: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    navigation: false,
                    pagination: {
                        el: '#choosed2 .swiper-pagination',
                        clickable: true,
                    },
                },
            },
        });
        var choosedswiper = new Swiper('#choosed3 .Product-slider', {
            slidesPerView: 4,
            spaceBetween: 16,
            slidesPerGroup: 4,
            loop: true,
            loopFillGroupWithBlank: false,
            autoplay: {
                delay: 10000,
            },
            navigation: {
                nextEl: '#choosed3 .swiper-button-next',
                prevEl: '#choosed3 .swiper-button-prev',
            },
            breakpoints: {
                500: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    pagination: {
                        el: '#choosed3 .swiper-pagination',
                        clickable: true,
                    },
                },
                992: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    pagination: {
                        el: '#choosed3 .swiper-pagination',
                        clickable: true,
                    },
                },
                1200: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    navigation: false,
                    pagination: {
                        el: '#choosed3 .swiper-pagination',
                        clickable: true,
                    },
                },
            },
        });
        var choosedswiper = new Swiper('#choosed4 .Product-slider', {
            slidesPerView: 4,
            spaceBetween: 16,
            slidesPerGroup: 4,
            loop: true,
            loopFillGroupWithBlank: false,
            autoplay: {
                delay: 10000,
            },
            navigation: {
                nextEl: '#choosed4 .swiper-button-next',
                prevEl: '#choosed4 .swiper-button-prev',
            },
            breakpoints: {
                500: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    pagination: {
                        el: '#choosed4 .swiper-pagination',
                        clickable: true,
                    },
                },
                992: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    pagination: {
                        el: '#choosed4 .swiper-pagination',
                        clickable: true,
                    },
                },
                1200: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    navigation: false,
                    pagination: {
                        el: '#choosed4 .swiper-pagination',
                        clickable: true,
                    },
                },
            },
        });
        var bannerswiper = new Swiper('.banners-slider .swiper-container', {
            slidesPerView: 2,
            spaceBetween: 16,
            loop: true,
            freeMode: true,
            breakpoints: {
                500: {
                    slidesPerView: 1,
                },
            },
        });
        bannerswiper.slideTo(0, 0, false);

        var brandsswiper = new Swiper('#brands .Product-slider', {
            slidesPerView: 6,
            spaceBetween: 0,
            slidesPerGroup: 6,
            loop: true,
            loopFillGroupWithBlank: false,
            autoplay: {
                delay: 10000,
            },
            pagination: {
                el: '#brands .swiper-pagination',
                clickable: true,
            },
            navigation: false,
            breakpoints: {
                500: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                992: {
                    slidesPerView: 3,
                    slidesPerGroup: 3
                },
                1200: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                },
            },
        });
    }

    $('.mo-search').click(function () {
        $(".search-fixed").fadeIn(700);
        $('.search-input').focus();
        $("body").addClass("overflow");
    });
    $('.search-fixed').click(function () {
        $(".search-fixed").fadeOut(700);
        $('.search-input').focusout();
        $("body").removeClass("overflow");
    });
    $('.search-cont').click(function (e) {
        e.stopPropagation();
    });

    if ($(window).width() <= 767) {
        $(".pro-withoutslider .product").wrap("<div class='swiper-slide'></div>");
        $(".pro-withoutslider .swiper-slide").wrapAll("<div class='swiper-wrapper'></div>");
        $(".pro-withoutslider .Product-pre").addClass("swiper-container");
        $(".pro-withoutslider .Product-pre").addClass("Product-slider");
        $(".pro-withoutslider .swiper-container").wrap("<div id='xs-slider' class='products'></div>");
        $(".mo-dropmenu").wrap("<div class='drop-mob'></div>");
        $(".pro-withoutslider .Product-pre").removeClass("Product-flex");
        $(".mo-navbar").append("<sapn class='close-menu'></sapn>");

        var xs_sliderswiper = new Swiper('#xs-slider .Product-slider', {
            slidesPerView: 4,
            spaceBetween: 16,
            slidesPerGroup: 4,
            loop: true,
            loopFillGroupWithBlank: false,
            autoplay: {
                delay: 10000,
            },
            pagination: {
                el: '.pro-withoutslider .swiper-pagination',
                clickable: true,
            },
            navigation: false,
            breakpoints: {
                500: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                992: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                },
                1200: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
            },
        });

        $('.mo-dropdown').click(function () {
            $(".drop-mob").slideToggle(500);
            $('.mo-dropdown .nav-anchor').toggleClass("nav-expanded");
        });

        $('.mo-menu-ico').click(function () {
            $(".navbar-cont").fadeIn(200);
            $('.mo-navbar').addClass("mo-nav-open");
            $("body").addClass("overflow");
        });
        $('.navbar-cont').click(function () {
            $(".navbar-cont").fadeOut(500);
            $('.mo-navbar').removeClass("mo-nav-open");
            $("body").removeClass("overflow");
        });
        $('.mo-navbar').click(function (e) {
            e.stopPropagation();
        });
    }
    if ($('div').hasClass("slider")) {
        var slider = document.getElementById('slider');
        var Max = slider.getAttribute("maxValue");
        var Min = slider.getAttribute("minValue");
        noUiSlider.create(slider, {
            start: [Min, Max],
            connect: true,
            range: {
                'min': 0,
                'max': 500
            }
        });
        var input0 = document.getElementById('min-range');
        var input1 = document.getElementById('max-range');
        var inputs = [input0, input1];

        slider.noUiSlider.on('update', function (values, handle) {
            inputs[handle].innerText = parseInt(values[handle], 10);
            console.log(parseInt(values[handle], 100));

        });
    }

});