// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

//Ketika menu di klik
document.querySelector("#Menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar side bar menghilangkan nav
const menu = document.querySelector("#Menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function (e) {
  // Ambil elemen yang ingin dituju saat "About" diklik
  const aboutSection = document.getElementById("About");

  // Ambil elemen tombol "About" dari navbar
  const aboutLink = document.querySelector('.navbar-nav a[href="#About"]');

  // Tambahkan event listener untuk menangani klik pada tombol "About"
  aboutLink.addEventListener("click", function (event) {
    event.preventDefault(); // Untuk mencegah aksi default dari link
    aboutSection.scrollIntoView({ behavior: "smooth" }); // Gulir ke bagian "About" dengan animasi smooth
  });
});

$(document).ready(function () {
  // Hide all section contents initially
  $(".section-content").hide();

  // Show the default section (Education)
  showSection("#Education");

  // Event handlers for each menu item
  $(".About-menu a").click(function (e) {
    e.preventDefault();
    var targetSectionId = $(this).attr("href");
    showSection(targetSectionId);
  });
});

// Function to show/hide the corresponding section
function showSection(sectionId) {
  $(".section-content").hide();
  $(sectionId).show();
}
