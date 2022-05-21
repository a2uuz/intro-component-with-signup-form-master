let button = document.querySelector("button");

button.addEventListener("click", () => {
  let form = document.querySelector("form");
  let input = document.querySelector("input");
  input.value;
  let p = document.querySelector("p");
  // let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (input.value) {
  input.style.border = "none";
    p.style.display = "none";
  } else {
    input.style.border = "red solid 2px";
    p.style.display = "block";
  }
});
