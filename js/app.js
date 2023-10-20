// Tu código aquí.
let counterValue = 0;

const contador = document.getElementById("counter");
const btnLower = document.querySelector(".prevBtn");
const btnAdd = document.querySelector(".nextBtn");

//Cambio de color del contador
function updateColorCounter() {
  contador.textContent = counterValue;
  if (counterValue === 0) {
    contador.style.color = "var(--mainBlack)";
  } else {
    contador.style.color = counterValue < 0 ? "red" : "green";
  }
}

//Botón decrementar
btnLower.addEventListener("click", () => {
  counterValue--;
  updateColorCounter();
});

//Botón incrementar
btnAdd.addEventListener("click", () => {
  counterValue++;
  updateColorCounter();
});
