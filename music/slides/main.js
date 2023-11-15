const data = [
    {
        "song": "Fearless",
        "artist": "Pink Floyd",
        "duration": "6:08",
        "img": "imgs/fearless.jpeg",
        "color": "#69B7C1"
    },
    {
        "song": "Where Is My Mind?",
        "artist": "The Pixies",
        "duration": "3:49",
        "img": "imgs/mind.jpg",
        "color": "#45342C"
    },
    {
        "song": "Scar Tissue",
        "artist": "Red Hot Chili Peppers",
        "duration": "3:35",
        "img": "imgs/scar.jpeg",
        "color": "#E37018"
    },
    {
        "song": "Enter Galactic (Love Connection Part I)",
        "artist": "Kid Cudi",
        "duration": "4:20",
        "img": "imgs/enter.jpeg",
        "color": "#471671"
    },
    {
        "song": "Space Oddity - 2015 Remaster",
        "artist": "David Bowie",
        "duration": "5:18",
        "img": "imgs/space.jpeg",
        "color": "#5CBF88"
    },
    {
        "song": "Gloomy Sunday",
        "artist": "Billie Holiday",
        "duration": "3:11",
        "img": "imgs/billie.jpg",
        "color": "#3C382F"
    },
     {
        "song": "Let It Happen",
        "artist": "Tame Impala",
        "duration": "7:47",
        "img": "imgs/tame.png",
        "color": "#E32833"
    },
    {
        "song": "Someday",
        "artist": "The Strokes",
        "duration": "3:03",
        "img": "imgs/some.png",
        "color": "#285A50"
    },
    {
        "song": "All The Small Things",
        "artist": "blink-182",
        "duration": "2:47",
        "img": "imgs/all.jpeg",
        "color": "#09BDE7"
    },
    {
        "song": "See the Sun",
        "artist": "The Kooks",
        "duration": "3:36",
        "img": "imgs/sun.jpeg",
        "color": "#0B1C3A"
    }
];

let currentIndex = 0;

function changeImage(step) {
    currentIndex += step;

    // Wrap around to the first image if at the end
    if (currentIndex >= data.length) {
        currentIndex = 0;
    }

    // Wrap around to the last image if at the beginning
    if (currentIndex < 0) {
        currentIndex = data.length - 1;
    }

    const sliderImage = document.getElementById("sliderImage");
    sliderImage.src = data[currentIndex].img;

    document.body.style.backgroundColor = data[currentIndex].color;

    const beforeSong = document.querySelector(".beforesong"); // Updated selector
    beforeSong.style.background = `linear-gradient(to right, transparent 0%, ${data[currentIndex].color} 10%)`;

    // Update corresponding text
    const songText = document.querySelector(".song"); // Added missing line
    const artistText = document.querySelector(".artist");
    const endText = document.querySelector(".end");
    songText.textContent = data[currentIndex].song;
    artistText.textContent = data[currentIndex].artist;
    endText.textContent = data[currentIndex].duration;

    // Update Prev button link
    const prevBtn = document.getElementById("prevBtn");
    if (currentIndex === 0) {
        prevBtn.removeAttribute("onclick");
        prevBtn.innerHTML = `<a href="../index.html"><img id="arrow1" src="arrow2.png"></a>`;
    } else {
        prevBtn.setAttribute("onclick", "changeImage(-1)");
    }

    // Update Next button link and remove onclick attribute
    const nextBtn = document.getElementById("nextBtn");
    if (currentIndex === data.length - 1) {
        nextBtn.removeAttribute("onclick");
        nextBtn.innerHTML = `<a href="../../play/index.html"><img id="arrow2" src="arrow2.png"></a>`;
    } else {
        nextBtn.setAttribute("onclick", "changeImage(1)");
    }
}
