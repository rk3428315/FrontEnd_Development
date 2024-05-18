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