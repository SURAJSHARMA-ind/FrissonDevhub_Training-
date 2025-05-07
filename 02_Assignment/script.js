document.addEventListener("DOMContentLoaded", function() {
  const sidebar = document.getElementById("sidebar");
  const usercontainer = document.getElementById("usercontainer");
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebarClose = document.getElementById("sidebarClose");

  if (sidebarToggle && sidebar && usercontainer) {
    sidebarToggle.addEventListener("click", function() {
      sidebar.classList.remove("sidebar-hidden");
      usercontainer.classList.remove("usercontainer-fullwidth");
    });
  }

  if (sidebarClose && sidebar && usercontainer) {
    sidebarClose.addEventListener("click", function() {
      sidebar.classList.add("sidebar-hidden");
      usercontainer.classList.add("usercontainer-fullwidth");
    });
  }
});