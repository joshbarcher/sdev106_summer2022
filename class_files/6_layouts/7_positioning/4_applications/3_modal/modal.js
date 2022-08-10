/* wait for the window to load */
window.onload = function() {
    /* hide the modal when you click on the button */
    let button = document.querySelector("button");
    button.onclick = function() {
        let modalCover = document.querySelector("#modal-cover");
        modalCover.style.display = "none";
    }
}
