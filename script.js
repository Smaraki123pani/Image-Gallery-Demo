let scrollImages = document.querySelector(".images");
let nextBtn = document.getElementById("nextbtn");
let prevBtn = document.getElementById("prevbtn");

scrollImages.addEventListener("wheel", (e) => {
  e.preventDefault();

//   scrollImages.style.scrollBehavior = auto;
  scrollImages.scrollLeft += e.deltaY;
});

nextBtn.addEventListener("click", () => {
  scrollImages.style.scrollBehavior = "smooth"; //smooth scrolling
  scrollImages.scrollLeft += 900;
});

prevBtn.addEventListener("click", () => {
  scrollImages.style.scrollBehavior = "smooth"; //smooth scrolling
  scrollImages.scrollLeft -= 900;
});
