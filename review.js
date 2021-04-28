//local reviews data
const reviews = [
    {
        id: 1,
        name: 'Susan Smith',
        job: 'Web Developer',
        img: "https://images.generated.photos/JTLRRLXOwKjp7Lnb5FIkpo6RrSkq1pyn-SAps7SHJJI/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxODUxMTMuanBn.jpg",
        text: "I'm a baby meggins twee health goth.  Bicycle rights tumeric.  Whatever image is continuing.  You have a data in Ajax."
    },

    {
        id: 2,
        name: 'David Daveed',
        job: 'Annoying Person',
        img: "https://generated.photos/vue-static/home/hero/6.png",
        text: "I don't think he did anything that isn't putting yourself out there and having a thing that isn't a thing."
    },
    {
        id: 3,
        name: 'Good Luck',
        job: 'Appropriate Worker',
        img: "https://randus.org/photos/m/001c3e1f3f3e1c0c.jpg",
        text: "I just hope we don't have to talk about ratings and reviews because to everyone that is the future."
    },

    {
        id: 4,
        name: 'Demetri Jackson',
        job: 'Art Man',
        img: "https://www.thextraordinary.org/media/k2/items/cache/9f6d22dec5a20bcdd01cd84e98637764_L.jpg",
        text: "Submit everything and tell everyone that they are all great with sound effects."
    },
]

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function() {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});

//Random Insult Generator

const randomBodyParts = ['head', 'arms', 'legs', 'feet', 'toes', 'hips'];
const randomAdjectives = ['smelly', 'stupid', 'ugly', 'dumb', 'boring'];
const randomWords = ['apple pie', 'dog', 'shit', 'cloud', 'glitter'];


let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 6)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 5)];
let randomWord = randomWords[Math.floor(Math.random() * 5)];

console.log(`Your ${randomBodyPart} is like a ${randomAdjective} ${randomWord}!`);