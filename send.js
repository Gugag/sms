function sendSMS() {
  console.log("Sending SMS...");
  const personNumber = document.getElementById('numberInput').value;
  const textInput = document.getElementById('textInput').value;

  fetch('https://api.twilio.com/2010-04-01/Accounts/SK0542431a25749409aa64461c2b438260/Messages.json', {
      method: 'POST',
      headers: {
          'Authorization': 'Basic ' + btoa('0iSEn9msabq7sV44UTJxMJUmGwJ1CXLx'),
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
          From: '+16504259178',
          To: personNumber,
          Body: textInput
      })
  })
  .then(response => {
      console.log("Response:", response);
      if (response.ok) {
          console.log("SMS sent successfully");
          displayAlert("SMS sent successfully", "success");
          // Handle success, e.g., show a success message to the user
      } else {
          console.error("Failed to send SMS");
          displayAlert("Failed to send SMS", "error");
          // Handle failure, e.g., show an error message to the user
      }
  })
  .catch(error => {
      console.error("Error:", error);
      displayAlert("Error occurred while sending SMS", "error");
      // Handle error, e.g., show an error message to the user
  });
}

function displayAlert(message, type) {
  const alertMessage = document.getElementById('alertMessage');
  alertMessage.textContent = message;
  alertMessage.classList.add(type);
  alertMessage.style.display = "block";

  // Hide the alert after 3 seconds
  setTimeout(() => {
      alertMessage.style.display = "none";
      alertMessage.classList.remove(type);
  }, 3000);
}
