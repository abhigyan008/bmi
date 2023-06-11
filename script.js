function calculateBMI() {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height)) {
    document.getElementById("result").innerHTML = "Please enter valid weight and height.";
    return;
  }

  var bmi = weight / (height * height);
  bmi = bmi.toFixed(2);

  var message = "Your BMI is " + bmi + ". ";

  if (bmi < 18.5) {
    message += "You are underweight.";
  } else if (bmi >= 18.5 && bmi < 25) {
    message += "You have a normal weight.";
  } else if (bmi >= 25 && bmi < 30) {
    message += "You are overweight.";
  } else {
    message += "You are obese.";
  }

  document.getElementById("result").innerHTML = message;
}

function register() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Perform desired actions with the registration data
  // For demonstration purposes, simply display the registration data in the console
  console.log("Username: " + username);
  console.log("Email: " + email);
  console.log("Password: " + password);

  alert("Registration successful!");
}
