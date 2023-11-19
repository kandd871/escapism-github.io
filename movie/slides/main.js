const images = ["amelie.jpeg", "arrival.jpeg", "avatar.jpeg", "brazil.jpeg", "coraline.jpeg", "exmachina.jpg", "hp.jpeg", "inception.jpeg", "interstellar.jpeg", "stardust.jpeg", "thematrix.jpeg", "truman.jpeg"];
const imageTexts = ["Amélie", "Arrival", "Avatar", "Brazil", "Coraline", "Ex Machina", "Harry Potter", "Inception", "Interstellar", "Stardust", "The Matrix", "The Truman Show"];
let currentIndex = 0;

function changeImage(step) {
    currentIndex += step;

    // Wrap around to the first image if at the end
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Wrap around to the last image if at the beginning
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    const sliderImage = document.getElementById("sliderImage");
    sliderImage.src = "imgs/" + images[currentIndex];

    // Update corresponding text
    const imageText = document.getElementById("imageText");
    imageText.textContent = "[" + imageTexts[currentIndex] + "]";

    // Update Prev button link
    const prevBtn = document.getElementById("prevBtn");
    if (currentIndex === 0) {
        prevBtn.removeAttribute("onclick");
        prevBtn.innerHTML = `<a href="../index.html"><img id="arrow1" src="arrow.png"></a>`;
    } else {
        prevBtn.setAttribute("onclick", "changeImage(-1)");
        // prevBtn.innerHTML = `<button onclick="changeImage(-1)"><img id="arrow1" src="arrow.png"></button>`;

    }

    // Update Next button link and remove onclick attribute
    const nextBtn = document.getElementById("nextBtn");
    if (currentIndex === images.length - 1) {
        nextBtn.removeAttribute("onclick");
        nextBtn.innerHTML = `<a href="../../music/index.html"><img id="arrow2" src="arrow.png"></a>`;

    } else {
        nextBtn.setAttribute("onclick", "changeImage(1)");
        // nextBtn.innerHTML = `<button onclick="changeImage(1)"><img id="arrow2" src="arrow.png"></button>`;

    }
}
