let toggle = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let mainLinks = Array.from(document.querySelectorAll("nav > ul > li>a"));
let dropDown = document.querySelectorAll(".drop-down");

toggle.onclick = function () {
  toggle.src = "./images/icon-hamburger.svg";
  nav.classList.toggle("show");
  if (nav.classList.contains("show")) {
    toggle.src = "./images/icon-close.svg";
  } else {
    toggle.src = "./images/icon-hamburger.svg";
  }
};

mainLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    dropDown.forEach((el) => {
      el.style.display = "none";
    });
    e.target.parentNode.children[1].style.display = "block";
    console.log(e.target);
  });
});
console.log(mainLinks);
