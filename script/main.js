(function () {
  "use strict";

  function setFooterYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  function animateSkillBars() {
    var bars = document.querySelectorAll(".skill-bar-fill[data-level]");
    if (!bars.length) return;

    bars.forEach(function (bar) {
      var level = bar.getAttribute("data-level") || "0";
      requestAnimationFrame(function () {
        bar.style.width = level + "%";
      });
    });
  }

  function validateField(field) {
    var errorEl = field.parentElement.querySelector(".field-error");
    var message = "";

    if (field.hasAttribute("required") && !field.value.trim()) {
      message = "This field is required.";
    } else if (field.type === "email" && field.value.trim()) {
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(field.value.trim())) {
        message = "Enter a valid email address.";
      }
    }

    if (errorEl) errorEl.textContent = message;
    field.setAttribute("aria-invalid", message ? "true" : "false");
    return !message;
  }

  function setupContactForm() {
    var form = document.querySelector("#contact-form");
    if (!form) return;

    var status = form.querySelector(".form-status");
    var fields = form.querySelectorAll("input[required], textarea[required], input[type='email']");

    fields.forEach(function (field) {
      field.addEventListener("blur", function () {
        validateField(field);
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var isValid = true;
      fields.forEach(function (field) {
        if (!validateField(field)) isValid = false;
      });

      if (!status) return;

      status.classList.remove("success", "error");

      if (!isValid) {
        status.textContent = "Please fix the highlighted fields and try again.";
        status.classList.add("visible", "error");
        return;
      }

      // No backend is wired up yet — this simulates a successful send
      // so the form is ready to connect to a real endpoint later.
      status.textContent = "Thanks — your message has been noted. I'll reply by email shortly.";
      status.classList.add("visible", "success");
      form.reset();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setFooterYear();
    animateSkillBars();
    setupContactForm();
  });
})();
