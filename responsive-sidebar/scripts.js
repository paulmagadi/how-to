
const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");
const main = document.querySelector(".main-content");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    main.classList.toggle("expanded");

    if (sidebar.classList.contains("collapsed")) {
        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    } else {
        toggleBtn.innerHTML = '<i class="fa-solid fa-angle-left"></i><i class="fas fa-bars"></i>';
    }
});

const toggleBtnTopnav = document.getElementById("toggle-btn-topbar");
toggleBtnTopnav.addEventListener("click", () => {
sidebar.classList.toggle("show");
    if (sidebar.classList.contains("show")) {
        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    } else {
        toggleBtn.innerHTML = '<i class="fa-solid fa-angle-left"></i><i class="fas fa-bars"></i>';
    }
});

const exitSidebar = document.getElementById("exit-sidebar");

exitSidebar.addEventListener("click", () => {
    sidebar.classList.remove("show");
});