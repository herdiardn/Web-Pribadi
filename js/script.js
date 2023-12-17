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

//Pergerakan smooth pada setiap section

document.addEventListener("DOMContentLoaded", function (e) {
  const aboutSection = document.getElementById("home");
  const aboutLink = document.querySelector('.navbar-nav a[href="#home"]');
  aboutLink.addEventListener("click", function (event) {
    event.preventDefault();
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });
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
document.addEventListener("DOMContentLoaded", function (e) {
  const aboutSection = document.getElementById("Services");
  const aboutLink = document.querySelector('.navbar-nav a[href="#Services"]');
  aboutLink.addEventListener("click", function (event) {
    event.preventDefault();
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });
});
document.addEventListener("DOMContentLoaded", function (e) {
  const aboutSection = document.getElementById("Project");
  const aboutLink = document.querySelector('.navbar-nav a[href="#Project"]');
  aboutLink.addEventListener("click", function (event) {
    event.preventDefault();
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });
});
document.addEventListener("DOMContentLoaded", function (e) {
  const aboutSection = document.getElementById("Contact");
  const aboutLink = document.querySelector('.navbar-nav a[href="#Contact"]');
  aboutLink.addEventListener("click", function (event) {
    event.preventDefault();
    aboutSection.scrollIntoView({ behavior: "smooth" });
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

document.addEventListener("DOMContentLoaded", function () {
  // Menampilkan konten "Education" secara otomatis saat halaman dimuat
  showSection("Education");
});

let lastClickedLink = document.getElementById("education-link");

function showSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    // Hapus kelas active dari link sebelumnya (jika ada)
    if (lastClickedLink) {
      lastClickedLink.classList.remove("active");
    }

    // Tambahkan kelas active pada link saat ini
    const currentLink = document.getElementById(
      `${sectionId.toLowerCase()}-link`
    );
    currentLink.classList.add("active");
    lastClickedLink = currentLink;

    // Menampilkan konten yang sesuai
    const sections = document.getElementsByClassName("section-content");
    for (let i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }

    section.style.display = "block";
  }
}

// FORM
function sendEmail() {
  const form = document.getElementById("contactForm");
  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "send_email.php", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      alert("Email sent successfully!");
      form.reset();
    } else {
      alert("Error sending email.");
    }
  };
  xhr.send(formData);
}
