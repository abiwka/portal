var yourImages = ["annie-spratt-fDghTk7Typw-unsplash.jpg", "eberhard-grossgasteiger-NvesrDbsrL4-unsplash.jpg"];

var randomImage = Math.round(Math.random() * yourImages.length);

function displayImage() {
    document.write(yourImages[randomImage]);
}