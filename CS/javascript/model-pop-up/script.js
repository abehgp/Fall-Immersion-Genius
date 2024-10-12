document.addEventListener("DOMContnetLoaded", () => {
    // Get modal elements

    // Event listner to open modal



    //Event listner to close modal whern clicking on the 'X' button
    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    //Event listner to close modal when clicking modal content
    window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }    
    });
});