document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

   const successMessage = document.getElementById("successMessage");
    successMessage.classList.remove("hidden"); // Show the success message
    
    //Resetting the form fields
    this.reset();   
});