export default function toggleMenu() {
    const navToggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-list");

    navToggle.addEventListener("click", function () {
        links.classList.toggle("show-links");
    });
}