console.log(`\n\ntentang programmer : https://fruzh.github.io/portfolio/\n\n\n`)

// owl carousel
$('.owl-carousel').owlCarousel({
    nav: true,
    loop: true,
    margin: 10,
    center: true,
    autoplay: true,
    lazyLoad: true,
    lazyLoadEager: 4,
    smartSpeed: 1200, // 1200ms = 1.2s (transition maybe wkwk)
    autoplayTimeout: 3000, // 3000ms = 3s
    autoplayHoverPause: true,
    responsive:{
        0:{ items:1 }, // min-width 0px
        550:{ items:1 }, // min-width 550px
        700:{ items:1.2 }, // min-width 700px
        900:{ items:1.5 }, // min-width 900px
        1200:{ items:1.7 }, // min-width 1200px
        1500:{ items:2 }, //min-width 1500px
    }
});


// Jquery
$(document).ready(function() {
    // ketika navbar utama (main) hover muncul dropdown pertama
    $("nav div ul li:nth-child(2) a").hover(function() {
        $(".dropdown-primary-1").toggleClass("active")
    })
    $("nav div ul li:nth-child(3) a").hover(function() {
        $(".dropdown-primary-2").toggleClass("active")
    })

    // dropdown yang di hover tetep ke trigger
    $(".dropdown-primary-1").hover(function() {
        $(".dropdown-primary-1").toggleClass("active")
    })
    $(".dropdown-primary-2").hover(function() {
        $(".dropdown-primary-2").toggleClass("active")
    })

    // dropdown utama di hover muncul dropdown kedua
    $(".dropdown-primary-1 p:nth-child(1)").hover(function() {
        $(".dropdown-secondary-1").toggleClass("active")
    })
    $(".dropdown-primary-1 p:nth-child(2)").hover(function() {
        $(".dropdown-secondary-2").toggleClass("active")
    })

    // dropdown yang di hover tetep ke trigger
    $(".dropdown-secondary-1").hover(function() {
        $(".dropdown-primary-1").toggleClass("active")
        $(".dropdown-primary-1 p:nth-child(1)").toggleClass("active")
        $(".dropdown-secondary-1").toggleClass("active")
    })
    $(".dropdown-secondary-2").hover(function() {
        $(".dropdown-primary-1").toggleClass("active")
        $(".dropdown-primary-1 p:nth-child(2)").toggleClass("active")
        $(".dropdown-secondary-2").toggleClass("active")
    })
});

const initAnimatedCounts = () => {
    const ease = (n) => {
        return --n * n * n + 1;
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
                const countToString = entry.target.getAttribute('data-countTo');
                const countTo = parseFloat(countToString);
                const duration = parseFloat(entry.target.getAttribute('data-animateDuration'));
                const countToParts = countToString.split('.');
                const precision = countToParts.length === 2 ? countToParts[1].length : 0;
                const startTime = performance.now();
                const step = (currentTime) => {
                    const progress = Math.min(ease((currentTime  - startTime) / duration), 1);
                    entry.target.textContent = (progress * countTo).toFixed(precision);
                    if (progress < 1) {
                        animationFrame = window.requestAnimationFrame(step);
                    } else {
                        window.cancelAnimationFrame(animationFrame);
                    }
                };
                let animationFrame = window.requestAnimationFrame(step);
            }
        });
    });
    document.querySelectorAll('[data-animateDuration]').forEach((target) => {
        target.setAttribute('data-countTo', target.textContent);
        target.textContent = '0';
        observer.observe(target);
    });
};
initAnimatedCounts();


// gsap
let timeLineNavbarShadow = gsap.timeline({
    scrollTrigger : {
        trigger : '.landing-page',
        start : '0%',
        end : '50%',
        scrub : true,
    }
});
timeLineNavbarShadow.fromTo(
    'nav', {
        boxShadow : '0px 5px 30px rgba(0, 0, 0, 0.0)'
    }, {
        boxShadow : '0px 5px 30px rgba(0, 0, 0, 0.15)'
    }
);
gsap.to(
    'nav', {
        scrollTrigger : {
            trigger : '.landing-page',
            start : '0%',
            end : '25%',
            scrub : true,
        },
        y: '-45px'
    }
)
gsap.to(
    '.navbar', {
        scrollTrigger : {
            trigger : '.landing-page',
            start : '0%',
            end : '25%',
            scrub : true,
        },
        padding: '5px 0'
    }
)
gsap.to(
    '.banner', {
        scrollTrigger : {
            trigger : '.landing-page',
            start : '0%',
            end : '100%',
            scrub : true,
        },
        y: '17%'
    }
)
gsap.to(
    '.header-banner', {
        scrollTrigger : {
            trigger : '.landing-page',
            start : '0%',
            end : '100%',
            scrub : true,
        },
        y: '100%'
    }
)
ScrollTrigger.create({
    trigger: '.landing-page',
    start: 'top center',
    end: 'bottom center',
    toggleClass: { targets: "footer button", className: "hidden" }
})
