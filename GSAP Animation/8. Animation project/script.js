// Section 1

function section1Animation() {
    var tl = gsap.timeline();

    tl.from("nav h2, nav p, nav button", {
        y: -50,
        duration: 0.7,
        delay: 0.5,
        opacity: 0,
        stagger: 0.15,
    });

    tl.from("#content h1,#content p, #content button", {
        x: -300,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    })

    tl.from("#content img", {
        opacity: 0,
        duration: 0.5,
    }, "-=1");

    tl.from("#company-img img", {
        y: 80,
        duraion: 0.5,
        stagger: 0.2,
        opacity: 0,
    })
}

section1Animation();
//=====================================

// section 2
function section2Animation() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            end: "top 0",
            scrub: 2,
        }
    });

    tl2.from("#services", {
        y: 50,
        duration: 0.5,
        opacity: 0
    });

    tl2.from("#first", {
        x: -200,
        duraion: 0.5,
        opacity: 0,
    }, "anime")

    tl2.from("#second", {
        x: 200,
        duraion: 0.5,
        opacity: 0,
    }, "anime")

    tl2.from("#third", {
        x: -200,
        duraion: 0.5,
        opacity: 0,
    }, "anime1")

    tl2.from("#fourth", {
        x: 200,
        duraion: 0.5,
        opacity: 0,
    }, "anime1");
}

section2Animation();
//==============================