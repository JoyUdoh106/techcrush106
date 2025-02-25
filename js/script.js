const menuButton = document.getElementById("menuButton");
const dropdownMenu = document.getElementById("dropdownMenu")

menuButton.addEventListener("click", () => {
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
})

document.addEventListener("click", (event) => {
    if(!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = "none";
    }
}) 