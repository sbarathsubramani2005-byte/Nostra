let offerBar = document.getElementById("offer-bar")
let closeBtn = document.getElementById("close-btn")

if(closeBtn){
closeBtn.addEventListener("click",function(){
offerBar.style.display = "none"
})
}

// Mobile Sidebar

let menuBtn = document.getElementById("menu-btn")
let sideNav = document.getElementById("side-nav")
let closeNav = document.getElementById("close-nav")

if(menuBtn){
menuBtn.addEventListener("click",function(){
sideNav.style.right = "0"
})
}

if(closeNav){
closeNav.addEventListener("click",function(){
sideNav.style.right= "-250px"
})
}

// Hero Slider

let sliderImages = [
"p2.jpg",
"p3.jpg",
"p4.jpg"
]

let currentImage = 0

function nextImage(){


currentImage++

if(currentImage >= sliderImages.length){
    currentImage = 0
}

document.getElementById("slider").src =
sliderImages[currentImage]


}

function prevImage(){


currentImage--

if(currentImage < 0){
    currentImage = sliderImages.length - 1
}

document.getElementById("slider").src =
sliderImages[currentImage]

}

// Auto Slider

setInterval(function(){


let slider = document.getElementById("slider")

if(slider){

    currentImage++

    if(currentImage >= sliderImages.length){
        currentImage = 0
    }

    slider.src = sliderImages[currentImage]

}

},3000)

// Heart Button

let hearts = document.querySelectorAll(".heart")

hearts.forEach(function(heart){


heart.addEventListener("click",function(){

    heart.classList.toggle("liked")

    if(heart.classList.contains("liked")){

        heart.classList.remove("fa-regular")
        heart.classList.add("fa-solid")

    }

    else{

        heart.classList.remove("fa-solid")
        heart.classList.add("fa-regular")

    }

})

})

// Newsletter

let subscribeBtn =
document.getElementById("subscribe-btn")

if(subscribeBtn){


subscribeBtn.addEventListener("click",function(){

    alert("Subscribed Successfully")

})
}
