var select = document.querySelectorAll(".select");

select.forEach((ele) => {
  ele.onclick = function () {
    this.classList.toggle("active");
  };
});

/* ------------------- start removeAside ----------------------*/
var aside = document.querySelector("aside");
function removeAside(e) {
  aside.classList.toggle("active");
}
/* ------------------- end removeAside ----------------------*/

/* ------------------- start document ----------------------*/
document.onclick = function (e) {
  select.forEach((ele) => {
    if (
      !e.target.classList.contains("select") &&
      !e.target.parentElement.classList.contains("select")
    ) {
      ele.classList.remove("active");
    }
  });

  console.log(e.target);

  if (e.target.classList.contains("main_side")) {
    aside.classList.remove("active");
  }
};
/* ------------------- end document ----------------------*/
/* ------------------- start changePhotot ----------------------*/
function changePhotot(e) {
  e.target.parentElement.parentElement.querySelector("a img").src =
    e.target.getAttribute("src");
  e.target.parentElement.querySelectorAll("img").forEach((ele) => {
    ele.classList.remove("active");
  });
  e.target.classList.add("active");
}
/* ------------------- end changePhotot ----------------------*/
