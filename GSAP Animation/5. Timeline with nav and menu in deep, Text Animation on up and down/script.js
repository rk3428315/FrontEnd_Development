let menu = document.querySelector('#nav i');
let closeMenu = document.querySelector('#full i');


// Nav Animation

var navtl = gsap.timeline()
navtl.from("#nav h2", {
    y: -90,
    duration: 0.8,
    delay: 0.5,
    opacity: 0,
});

navtl.from("#nav i", {
    y: -90,
    duration: 0.8,
    opacity: 0,
});

navtl.from("#share-icon", {
    x: 190,
    duration: 1,
    delay: 0,
    opacity: 0,
});

//=======================================================

// Share Animation part

let share = document.querySelector('#share-icon i');
let shareShowtl = gsap.timeline();
shareShowtl.from("#share div div", {
    scale: 0,
    opecity: 1,
    stagger: .2,
});

shareShowtl.from("#share div i", {
    duration: .5,
    scale: 0,
    opecity: 1,
    stagger: 0.2,
});


// Onclick share button show and hide icons

shareShowtl.pause();
let count = 0;
share.addEventListener("click", function () {

    if (count === 0) {
        count = 1;
        shareShowtl.play();

    } else {
        count = 0;
        shareShowtl.reverse();
    }

});

//======================================================



var tl = gsap.timeline()

tl.to("#full", {
    right: 0,
    duration: 1,
});

tl.from('#full h4', {
    x: 150,
    opacity: 0,
    duration: 1,
    stagger: .5,
    scale: 0
});

tl.from("#full i", {
    opacity: 0,
    duration: .3,
    stagger: .5,
    scale: 0,
});
tl.pause();

menu.addEventListener('click', function () {
    tl.play();
});

closeMenu.addEventListener('click', function () {
    tl.reverse();
});

// ================================================

//                      OR

// // Show menu on click menu icon
// menu.addEventListener('click', function () {

//     tl.to("#full", {
//         right: 0,
//         duration: 1,
//     });

//     tl.from('#full h4', {
//         x: 250,
//         opacity: 0,
//         duration: .5,
//         stagger: 1,
//         scale: 0
//     });

//     tl.from("#full i", {
//         opacity: 0,
//         duration: 1,
//         stagger: 1,
//         scale: 0,
//     });
// });

// // close menu on click close icon
// closeMenu.addEventListener('click',function(){
//     gsap.to("#full",{
//         right: "-30%",
//         duration: 1,
//     })
// })
// //======================================


//TEXT ANIMATION

// Break every h1 text into every text in single span
function breakeTheText() {

    let h1 = document.querySelector("h1");

    let h1Text = h1.textContent;

    let splitedText = h1Text.split("");

    let clutter = "";

    let halfValue = Math.floor(splitedText.length / 2)

    // Every splited text add inside span tag
    splitedText.forEach(function (val, idx) {
        if (idx < halfValue) {

            clutter += `<span class="left"> ${val} </span>`;
        } else {
            clutter += `<span class="right"> ${val} </span>`;
        }
    });

    h1.innerHTML = clutter;
};
breakeTheText();
// =====================================

gsap.from(".left", {
    y: 100,
    duration: .8,
    delay: 1,
    stagger: .15,
    opacity: 0,
});

gsap.from(".right", {
    y: 100,
    duration: .8,
    delay: 1,
    stagger: -.15,
    opacity: 0,
});

// =================================================



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