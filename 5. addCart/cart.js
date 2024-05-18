// Created a array for the bike 

productArray = [

    { name: "Super bike", price: "2,00, 000", details: "Racing", URL: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Avarage bike", price: "2,50, 000", details: "Avarage", URL: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Electric bike", price: "2,25, 000", details: "Electric", URL: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "All rounder bike", price: "2,75, 000", details: "All rounder", URL: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

]
//-------------------------------------------------------------------------


// Show all Bike details one by one

let storCart = [];

function addProduct() {
    let clutter = "";
    productArray.forEach(function (product, index) {
        clutter += ` <div class="product w-fit rounded-xl p-2 bg-white">
        <img src="${product.URL}" alt="" class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight"> ${product.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20"> ${product.details} </h3>
                    <h4 class="font-semibold mt-2"> ${product.price} </h4>
                </div>
                <button data-index=" ${index} " class=" add w-10 h-10 rounded-full shader text-yellow-400">
                    <i data-index=" ${index} " class=" add ri-add-line"></i>
                </button>
            </div>
        </div>
    </div>`
    });
    document.querySelector('.products').innerHTML = clutter;
}
addProduct();

//-----------------------------------------------------------


// Function to product in cart

function addToCart() {

    let produtClick = document.querySelector('.products');

    produtClick.addEventListener('click', function (details) {

        // To find the index tag index value that clicked

        // if (details.target.classList.contains('add')) {
        //     storCart.push(productArray[details.target.dataset.index]);
        //     console.log(productArray[details.target.dataset.index]);
        // }

        //              OR

        var target = details.target;
        var dataIndex = parseInt(target.getAttribute("data-index"));
        if (dataIndex !== null) {

            // console.log("Data index value:", dataIndex);
            for (var key in productArray) {

                let keyStore = parseInt(key);
                console.log(typeof key, "key", typeof dataIndex);
                if (keyStore === dataIndex) {

                    function storeCartObj(bikeName, urlBike, price) {
                        this.name = nameBike,
                            this.URL = urlBike,
                            this.price = priceBike
                    }

                    let nameBike = productArray[key].name;
                    let urlBike = productArray[key].URL;
                    let priceBike = productArray[key].price;
                    let indexObj = dataIndex;
                    const cartObj = new storeCartObj(nameBike, urlBike, priceBike);
                    storCart.push(cartObj);
                    localStorage.setItem("store", JSON.stringify(storCart));

                } else {

                    console.log("Key not match");
                }
            }

        }
    });


    let clutter = "";
    JSON.parse(localStorage.getItem("store")).forEach(function (product1) {
        // console.log(product1.url,"Bike name")
        clutter += `<div>
        <img src=" ${product1.URL} "
        alt="">
        <h2> ${product1.name} </h2>
        <p> ${product1.price} </p>
        </div>`;
    });
    document.querySelector('#show-cart').innerHTML = clutter;

    // window.location.reload();
};

// addToCart();
//---------------------------------------------------------

let showCart;
function showInCart() {


    showCart = true;
    document.querySelector('#cart-button').addEventListener('click', function () {
        if (showCart == true) {
            showCart = false;
            document.querySelector('#show-cart').style.display = "block";
            document.querySelector('#show-cart').style.display = "flex";


        }
        else {

            document.querySelector('#show-cart').style.display = "none";
            showCart = true;
        }
    });

}

showInCart();

addToCart();
function refreshPage() {

    window.location.reload()
} 