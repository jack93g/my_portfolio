document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const responseDiv = document.getElementById("message-response");

    // Simple validation
    if (!name || !email || !message) {
      responseDiv.textContent = "Please fill out all fields.";
      responseDiv.style.display = "block";
      responseDiv.style.color = "red";
      return;
    }

    // Assuming the data is valid and sending the form data
    responseDiv.textContent = "Thank you for your submission!";
    responseDiv.style.display = "block";
    responseDiv.style.color = "green";

    // Clear form fields
    document.getElementById("contact-form").reset();
  });

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("login-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get the login method value
      var loginMethod = document.querySelector(
        'input[name="login-method"]:checked'
      ).value;

      // Push the login event to the dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "login",
        username: document.getElementById("username").value,
        loginMethod: loginMethod,
      });

      // Display a message or handle the fake login
      console.log("Login event pushed to dataLayer!");
    });
});
