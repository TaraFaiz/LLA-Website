const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

window.addEventListener("load", () => {
    window.scrollTo(0, 40);
});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 200; i++) {

    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.8 + 0.3,
        speed: Math.random() * 0.5,
        opacity: Math.random()
    });
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        star.y += star.speed;

        if (star.y > canvas.height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        const colors = [
    `rgba(255, 182, 217, ${star.opacity})`, // pink
    `rgba(255, 255, 255, ${star.opacity})`, // white
    `rgba(255, 215, 0, ${star.opacity})`    // gold
];

ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];

ctx.shadowBlur = 8;
ctx.shadowColor = "rgba(255,255,255,0.6)";

        ctx.fill();
    });

    requestAnimationFrame(animateStars);
}

animateStars();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Scroll to Contact Section on "Get Started" click
const scrollButtons = document.querySelectorAll(".scroll-contact");

scrollButtons.forEach(button => {
    button.addEventListener("click", () => {
        const contactSection = document.getElementById("contact");
        contactSection.scrollIntoView({ behavior: "smooth" });
    });
});
