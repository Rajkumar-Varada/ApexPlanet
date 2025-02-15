document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const subject = form.querySelector('input[placeholder="Subject"]').value.trim();
      const message = form.querySelector("textarea").value.trim();

      if (name === "" || email === "" || subject === "" || message === "") {
          alert("Please fill in all fields.");
          return;
      }

      alert("Message sent successfully!");
      form.reset();
  });
});
