let main = document.querySelector('#main');
let cursor = document.querySelector('#cursor');
let image = document.querySelector('#img');


// move cursor
main.addEventListener('mousemove', function (val) {
    // we select here cursor div using cursor variable
    gsap.to(cursor, {
        x: val.x,
        y: val.y,
        duration: 1,
        ease: "back.out"
    })
});
//=======================================================


// move cursor effect over img
// mouse enter
image.addEventListener("mouseenter", function () {
    cursor.innerHTML = "View more"
    gsap.to(cursor, {
        scale: 3,
        backgroundColor: "rgba(255, 255, 255, 0.173)"
    })
});

// mouse leave
image.addEventListener("mouseleave", function () {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "white",
    })
});

//==============================================