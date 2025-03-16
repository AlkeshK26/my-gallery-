

// Function to toggle password visibility
function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.getElementById('togglePassword');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;

    // Change the icon based on the visibility state
    toggleIcon.classList.toggle('fa-eye');
    toggleIcon.classList.toggle('fa-eye-slash');
}

// Function to handle signup
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get user data from input fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Store user data in local storage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert('Account created successfully! You can now log in.');
});

// Function to handle login (to be implemented separately)
function login(email, password) {
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
        alert('Login successful!');
        // Redirect or perform any other actions
    } else {
        alert('Invalid email or password.');
    }
}
