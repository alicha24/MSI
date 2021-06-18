/*===== SCROLL REVEAL ANIMATION  =====*/

ScrollReveal().reveal(".btns_wrapper", {
    reset: false,
    distance: '120px',
    duration: 1000,
    origin: "top",
    interval: 200
})

/*--- SHOW CASE - Left Side ---*/
ScrollReveal().reveal(".show_case_content", {
    reset: true,
    distance: '120px',
    duration: 1000,
    origin: "left",
    interval: 350
})

/*--- SHOW CASE: Right Side ---*/
ScrollReveal().reveal(".img_holder", {
    reset: true,
    distance: '120px',
    duration: 1000,
    origin: "right",
    interval: 350
})

/*===== SLICK SLIDER ANIMATION  =====*/
$(".clients_logos_slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 1500,
    // the magic
    responsive: [{

        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            infinite: true
        }

    }, {

        breakpoint: 600,
        settings: {
            slidesToShow: 3,
            dots: true
        }

    }, {
        breakpoint: 360,
        settings: {
            slidesToShow: 1,
            dots: true
        }
    }
    ]
})
