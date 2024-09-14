function counter() {
    // Write your code below. Hint: you can finish it in about 3-5 lines.
    // Create a variable and store the tag with the id "counter-number" inside it
    counter_number = document.getElementById('counter-number');

// Access the p tag and add 1 to its number
    counter_number.innerHTML = parseInt(counter_number.innerHTML) +1;
}
