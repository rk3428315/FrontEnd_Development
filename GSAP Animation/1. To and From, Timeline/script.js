// animate using to fuction start to finish  position
gsap.to("#box1", {
    x: 1070,                    // move box 1070px on x axis
    duration: 5,                // take time move box in 5 sec
    delay: 1,                   // move after 1 sec
    rotate: 360,                // rotate 360 degree
    backgroundColor: "green",   // change backgroundColor
    borderRadius: "50%",        // change borderRadius
    scale: .5                   // change size of box
});

// animate using to fuction finish to start  position
gsap.from("#box2", {
    x: 500,
    y: 400,
    duration: 5,
    delay: 1,
    rotate: 60,
    backgroundColor: "green",
    repeat: -1,                  // to move infinite times if want 1 times then repeat : 1
    yoyo: true,                  // go back with same move
});


gsap.from("h1", {
    opacity: 0,      // opacity will be hide to visible
    color: "grey",   // color will be grey to black
    y: 50,           // move content 50px on y axis from end to start
    duration: 2,     // duration of animation
    delay: 2,        // start animation after 2 seconds
    // stagger:2,      // animate every h1 one by one afer one second in asc
    stagger: -2,     // animate every h1 one by one afer one second in des

});

gsap.to("#box3",{
    x:1500,
    duration:1.5,
    rotate: 360,
    delay:1,
});

gsap.to("#box4",{
    x:1500,
    backgroundColor:"yellow",
    duration:1.5,
    rotate: 360,
    delay:2.5,
});



var tl = gsap.timeline();

tl.from("h2",{
    y:-30,
    opacity:0,
    duration:2,
    delay:1,
    color:"green",
});

tl.from("h3",{
    y:-30,
    opacity:0,
    duration:1,
    delay:1,
    color:"green",
    stagger:0.5
});

tl.from("#main-text",{
    y:30,
    duration:1,
    opecity:0,
    scale:0
})

