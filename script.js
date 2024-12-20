document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to allow validation

    // Get values from form fields
    const name = document.getElementById('studentName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const course = document.getElementById('course').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Simple validation (e.g., checking if fields are not empty)
    if (name && email && dob && course && phone && address) {
        alert('Registration successful!');

        // Optionally clear the form after successful submission
        document.getElementById('registrationForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
