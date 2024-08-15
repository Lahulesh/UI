// function showSideAlert(message, type = "success") {
//   const alert = document.getElementById("side-alert");
//   const alertMessage = document.getElementById("side-alert-message");
//   const alertIcon = document.getElementById("side-alert-icon");

//   // Reset classes
//   alert.className = "side-alert";

//   // Add the appropriate class based on the type
//   if (type === "success") {
//     alert.classList.add("success");
//   } else if (type === "warning") {
//     alert.classList.add("warning");
//   } else if (type === "error") {
//     alert.classList.add("error");
//   }

//   alertMessage.textContent = message; // Set the message
//   alert.classList.add("show"); // Show the alert

//   // Automatically hide the alert after 3 seconds
//   setTimeout(() => {
//     alert.classList.remove("show");
//   }, 3000);
// }

function showSideAlert(message, type = "success") {
  const alert = document.getElementById("side-alert");
  const alertMessage = document.getElementById("side-alert-message");

  // Reset classes
  alert.className = "side-alert";

  // Add the appropriate class based on the type
  if (type === "success") {
    alert.classList.add("success");
  } else if (type === "warning") {
    alert.classList.add("warning");
  } else if (type === "error") {
    alert.classList.add("error");
  }

  alertMessage.textContent = message; // Set the message
  alert.classList.add("show"); // Show the alert

  // Automatically hide the alert after 3 seconds
  setTimeout(() => {
    alert.classList.remove("show");
  }, 3000);
}
// Event listener to close the alert when the close button is clicked
document.getElementById("close-alert").addEventListener("click", function () {
  document.getElementById("side-alert").classList.remove("show");
});
