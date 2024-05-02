let griglia = document.getElementById("grid");
let easy = document.getElementById("ez");
let mid = document.getElementById("mid");
let hard = document.getElementById("hard");

for (let i = 1; i <= 100; i++) {
  const element = `<div class="square-easy ${i}">${i}</div>`;
  griglia.innerHTML += element;
}

easy.addEventListener("click", function () {
  griglia.classList.remove("square-mid");
  griglia.classList.remove("square-hard");
  console.log("click");
});

for (let i = 1; i <= 80; i++) {
  const element = `<div class="square-mid ${i}">${i}</div>`;
  griglia.innerHTML += element;
}
for (let i = 1; i <= 50; i++) {
  const element = `<div class="square-hard ${i}">${i}</div>`;
  griglia.innerHTML += element;
}
