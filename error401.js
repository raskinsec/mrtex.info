// JavaScript code to handle redirection for 401 error
function handle401Error() {
    // Replace 'your-email@example.com' with the desired email address
    var email = 'inquiries@mrtex.info';
    
    // Redirect to the email address
    window.location.href = 'mailto:' + email;
}

// Simulate a 401 error (replace this with actual logic to detect 401 errors)
var simulate401Error = true;

// Check if a 401 error should be simulated
if (simulate401Error) {
    // Call the function to handle the 401 error
    handle401Error();
}
