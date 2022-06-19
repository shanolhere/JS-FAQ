const plus = document.querySelectorAll(".plus");
const close = document.querySelectorAll(".close");
const para = document.querySelectorAll(".faq p");
const faq = document.querySelectorAll(".faq");

for (let i = 0; i < faq.length; i++) {
  plus[i].addEventListener("click", () => {
    para[i].style.display = "block";
    close[i].style.display = "block";
    plus[i].style.display = "none";
  });
  close[i].addEventListener("click", () => {
    para[i].style.display = "none";
    close[i].style.display = "none";
    plus[i].style.display = "block";
  });
}
