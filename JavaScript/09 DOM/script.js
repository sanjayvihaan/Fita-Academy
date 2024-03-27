// Get the input element
var form = document.getElementById('myForm');
var nameInput = document.getElementById('name');

// Add submit event listener to the form
form.addEventListener('submit', function(e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Check if the input element exists
    if (nameInput) {
        // Get the value of the input element
        var typedValue = nameInput.value.trim();

        // Check if the input value is empty
        if (typedValue === '') {
            // If empty, show an alert
            alert("Please type something before submitting!");
        } else {
            // If not empty, show a success message
            alert("Form submitted successfully!");
        }
    } else {
        // If the input element does not exist, show an error message
        console.error("Input element not found!");
    }
});