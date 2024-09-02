const securityInput = document.querySelector(".security-check input");
const securityBtn = document.querySelector(".security-check button");
const landing = document.querySelector(".landing");
const landingInnerBox = document.querySelector(".landing-inner-box");
const imgs = document.querySelectorAll(".img");

const display = () => {
    imgs.forEach(elem => {
        elem.style.rotate = `${(Math.random() - 0.5) * 60}deg`;
        gsap.from(elem, {
            scale: 0,
            top: "50%",
            left: "50%",
            duration: 2,
            delay: 0.5,
            opacity: 0,
            zIndex: -1
        });
    });
};

securityInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        securityBtn.click();
    }
});

securityInput.value = "45683968";

securityBtn.addEventListener("click", () => {
    if (securityInput.value === "45683968" || securityInput.value === "7233") {
        gsap.to(".security", {
            opacity: 0,
            zIndex: -1
        });

        document.querySelector("title").textContent = "Happy Birthday";
        display();
    }
});
    
landingInnerBox.addEventListener("click", () => {
    console.log("hello")
    gsap.to(landing, {
        transformOrigin: "left center",
        rotateY: "90deg",
        opacity: 0,
        duration: 1
    });
});