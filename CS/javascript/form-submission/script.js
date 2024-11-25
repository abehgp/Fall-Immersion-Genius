document.getElementById('myForm').addEventListenersubmit, function (event) {
    event.preventDefault();
    alert('Form Submitted')
    location.reload()
};