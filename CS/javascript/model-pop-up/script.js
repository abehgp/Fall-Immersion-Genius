document.addEventListener("DOMContentLoaded", () => {


    const modal = document.getElementById("myModal");
    const  openModalButton = document.getElementById("openModal");
    const closeModalButton = document.getElementById("closeModal");
 
 


 

     openModelButton.addEventListener("click", () =>{
        model.style.display = "block";
    });

    closeModelButton.addEventListener("click", () =>{
        model.style.display = "none";
    });
 
 
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            model.style.display = "none";
        }
    });
 });