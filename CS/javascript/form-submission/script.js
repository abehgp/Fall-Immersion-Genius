document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form Submitted');
    location.reload();
});