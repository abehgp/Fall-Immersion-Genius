document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked');
    image_tag = document.createElement('img');
    image_tag.src = '';
    document.body.appendChild(image_tag)
});