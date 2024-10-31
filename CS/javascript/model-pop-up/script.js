document.addEventListener("DOMContentLoaded", () => {
    // Get modal elements
    const model = document.getElementById("myModel");
    const openModelButton = document.getElementById("openModel");
    const closeModelButton = document.getElementById("closeModel");

    // Event Listner to open model
    

    //Event Listner to close model when clicking on the 'X' button
   closeModelButton.addEventListener("click", () => {
    model.style.display = "none"
   });
   
   //Event Listner to close model when clicking outside the model content
    window.addEventListener("click", (event) => {
        if(event.target == model) {
            model.style.display = "none";
        }
    });
});