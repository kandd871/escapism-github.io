const data = [
    {
        "name": "Animal Crossing",
        "img": "imgs/animal.png",
        "time": "1 yr. ago",
        "username": "spesifikbrush",
        "text": "I emded up getting a Switch for Animal Crossing. It’s everything I always wanted."
    },
    {
        "name": "Minecraft",
        "img": "imgs/minecraft.jpeg",
        "time": "3 yr. ago",
        "username": "[deleted]",
        "text": "Minecraft has been doing the trick for me during the pandemic, as you can basically build/do whatever you want."
    },
    {
        "name": "Skyrim",
        "img": "imgs/skyrim.jpeg",
        "time": "1 yr. ago",
        "username": "Impossible-Ad1374",
        "text": "Skyrim. You can make potions and armor but you have to look for the supplies to do so. If you buy a house and you can a garden to grow them. You go on quests you can marry and adopt children. Pretty wild"
    },
    {
        "name": "Stardew Valley",
        "img": "imgs/stardew.jpeg",
        "time": "2 yr. ago",
        "username": "VeganFruitTart",
        "text": "Try Stardew Valley! Very calm, chill, and rewarding! Also, if you aren’t doing the best mentally, seek out companionship from friends and family as well. Hang in there! :)"
    },
    
    {
        "name": "9th Dawn III",
        "img": "imgs/dawn.jpeg",
        "time": "1 yr. ago",
        "username": "diamond_hands98",
        "text": "I bought 9th dawn 3 the other day after reading this subreddit and I swear to god I’ve put in 70 hours already (20 just afk mining)"
    },
    {
        "name": "Sky: Children of the Light",
        "img": "imgs/light.png",
        "time": "6 mo. ago",
        "username": "soulvaki",
        "text": "I just started finally playing Sky: Children of the Light. I got lost in it last night. It's quite a visual and audible journey."
    }
];


let currentIndex = 0;
let startY = 0;

function updateCarousel() {
    const message = document.querySelector('.message');
    const time = document.querySelector('.time');
    const name = document.querySelector('.name b');
    const text = document.querySelector('.text');
    const sliderImage = document.getElementById('sliderImage');

    const currentMessage = data[currentIndex];

    time.textContent = currentMessage.time;
    name.textContent = currentMessage.username;
    text.textContent = currentMessage.text;
    sliderImage.src = currentMessage.img;
}

function handleTouchStart(event) {
    startY = event.touches[0].clientY;
}

function handleTouchMove(event) {
    const currentY = event.touches[0].clientY;
    const deltaY = currentY - startY;

    const message = document.querySelector('.message');
    message.style.transform = `translateY(${deltaY}px)`;
}

function handleTouchEnd(event) {
    const threshold = 50;

    if (Math.abs(startY - event.changedTouches[0].clientY) > threshold) {
        // Determine the direction of the swipe
        const direction = (startY - event.changedTouches[0].clientY) > 0 ? -1 : 1;

        currentIndex = (currentIndex + direction + data.length) % data.length;
        updateCarousel();
    }

    const message = document.querySelector('.message');
    message.style.transform = 'translateY(0)';
}

// Set up touch event listeners
const box = document.querySelector('.box');
box.addEventListener('touchstart', handleTouchStart, false);
box.addEventListener('touchmove', handleTouchMove, false);
box.addEventListener('touchend', handleTouchEnd, false);

// Initial update
updateCarousel();

