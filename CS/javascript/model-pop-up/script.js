document.addEventListener('DOMContentLoaded', () => {
    // Get the modal element
    const modal = document.getElementById("myModal");
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');

    //Event listener for the open modal button
    openModalButton.addEventListener('click', () => {
    document.getElementById('myModal').style.display = 'block';
});


    //Event listener to close modal when clicking on the 'X' button
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    //Event listener to close modal when clicking outside the modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});