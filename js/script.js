const navbar = document.querySelector("nav");
const headerHeight = document.querySelector("header").scrollHeight;
const toggleMenu = document.querySelector(".nav-toggle");
const navList = document.querySelector("nav ul");
const toggleSpan = document.querySelectorAll(".nav-toggle span");
const navListItem = document.querySelectorAll("nav ul li a");

// Mengubah warna navbar ketika melewati header
window.onscroll = () => {
  if (window.scrollY >= headerHeight - 100) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};

// Menampilkan navbar ketika toggle diklik
toggleMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
  toggleSpan.forEach((e) => e.classList.toggle("active"));

  // Menghapus Navbar ketika list item diklik
  navListItem.forEach((e) => {
    return e.addEventListener("click", () => {
      navList.classList.remove("active");
      toggleSpan.forEach((e) => e.classList.remove("active"));
    });
  });
});
