const data = [
    { "user": "virtigex", "info": "Walk my dog early in the morning. We pretend we are navigating an apocalyptic landscape in the search for treats.", "color": "#EBFF00" },
    { "user": "wertyuio234", "info": "Stargazing sets me straight.", "color": "#FA00FF" },
    { "user": "[deleted]", "info": "stay up awfully late", "color": "#D9D9D9" },
    { "user": "[deleted]", "info": "Read fantasy fiction.", "color": "#D9D9D9" },
    { "user": "e-rekt-ion", "info": "Hmm isn’t that why we’re all here on Reddit?", "color": "red" },    
    { "user": "GT_334", "info": "Shower....time flows slow in there for some reason", "color": "#56835A" },
    { "user": "damnoice", "info": "daydream", "color": "#FFB774" },
    { "user": "[deleted]", "info": "Write fiction. Read fiction. Gaming.", "color": "#D9D9D9" },
    { "user": "northsideindian", "info": "Not today narc", "color": "#F2D642" },
    { "user": "[deleted]", "info": "Drugs", "color": "#FF9DE3" },
    { "user": "misstaken66", "info": "Listen to music", "color": "#007AFF" },
    { "user": "Unhappy_Mongoose_778", "info": "Garden. Saved me from depression. No meds ever worked.", "color": "#5F76CB" },    
    { "user": "Relative_Economics22", "info": "Sleep. Too depressed and broke to even try anything else", "color": "#36FF16" },
    { "user": "TubzMcgee", "info": "Think about yo momma", "color": "#DCE4FF" },
    { "user": "TheVginyTcikler44", "info": "Eat.", "color": "#B10000" },    
    { "user": "MinnestoanPerson", "info": "Come here, and read.<br><br>Edit: just got back from school and saw this.", "color": "#29BF2F" },
    { "user": "katzgar", "info": "youtube", "color": "#3B4C42" },
    { "user": "DeionizableNormality", "info": "Imagine how things might get better in my life if I tweaked a few things, practice gratitude, meditate, read fiction, talk to my parents, learn about interesting things on Reddit or the web in general, audiobook while taking an evening walk. Sometimes I like to act as though nobody around me can see me and I slip into a child like curiosity.<br><br>The other day I was walking around my apartment complex in some kaki shorts and a plaid button down/my Fanny pack sashed around my shoulder. I went into the office area to try and find this back terrace I saw while walking around the building. I found myself in the gym where they had one of those Walmart brand peloton bikes. I decided… why not give it a go! Even though everyone was looking at me in the gym like I wasn’t supposed to be there, I went for a stationary two-mile bike ride while listening to my book. Happily got off after my ride, cleaned the machine, and went on my way to continue my adventure.<br><br>It seems to me that the quality of mind you’re carrying about with you will help a ton. It’s much better to slip back into that childlike curiosity than dwell on your adult life where circumstances are only moderately malleable. Slipping into that curiosity is what really makes all of these stories about people’s disconnection so salient. Whether it’s reading, daydreaming, gaming, etc. everyone is portraying a level of childlike curiosity about their lives and minds have to offer. It’s not so serious; enjoy this life and the people around you will enjoy theirs more too.", "color": "#FF8D3B" },
    { "user": "Fbg_dello", "info": "Smoke weed", "color": "#89F1FF" },
    { "user": "tarani5", "info": "SciFi or Fantasy movies", "color": "#FF00B8" },
    { "user": "Casperios", "info": "Either escape into my own mind, or go into vr.<br><br>For me, they are kinda similar", "color": "#00C2FF" },
    { "user": "palmni01", "info": "I find a cozy, somewhat isolated section of a trail or creek and smoke a cigar while listening to podcasts. Can't say it's the healthiest habit, but it gets me outdoors and makes me less anxious.", "color": "#4CA45A" },
    { "user": "DragonKorny", "info": "Listen to an audiobook in a bed with a thick warm blanket", "color": "#9E22FF" },
    { "user": "Ancient-Pause-99", "info": "watch tv", "color": "#745963" },
    { "user": "[deleted]", "info": "it's hard work trying to find reality in this culture.<br><br>Everything is a distraction from the real world.", "color": "#D9D9D9" },
    { "user": "TybroV", "info": "Nothing. There's no escape.", "color": "#FF9DE3" },
    { "user": "dontjustexists", "info": "Video games", "color": "#1700A4" },
    { "user": "D3SYNK", "info": "Late at night, I take my bike and ride to my old elementary school that's now a public park. I sit down on the same bench I've always sat at, and I start recording.<br><br> I've found that talking my problems out, or talking about anything, just helps me to escape. Some of those audio logs I've listened to countless times. I catch myself thinking \"wow, I actually said that.\" <br><br> Maybe someday I'll post them online, or preserve them as a memento to the times I\'ve lived through.<br><br> I can tell you right now, if I never started making those logs I wouldn't be half the person I am now.", "color": "#D9D9D9" },
    { "user": "[deleted]", "info": "Dissociate", "color": "#D9D9D9" },
    { "user": "purpleowlie", "info": "Exercise and if I have more time go for a longer hike and enjoy nature. I don't care how old I am I will always enjoy walking around forest, fallen leaves up to your knees, kicking them around, listening to rustling. And walking on freshly fallen snow.", "color": "#605CFF" },
];

const data1 = [
    { "user": "duckies_wild", "info": "Shockingly low is this. I'd have thought \"Reddit\" would be in the top 5", "color": "#7659B6", "level": "1" },
    { "user": "ThisAltDoesNotExist", "info": "ITT: People who distract themselves with Reddit trying to distract from that with tales of other distractions.", "color": "#D6E15A", "level": "2" },
    { "user": "tinyskates", "info": "I like to distract myself by going to Reddit and replying to comments about people who distract themselves with Reddit trying to distract from that with tales of other distractions. <br><br>Redditception!", "color": "#E0D6A2", "level": "3" },
    { "user": "cavelioness", "info": "acknowledging that you distract yourself from reality with Reddit is too much reality while you're on Reddit.", "color": "#7F4D29", "level": "2" },
    { "user": "[deleted]", "info": "This is not by any means a Karma grab. I could care less about that. I found out my brother passed from Covid about 4 hours ago. I’ve just been reading intriguing posts on Reddit ever since. It has really helped me not think about it. Probably way too many replies in the past few hours.", "color": "#D9D9D9", "level": "1" },
    { "user": "[deleted]", "info": "Same it has been my routine since last year", "color": "#D9D9D9", "level": "1" }
];



function createElements() {
    const minis = document.querySelector('.minis');
    let minnestoanPersonEncountered = false;

    // Adjust the widthFactor as needed
    const widthFactor = 5; // You can adjust this to control the width

    data.forEach(item => {
        const minibox = document.createElement('div');
        minibox.className = 'minibox';

        // Check if the info includes "movie," "tv," or "music" in a case-insensitive manner
        const miniheader = document.createElement('div');
        miniheader.className = 'miniheader';

        const minicircle = document.createElement('div');
        minicircle.className = 'minicircle';
        minicircle.style.backgroundColor = item.color;

        const userElement = document.createElement('div');
        userElement.className = 'miniuser';
        userElement.innerHTML = `<b>${item.user}</b> • 2 yr ago`;

        const minitext = document.createElement('div');
        minitext.className = 'minitext';
        minitext.textContent = item.info;
        minitext.innerHTML = item.info.replace(/\n/g, '<br>');

        if (
            item.info.toLowerCase().includes('movie') ||
            item.info.toLowerCase().includes('tv') ||
            item.info.toLowerCase().includes('music') ||
            item.info.toLowerCase().includes('vr') ||
            item.info.toLowerCase().includes('game') ||
            item.info.toLowerCase().includes('youtube') ||
            item.info.toLowerCase().includes('reddit')
        ) {
            minibox.style.backgroundColor = item.color;
            minibox.style.color = 'white';
            minicircle.style.backgroundColor = 'white';
        }

        // Append elements to their respective parent elements
        miniheader.appendChild(minicircle);
        miniheader.appendChild(userElement);
        minibox.appendChild(miniheader);
        minibox.appendChild(minitext);

        // Append minibox to the body container
        minis.appendChild(minibox);

        if (item.user === 'tarani5') {
            const anchor = document.createElement('a');
            anchor.href = '../movie/index.html';
            anchor.addEventListener('click', (event) => {
                event.preventDefault();
                window.open('../movie/index.html', '_blank', 'width=600,height=400');
            });

            anchor.appendChild(minibox);
            minis.appendChild(anchor);

            anchor.addEventListener('mouseenter', () => {
                minibox.style.transform = 'scale(1.9) rotate(15deg)';
                minibox.style.marginLeft = '11.4vw';
            });

            anchor.addEventListener('mouseleave', () => {
                minibox.style.transform = 'scale(1)';
                minibox.style.marginLeft = '0vw';
            });
        }

        if (item.user === 'misstaken66') {
            const anchor = document.createElement('a');
            anchor.href = '../music/index.html';
            anchor.addEventListener('click', (event) => {
            event.preventDefault();
            window.open('../music/index.html', '_blank', 'width=600,height=400');
             });
            anchor.appendChild(minibox);
            minis.appendChild(anchor);
            anchor.addEventListener('mouseenter', () => {
                        minibox.style.transform = 'scale(1.9) rotate(-10deg)';
                        minibox.style.marginLeft = '11.4vw';
                    });
                    anchor.addEventListener('mouseleave', () => {
                        minibox.style.transform = 'scale(1)';
                         minibox.style.marginLeft = '0vw';
                    });
        }

        if (item.user === 'e-rekt-ion') {
            const anchor = document.createElement('a');
            anchor.href = '../play/index.html';
            anchor.addEventListener('click', (event) => {
            event.preventDefault();
            window.open('../play/index.html', '_blank', 'width=600,height=400');
             });
            anchor.appendChild(minibox);
            minis.appendChild(anchor);
            anchor.addEventListener('mouseenter', () => {
                        minibox.style.transform = 'scale(1.9) rotate(22deg)';
                        minibox.style.marginLeft = '11vw';
                    });
                    anchor.addEventListener('mouseleave', () => {
                        minibox.style.transform = 'scale(1)';
                         minibox.style.marginLeft = '0vw';
                    });
        }

        if (item.user === 'dontjustexists') {
            const anchor = document.createElement('a');
            anchor.href = '../play/sites/tablet/index.html';
            anchor.addEventListener('click', (event) => {
            event.preventDefault();
            window.open('../play/sites/tablet/index.html', '_blank', 'width=600,height=400');
             });
            anchor.appendChild(minibox);
            minis.appendChild(anchor);
            anchor.addEventListener('mouseenter', () => {
                        minibox.style.transform = 'scale(1.9) rotate(22deg)';
                        minibox.style.marginLeft = '11vw';
                    });
                    anchor.addEventListener('mouseleave', () => {
                        minibox.style.transform = 'scale(1)';
                         minibox.style.marginLeft = '0vw';
                    });
        }


        // Check if the user is "MinnestoanPerson"
        if (item.user === 'MinnestoanPerson') {
            minnestoanPersonEncountered = true;

            // Loop through the data1 array to create additional miniboxes
            data1.forEach(data1Item => {
                const minibox = document.createElement('div');
                minibox.className = 'minibox2';

                // Adjust font size based on the level
                const fontSize =
                    data1Item.level === '1' ? '2.5vh' : data1Item.level === '2' ? '2vh' : '1.5vh';
                minibox.style.fontSize = fontSize;

                // Adjust margin-left based on the level
                const marginLeft =
                    data1Item.level === '1' ? '4vw' : data1Item.level === '2' ? '8vw' : '12vw';
                minibox.style.marginLeft = marginLeft;

                const miniheader = document.createElement('div');
                miniheader.className = 'miniheader';

                const minicircle = document.createElement('div');
                minicircle.className = 'minicircle';
                minicircle.style.backgroundColor = data1Item.color;

                const miniuser = document.createElement('div');
                miniuser.className = 'miniuser';
                miniuser.innerHTML = `<b>${data1Item.user}</b> • 2 yr ago`;

                const minitext = document.createElement('div');
                minitext.className = 'minitext';
                minitext.textContent = data1Item.info;
                minitext.innerHTML = data1Item.info.replace(/\n/g, '<br>');

                if (
                    data1Item.info.toLowerCase().includes('movie') ||
                    data1Item.info.toLowerCase().includes('reddit')
                ) {
                    minibox.style.backgroundColor = data1Item.color;
                    minibox.style.color = 'white';
                    minicircle.style.backgroundColor = 'white';
                    minicircle.style.border = 'none';
                }

                // Append elements to their respective parent elements
                miniheader.appendChild(minicircle);
                miniheader.appendChild(miniuser);
                minibox.appendChild(miniheader);
                minibox.appendChild(minitext);

                // Append minibox to the body container
                minis.appendChild(minibox);
            });
        }
    });
}

// Call the function to create elements
createElements();




