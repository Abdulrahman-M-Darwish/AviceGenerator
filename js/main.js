const dice = document.querySelector(".circle");
const content = document.querySelector(".peace-of-adivice");
const numberOfAdvice = document.querySelector(".id");

const generateAdvice = async () => {
  const data = await fetch("https://api.adviceslip.com/advice");
  const response = await data.json();
  const { advice, id } = response.slip;
  content.textContent = `"${advice}"`;
  numberOfAdvice.textContent = `advice #${id}`;
};

dice.addEventListener("click", generateAdvice);
