let ultimoScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let scrollActual = window.scrollY;

    if (scrollActual > ultimoScroll) {
        header.style.top = "-100px"; // Oculta al bajar
    } else {
        header.style.top = "0"; // Muestra al subir
    }

    ultimoScroll = scrollActual;
});