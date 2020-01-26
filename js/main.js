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

$(window).on("load", function () { });
$(document).ready(function () {
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
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
            delay: 5000,
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
    var choosedswiper = new Swiper('#choosed .Product-slider', {
        slidesPerView: 4,
        spaceBetween: 16,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: false,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '#choosed .swiper-button-next',
            prevEl: '#choosed .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                pagination: {
                    el: '#specials .swiper-pagination',
                    clickable: true,
                },
            },
            992: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                pagination: {
                    el: '#specials .swiper-pagination',
                    clickable: true,
                },
            },
            1200: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
        },
    });
});