
$(document).ready(function ()
{
    $('#trend__slider').bxSlider({
        slideWidth: 400,
        minSlides: 2,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin: 24,
        infiniteLoop: true,
        auto: true,
        pager: false,
    })

    $('#tv__slider').bxSlider({
        slideWidth: 400,
        minSlides: 2,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin: 24,
        infiniteLoop: true,
        auto: true,
        pager: false,
    })

    $('#main__carousel').bxSlider({
        infiniteLoop: true,
        pager: false,
        auto: true,
        moveSlides: 1,
        minSlides: 1,
        maxSlides: 1,
    })

    $('#award-carousel').bxSlider({
        slideWidth: 400,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 16,
        infiniteLoop: true,
        auto: true,
        pager: false,
    })

    $('#activity__carousel').bxSlider({
        slideWidth: 400,
        minSlides: 3,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin: 16,
        infiniteLoop: true,
        auto: true,
        pager: false,
    })

    $('#transfer').bxSlider({
        infiniteLoop: true,
        pager: false,
        auto: true,
        moveSlides: 1,
        minSlides: 1,
        maxSlides: 1,
    })
    $('#register__carousel').bxSlider({
        slideWidth: 400,
        minSlides: 4,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin: 16,
        infiniteLoop: true,
        auto: true,
        pager: false,
    })
})