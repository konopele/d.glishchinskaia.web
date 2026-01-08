// This file is intentionally left blank.
const topbar = document.getElementById("topbar");
const toggle = document.getElementById("menuToggle");

toggle.addEventListener("click", () => {
  const isOpen = !topbar.classList.contains("is-open");
  topbar.classList.toggle("is-open", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
});
