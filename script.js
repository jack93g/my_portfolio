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

document
  .getElementById("login-field")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve the username
    var username = document.getElementById("username").value;

    // Push custom login event to the data layer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "login",
      username: username,
    });

    // Optionally, you can handle form submission or redirection here
    // For example, redirect to another page
    // window.location.href = 'another-page.html';

    console.log(
      "Custom login event pushed to data layer with username:",
      username
    );
  });
