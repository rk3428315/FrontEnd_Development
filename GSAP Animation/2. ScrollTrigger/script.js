// gsap.from("#page1 #box", {
//     scale: 0,
//     delay: .5,
//     duration: 1,
//     rotate: 360,
// });

// gsap.from("#page2 h2", {
//     x: 500,
//     opacity: 0,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page2 h2",
//         scroll: "body",
//         markers: true,
//         start: "top 50%",
//     }
// });

// gsap.from("#page2 #box", {
//     rotate: 360,
//     opacity: 0,
//     // duration: 2,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroll: "body",
//         markers: true,
//         start: "top 50%",
//         end: " top 10%",
//         scrub: 2,
//         pin: true,

//     }
// });



gsap.to('#page2 h1',{
    transform : "translateX(-100%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers: true,
        // start:"top 0%",
        // end:"top -100%",
        scrub:2,
        pin:true,
    }
})
