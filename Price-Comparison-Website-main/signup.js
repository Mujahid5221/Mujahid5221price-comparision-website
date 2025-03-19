function validateForm() 
{
  // Get form inputs
  var email = document.getElementById("email").value;
  var phone = document.getElementById("ph").value;
  var password = document.getElementById("psw").value;
  var confirmPassword = document.getElementById("cpsw").value;

  // Regular expressions for validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phoneRegex = /^\d{10}$/;

  // Check email
  if (!email.match(emailRegex)) {
      alert("Please enter a valid email address");
      return false;
  }

  // Check phone number
  if (!phone.match(phoneRegex)) {
      alert("Please enter a valid 10-digit phone number");
      return false;
  }

  // Check password length
  if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return false;
  }

  // Check if password and confirm password match
  if (password !== confirmPassword){
      alert("Passwords do not match");
      return false;
  }
  // If all validations pass, the form is valid
  return true;
}
