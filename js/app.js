const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const angle = document.getElementById("range");
const h2 = document.querySelector("h2");

const body = document.querySelector("body");
function Gradient() {
  body.style.background = `linear-gradient(${range.value}deg, ${color1.value}, ${color2.value})`;
  h2.textContent = `${body.style.background};`;
}

const input = document.querySelectorAll("input");
input.forEach((input) => {
  // input.style.border = "none";
  // input.style.padding = "10px";
  // input.style.borderRadius = "1px";
  // input.style.backgroundColor = "none";
  input.addEventListener("input", Gradient);
});
