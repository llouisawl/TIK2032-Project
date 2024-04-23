var typingEffect = new Typed(".multitext", {
  strings: ["Louisa", "Antonia", "Wulan", "Lolong"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 50);
});

const togglebar = document.querySelector(".toggle");
const menu = document.querySelector("ol");

function navToggle() {
  togglebar.classList.toggle("active");
  menu.classList.toggle("active");
}

document.querySelectorAll(".content .frame .box img").forEach((image) => {
  image.addEventListener("click", () => {
    const imageUrl = image.getAttribute("src");
    const popupImage = document.querySelector(".popup-image img");

    popupImage.setAttribute("src", imageUrl);
    document.querySelector(".popup-image").style.display = "block";
  });
});

document.querySelector(".popup-image span").addEventListener("click", () => {
  document.querySelector(".popup-image").style.display = "none";
});
