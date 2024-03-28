Form.addEventListener('submit', function(event) {
    let messages = [];
    
    const usernameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const reviewInput = document.getElementById('review');
    const errorElement = document.getElementById('error');

    if (usernameInput.value.length < 3 || usernameInput.value.length > 25) {
        messages.push('Please enter a username between 3 and 25 characters.');
    }
    
    if (!isValidEmail(emailInput.value)) {
        messages.push('Please enter a valid email address.');
    }

    if (reviewInput.value.length > 500) {
        messages.push('Please limit your review to 500 characters.');
    }

    if (messages.length > 0) {
        event.preventDefault(); 
        
        errorElement.innerText = messages.join('\n');
    }
});

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
