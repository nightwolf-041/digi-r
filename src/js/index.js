$(document).ready(function() {

    // paralax/////////////
    const config = {
        rootMargin: '25px',
        threshold: 1.0
    }
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            $('.header-bottom-box').animate({
                opacity: entry.intersectionRatio
            }, 400)
        });
    }, config);
    const targetElements = document.querySelectorAll(".header-bottom-box");
    for (let element of targetElements) {
        io.observe(element);
    }

    // ////////////////////////
    const sevices = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                $('.advantage-box').animate({
                    opacity: '1',
                    marginTop: 18
                }, 700)
            }
        });
    }, config);
    const servicesBox = document.querySelectorAll(".advantage-box");
    for (let element of servicesBox) {
        sevices.observe(element);
    }

    // //////////////////////
    const choices = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0.5) {
                $('div.choices-main-item').first().animate({
                    opacity: '1'
                }, 400, function(nextpara) {
                    $(this).next().animate({
                        opacity: '1'
                    }, 200, nextpara).next().animate({
                        opacity: '1'
                    }, 1200)
                })
            }
        });
    }, config);
    const choicesBox = document.querySelectorAll(".choices-main-item-1-logo");
    for (let element of choicesBox) {
        choices.observe(element);
    }

    // /////////////////////////////owl
    $('.owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        nav: true,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                center: true,
                items: 1,
                stagePadding: 30,
                margin: 200
            },
            400: {
                center: true,
                items: 1,
                stagePadding: 40,
                margin: 200
            },
            500: {
                center: true,
                items: 1,
                stagePadding: 60,
                margin: 200
            },
            750: {
                items: 2,
                stagePadding: 40,
                margin: 300
            },
            1000: {
                items: 2,
                stagePadding: 40,
                margin: 100
            },
            1200: {
                items: 2,
                stagePadding: 80,
                margin: 140
            }
        },
        animation: true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        smartSpeed: 450,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false
    })
});