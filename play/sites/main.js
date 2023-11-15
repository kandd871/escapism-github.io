const websites = [
    {
        "websiteName": "The Bored Button",
        "url": "https://www.boredbutton.com/",
        "img": "imgs/bored.png"
    },
    {
        "websiteName": "Every Noise at Once",
        "url": "https://everynoise.com/",
        "img": "imgs/noise.png"
    },
    {
        "websiteName": "Are.na",
        "url": "https://www.are.na/",
        "img": "imgs/arena.png"
    },
    {
        "websiteName": "Poptropica",
        "url": "poptropica.com",
        "img": "imgs/pop.png"
    },
    {
        "websiteName": "chess.com",
        "url": "chess.com",
        "img": "imgs/chess.png"
    },
    {
        "websiteName": "MapCrunch",
        "url": "https://www.mapcrunch.com/",
        "img": "imgs/map.png"
    },
    {
        "websiteName": "The Useless Web",
        "url": "https://theuselessweb.com/",
        "img": "imgs/useless.png"
    },
    {
        "websiteName": "Akinator",
        "url": "https://en.akinator.com/",
        "img": "imgs/akin.png"
    },
    {
        "websiteName": "Wordle",
        "url": "https://www.nytimes.com/games/wordle/index.html",
        "img": "imgs/wordle.png"
    },
    {
        "websiteName": "The Kanye Zone",
        "url": "http://www.kanyezone.com/",
        "img": "imgs/kanye.png"
    },
    {
        "websiteName": "Skribbl",
        "url": "https://skribbl.io/",
        "img": "imgs/skribbl.png"
    },
    {
        "websiteName": "Webtoons",
        "url": "https://www.webtoons.com/en/",
        "img": "imgs/web.png"
    },
    {
        "websiteName": "This American Life",
        "url": "https://www.thisamericanlife.org/",
        "img": "imgs/live.png"
    },
    {
        "websiteName": "100,000 Stars",
        "url": "https://stars.chromeexperiments.com/",
        "img": "imgs/stars.png"
    },
    {
        "websiteName": "Museum of Endangered Sounds",
        "url": "http://savethesounds.info/",
        "img": "imgs/sound.png"
    },
    {
        "websiteName": "Little Alchemy",
        "url": "https://littlealchemy.com/",
        "img": "imgs/alc.png"
    }
]


document.addEventListener('DOMContentLoaded', function () {
    const contentDiv = document.getElementById("content");

    // Create a box for each website
    websites.forEach(website => {
        const boxDiv = document.createElement("div");
        boxDiv.classList.add("box");

        const img = document.createElement("img");
        img.src = website.img;

        const anchor = document.createElement("a");
        anchor.href = website.url;

        const nameDiv = document.createElement("div");
        nameDiv.classList.add("name");
        nameDiv.textContent = '🔗 ' + website.websiteName;

        anchor.appendChild(nameDiv);
        boxDiv.appendChild(img);
        boxDiv.appendChild(anchor);
        contentDiv.appendChild(boxDiv);
    });
});





