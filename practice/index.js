document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>
`;
const input = document.querySelector("input");
const button = document.querySelector("button");

function hash() {
  let count = input.value;
  for (let i = 1; i <= count; i++) {
    console.log("#".repeat(i));
  }
}
button.addEventListener("click", hash);

