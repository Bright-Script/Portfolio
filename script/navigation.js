(function () {
  "use strict";

  function setActiveLink() {
    var links = document.querySelectorAll("nav a[href]");
    var current = window.location.pathname.split("/").pop() || "index.html";

    links.forEach(function (link) {
      var target = link.getAttribute("href").split("/").pop();
      link.classList.toggle("active", target === current);
    });
  }

  function setupMobileToggle() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector("header nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the menu after choosing a link (mobile).
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close the menu if the viewport grows back to desktop width.
    window.addEventListener("resize", function () {
      if (window.innerWidth > 720) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setActiveLink();
    setupMobileToggle();
  });
})();
