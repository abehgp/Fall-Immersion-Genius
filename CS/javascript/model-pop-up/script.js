document.addEventListener("DOMContentLoaded", () => {
    // Get modal elements


    // Event listener to open modal


    // Event listener to close modal when clicking on the 'X' button
    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Event listener to close modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});