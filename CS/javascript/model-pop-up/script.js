document.addEventListener("DOMContentLoaded", () => {
    // Get modal elements
    const modal = document.getElementById('modal');
    const closeModalButton = document.getElementById('closeModalButton');
    
    // Event listener to open modal
    const openModalButton = document.getElementById('openModalButton');
    openModalButton.addEventListener("click", () => {
        modal.style.display = "block";
    });

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
