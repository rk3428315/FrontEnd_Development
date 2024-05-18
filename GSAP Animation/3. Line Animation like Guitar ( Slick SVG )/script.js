var startPath = "M 200 150 Q 750 150 1500 150";
var finalPath = "M 200 150 Q 750 150 1500 150";


let string = document.querySelector('#string');

string.addEventListener("mousemove", function (val) {
    startPath = `M 200 150 Q ${val.x} ${val.y} 1500 150`

    gsap.to("svg path", {
        attr: { d: startPath },
        duration: .3,
        ease: "power3.out",
    })
})

string.addEventListener("mouseleave", function (val) {
    // finalPath = val;
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 1,
        ease: "elastic.out(1,0.2)"
    })
})