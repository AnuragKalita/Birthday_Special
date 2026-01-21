const images = [
    {
        src: "images/memory1.jpeg",
        text: "You didn’t know I took this, but I loved this moment."
    },
    {
        src: "images/memory2.jpeg",
        text: "Nothing special — yet it became special because of you."
    },
    {
        src: "images/memory3.jpeg",
        text: "One of those memories I never want to lose."
    },
    {
        src: "images/memory4.jpeg",
        text: "Beautiful, Pure, Untainted."
    },
    {
        src: "images/memory5.jpeg",
        text: "My pretty bestie 🎀"
    },
    {
        src: "images/memory6.jpeg",
        text: "How did i met you, i'm in shock."
    }
];

let current = 0;
let slideshowInterval;

function celebrate() {
    document.getElementById("bgMusic").play();
    document.getElementById("message").innerText =
        "I hope this year brings you peace, warmth, and moments worth holding onto.";

    startSlideshow();
}

/* Fullscreen Viewer */
function openModal(index) {
    current = index;
    document.getElementById("modal").style.display = "flex";
    showImage();
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    clearInterval(slideshowInterval);
}

function showImage() {
    document.getElementById("modalImg").src = images[current].src;
    document.getElementById("modalText").innerText = images[current].text;
}

/* Auto Slideshow */
function startSlideshow() {
    slideshowInterval = setInterval(() => {
        current = (current + 1) % images.length;
        if (document.getElementById("modal").style.display === "flex") {
            showImage();
        }
    }, 3000); // soft timing
}
