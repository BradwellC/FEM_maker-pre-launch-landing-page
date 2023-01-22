const email = document.getElementById("email");
const errorMessage = document.querySelector(".email_error");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  if (email.value) {
    const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email.value
    );
    if (regexMatch) {
    }
  }
});
