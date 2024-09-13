window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const button = document.querySelector(".getStarted_button");
  console.log(button);
  if (window.scrollY > 200) {
    navbar.style.backgroundColor = "white";
    button.style.backgroundColor = "#1a8917";
  } else {
    navbar.style.backgroundColor = "#ffc017";
    button.style.backgroundColor = "black";
  }
});
