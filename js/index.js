const navbar = document.querySelector(".navbar");
document.addEventListener("scroll", () => {
    let scroll_pos = window.scrollY;
    if (scroll_pos > 740) {
        navbar.style.backgroundColor = "black";
        navbar.style.marginTop = "0";
        navbar.style.opacity = "1";
    }
    else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.opacity = "0.7";
    }
    if (scroll_pos === 0){
        navbar.style.marginTop="2rem";
    }
});