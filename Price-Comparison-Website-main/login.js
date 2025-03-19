function validateForm() 
{
  // Get form inputs
  var email = document.getElementById("email").value;
  var password = document.getElementById("psw").value;

  // Regular expressions for validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check email
  if (!email.match(emailRegex)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Check password length
  if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    return false;
  }

  // If all validations pass, the form is valid
  return true;
}
