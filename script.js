document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the values of the username and password fields
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Perform validation checks
  if (username.trim() === '') {
    alert('Please enter a username.');
    return;
  }

  if (password.trim() === '') {
    alert('Please enter a password.');
    return;
  }

  // If all checks pass, you can proceed with form submission
  alert('Form submitted successfully!');
  // You can also use AJAX to submit the form data to a server

  // Reset the form
  document.getElementById('loginForm').reset();
});



