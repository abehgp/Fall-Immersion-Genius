document.addEventListener("DOMContentLoaded", () => {
    const model = document.getElementById("myModel");
    const openModelButton = document.getElementById("openModel");
    const closeModelButton = document.getElementById("closeModel");
    
    
    openModelButton.addEventListener("click", () => {
        model.style.display="block";
    })
    
        closeModelButton.addEventListener("click", () => {
            model.style.display="none";
        })
    window.addEventListener("click", (event) => {
        if (event.target == model){
            model.style.display="none";
        }
    })

});
    








