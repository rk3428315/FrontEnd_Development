
// For mouse hover nav tab color will change

let home = document.querySelectorAll("#nav-tab h2");
home.forEach(function (ele) {

    // At mouse over color will change into red
    ele.addEventListener("mouseenter", function () {
        ele.style.color = "red";
    });

    // At mouse leave color will change into black
    ele.addEventListener("mouseleave", function () {
        ele.style.color = "black";
    })
});
//----------------------------------------------


// On click menu show all tabs and hide

let menuValue = true;
function menuClick() {
    // For show the menu tabs on click
    if (menuValue == true) {
        menuValue = false;

        var blureBackground = document.querySelector('#content');
        blureBackground.classList.add("mainblure");

        var background = document.querySelector('#nav-tab');
        blureBackground.classList.add("nav-tab");

        // document.getElementById('nav-tab').addEventListener("blure",function(){
        //     document.querySelector("#content").style.display = "none"
        // })

        let showTab = document.querySelectorAll("#nav-tab h2");
        showTab.forEach(function (ele) {
            ele.style.display = "block";
        });

    }
    else {
        // For hide the menu tabs on click
        menuValue = true;
        var blureBackground = document.querySelector('#content');
        blureBackground.classList.remove("mainblure");

        var background = document.querySelector('#nav-tab');
        background.classList.remove("nav-tab");

        // document.getElementById('nav-tab').addEventListener("blure",function(){
        //     document.querySelector("#content").style.display = "block"
        // })   

        let showTab = document.querySelectorAll("#nav-tab h2");
        showTab.forEach(function (ele) {
            ele.style.display = "none";
        });
    }
}
//-------------------------------------------------------

// Show the images from the given arrays images

let imgArray = [

    { imgName: "img1", imgUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGphdmFzY3JpcHR8ZW58MHx8MHx8fDA%3D" },
    { imgName: "img2", imgUrl: "https://plus.unsplash.com/premium_photo-1664297847109-a01715c2dc8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D" },
    { imgName: "img4", imgUrl: "https://images.unsplash.com/photo-1632882765546-1ee75f53becb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGphdmFzY3JpcHR8ZW58MHx8MHx8fDA%3D" },
    { imgName: "img5", imgUrl: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D" }
]

let row = "";
imgArray.forEach(function (arr) {
    row += `<img src="${arr.imgUrl}" alt="'Img Error'">`;

});
document.querySelector('#img-container').innerHTML = row;

//------------------------------------------------------------





// On search for images then page will hide and show

let search = true;
let inputValue = document.querySelector('#search input');

inputValue.addEventListener("input", function () {

    // To filter the images name with enter the input value using search box

    const filterValue = imgArray.filter(
        // here store all array in single expression (arr)
        arr => arr.imgName.toLocaleLowerCase().startsWith(inputValue.value));
    let clutter = "";
    filterValue.forEach(function (value) {
        clutter +=
            `<img src="${value.imgUrl}" alt="'Img Error'">               
                        <h2>${value.imgName}</h2>`;
    });

    document.querySelector('#search-images').innerHTML = clutter;

    //---------------------------------------------------------------------

    if (inputValue.value) {

        search = false;
        var blureBackground = document.querySelector('#content');
        blureBackground.style.filter = "blur(1vw)";

        var blureBackground1 = document.querySelector('#img-container');
        blureBackground1.style.display = "none";

        var showSearhItems = document.querySelector('#onSearch');
        showSearhItems.style.display = "block";


    } else {
        var blureBackground = document.querySelector('#content');
        blureBackground.style.filter = "brightness()";

        var blureBackground1 = document.querySelector('#img-container');
        blureBackground1.style.display = "block";

        var showSearhItems = document.querySelector('#onSearch');
        showSearhItems.style.display = "none";
        search = true;

    }


})

//--------------------------------------------------------------------

let input = document.querySelector('#search input');
input.addEventListener("input", function () {

    if (input.value === ' ') {
        input.value = "";
        console.log(input.value, "remove");
    }
    else {
        console.log(input.value, "remove");

    }
})