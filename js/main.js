// Dropdown Toggle
// Dropdown Toggle for all dropdown buttons
document.querySelectorAll('.dropdown-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.opacity = "0";
      setTimeout(function() {
        dropdownContent.style.display = "none";
      }, 300);
    } else {
      dropdownContent.style.display = "block";
      setTimeout(function() {
        dropdownContent.style.opacity = "1";
      }, 10);
    }
  });
});

// Sticky Navbar
window.onscroll = function() {stickyNav()};
var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    var target = this.getAttribute('href');
    if (target !== "#") {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
