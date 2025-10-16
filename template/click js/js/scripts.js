"use strict"

let images = [
    { src: "images/gallery-img1.jpg", class: "class1" },
    { src: "images/gallery-img2.jpg", class: "class2" },
    { src: "images/gallery-img4.jpg", class: "class3" }
];

function changeImage(index) {
    let largeImage = document.getElementById("largeImage");
    largeImage.src = images[index].src;
    largeImage.className = images[index].class;
}
