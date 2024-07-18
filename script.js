/*EMAIL*/
document
  .getElementById("email-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const errorMessage = document.getElementById("error-message");
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regex.test(email)) {
      errorMessage.textContent = "Email không hợp lệ. Vui lòng nhập lại.";
    } else {
      errorMessage.textContent = "";
      document.getElementById("form-container").classList.add("hide");
      document.getElementById("info-container").classList.remove("hide");
    }
  });

/*VIEW MORE*/
document.addEventListener("DOMContentLoaded", function () {
  const viewMoreButtons = document.querySelectorAll(".view-more");

  viewMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const target = document.querySelector(this.getAttribute("data-target"));
      if (target.classList.contains("hide")) {
        target.classList.remove("hide");
        this.textContent = "View Less";
      } else {
        target.classList.add("hide");
        this.textContent = "View More";
      }
    });
  });
});
