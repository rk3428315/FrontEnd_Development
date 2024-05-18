

// This the Text Animation On srollup and down
let page2Move = document.querySelector("#page2");

window.addEventListener("wheel", function (val) {
    if (val.deltaY > 0) {
        gsap.to('.marque', {
            x: "-200%",
            duration: 3,
            delay: .2,
            repeat: -1,
            ease: "none",
        });
        gsap.to(".marque img", {
            rotate: 180,
        });
    }
    if (val.deltaY < 0) {
        gsap.to('.marque', {
            x: "-100%",
            duration: 3,
            delay: .2,
            repeat: -1,
            ease: "none",
        });
        gsap.to(".marque img", {
            rotate: 0
        });
    }
    else { }

})
// ===========================================================