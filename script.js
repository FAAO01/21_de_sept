const surpriseButton = document.querySelector("#surpriseButton");
const hiddenNote = document.querySelector("#hiddenNote");
const petals = document.querySelector(".petals");

surpriseButton.addEventListener("click", () => {
  const isVisible = hiddenNote.classList.toggle("visible");
  surpriseButton.querySelector("span:last-child").textContent = isVisible
    ? "gracias por leerme"
    : "tengo algo más que decirte";
});

for (let index = 0; index < 15; index += 1) {
  const petal = document.createElement("span");
  petal.className = "petal-fall";
  petal.textContent = index % 3 === 0 ? "✦" : "·";
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.animationDuration = `${8 + Math.random() * 12}s`;
  petal.style.animationDelay = `${Math.random() * -15}s`;
  petal.style.fontSize = `${10 + Math.random() * 11}px`;
  petals.appendChild(petal);
}
