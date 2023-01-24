const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkEmail();
});

function checkEmail() {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setError(email, "Oops! Please add your email");
  } else if (!isEmail(emailValue)) {
    setError(email, "Oops! that doesn't look like an email address");
  }
}

function setError(input, message) {
  const small = document.querySelector("small");

  small.textContent = message;
  small.className = "error";
  email.className = "error";
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
