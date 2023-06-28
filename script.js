document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const error = document.querySelector(".error");
  const email = document.getElementById("email");

  const main = document.querySelector(".main");
  const successModal = document.querySelector(".success-modal");
  const dismissBtn = document.querySelector(".success-dismiss-btn");
  const submittedEmail = document.querySelector(".submitted-email");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailValue = email.value;

    if (emailValue === "" || !checkEmail(emailValue)) {
      error.textContent = "* Valid email is required!";
      email.style.backgroundColor = "hsla(4, 100%, 67%, 0.2)";
      email.style.borderColor = "var(--clr-tomato)";
      email.style.color = "var(--clr-tomato)";
    } else {
      main.style.display = "none";
      submittedEmail.textContent = emailValue;
      successModal.style.display = "flex";

      email.value = "";

      error.textContent = "";
      email.style.backgroundColor = "var(--clr-white)";
      email.style.borderColor = "var(--clr-grey)";
      email.style.color = "var(--clr-dark-gray)";

    }

    dismissBtn.addEventListener("click", () => {
      main.style.display = "flex";
      successModal.style.display = "none";
    });
  });

  const checkEmail = (email) => {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regEx.test(email);
  };
});
