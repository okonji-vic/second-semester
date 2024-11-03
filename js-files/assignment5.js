let checkbox = document.getElementById("hamburger-checkbox");
let listItems = document.querySelectorAll(".hamburger-li");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    console.log("checked");
    listItems.forEach((li) => {
      li.style.display = "block";
      li.style.transition = "0.5s";
      span1.style.transform = "rotate(45deg) translate(10px, 5px)";
      span2.style.opacity = "0";
      span3.style.transform = "rotate(-45deg) translate(5px, -5px)";
      li.classList.add("hamburger-li");
    });
  } else {
    console.log("not checked");
    listItems.forEach((li) => {
      li.style.display = "none";
      span1.style.transform = "rotate(0deg) translate(0px, 0px)";
      span2.style.opacity = "1";
      span3.style.transform = "rotate(0deg) translate(0px, 0px)";
    });
  }
});
