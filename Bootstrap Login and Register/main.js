const allStories = [
    {
        id: 0,
        author: "Nic Delgado",
        imageUrl: "img/img1.jpg"
    },

    {
        id: 1,
        author: "Nick Leander",
        imageUrl: "img/img2.jpg"
    },

    {
        id: 2,
        author: "Leander Delgado",
        imageUrl: "img/img3.jpg"
    },

    {
        id:  3,
        author: "Nic DGD",
        imageUrl: "img/img5.jpg"
    },

    {
        id:  4,
        author: "Nicholas Leandro",
        imageUrl: "img/img6.jpg"
    },

    {
        id:  5,
        author: "Delgado Nic",
        imageUrl: "img/img7.jpg"
    },

    {
        id:  6,
        author: "Nic Leandre",
        imageUrl: "img/img8.jpg"
    },

    {
        id:  7,
        author: "Nic Nic",
        imageUrl: "img/img9.jpg"
    },

    {
        id:  8,
        author: "Delgado Nick",
        imageUrl: "img/img10.jpg"
    },

    {
        id:  9,
        author: "Nic Leander Delgado",
        imageUrl: "img/img4.jpg"
    }
];

const stories = document.querySelector(".stories");
const storiesFullView = document.querySelector(".fullscreen");
const closebtn = document.querySelector(".closebtn");
const storyImageFull = document.querySelector(".fullscreen .story img");
const storyAuthorFull = document.querySelector(".fullscreen .story .auth");
const nextBtn = document.querySelector(".container .nextbtn");
const prevBtn = document.querySelector(".container .prevbtn");
const storiesContent = document.querySelector(".container .content");
const nextBtnFull = document.querySelector(".fullscreen .nextbtn");
const prevBtnFull = document.querySelector(".fullscreen .prevbtn");

let currentActive = 0;

const createStories = () => {
    allStories.forEach((s, i) =>{
        const story = document.createElement("div");
        story.classList.add("story");
        const img = document.createElement("img");
        img.src = s.imageUrl;
        const author = document.createElement("div");
        author.classList.add("auth");
        author.innerHTML = s.author;

        story.appendChild(img);
        story.appendChild(author);

        stories.appendChild(story);

        story.addEventListener("click", () => {
            showFullView(i);
        });
    });
};

createStories();

const showFullView = (index) => {
    currentActive = index;
    updateFullView();
    storiesFullView.classList.add("active");
};

closebtn.addEventListener("click", () => {
    storiesFullView.classList.remove("active");
});

const updateFullView = () => {
    storyImageFull.src = allStories[currentActive].imageUrl;
    storyAuthorFull.innerHTML = allStories[currentActive].author;
};

nextBtn.addEventListener("click", () => {
    storiesContent.scrollLeft += 300;
});

prevBtn.addEventListener("click", () => {
    storiesContent.scrollLeft -= 300;
});

storiesContent.addEventListener("scroll", () => {
    if (storiesContent.scrollLeft <= 24) {
        prevBtn.classList.remove("active");
    } else {
        prevBtn.classList.add("active");
    }

    let maxScrollVal 
        = storiesContent.scrollWidth - storiesContent.clientWidth - 24;

    if (storiesContent.scrollLeft >= maxScrollVal) {
        nextBtn.classList.remove("active");
    } else {
        nextBtn.classList.add("active");
    }
});

nextBtnFull.addEventListener("click", () =>{
    if (currentActive >= allStories.length - 1){
        return;
    }
    currentActive++;
    updateFullView();
});

prevBtnFull.addEventListener("click", () =>{
    if (currentActive <= 0){
        return;
    }
    currentActive--;
    updateFullView();
});