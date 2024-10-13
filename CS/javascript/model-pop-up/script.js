document.addEventListener("DOMContentLoaded", () => {
    // Get model elements
    const model = document.getElementById("myModel");
    const openModelButton = document.getElementById("openModel");
    const closeModelButton = document.getElementById("closeModel");

    // Event listener to open model
    openModelButton.addEventListener("click", () {
        model.style.display = "block";      You, 33 minutes ago * Uncommitted changes                                           });

    // Event listener to close model when clicking on the 'X' button
    closeModelButton.addEventListener("click", () => {
        model.style.display =  "none";
    });

    // Event listener to close model when clicking outside the model content 
    window.addEventListener("click", (event) => {
        if (event.target == model) {
            model.style.display = "none";
        }
    });
});