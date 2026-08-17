/* Bill Mellenthin, CPA — site scripts
   Deliberately minimal. The FAQ accordion uses native <details>/<summary>,
   so the only JavaScript on the site is the mobile navigation toggle.
   Everything still works with JavaScript disabled. */

(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#site-nav");

  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  toggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("is-open"));
  });

  // Close on Escape and return focus to the button
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Close when a link is chosen
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") setOpen(false);
  });

  // Reset state if the window grows back to desktop width
  window.addEventListener("resize", function () {
    if (window.innerWidth > 760) setOpen(false);
  });
})();
