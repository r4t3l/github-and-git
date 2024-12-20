const phrase = [
  "Git saves only changes, not entire files: pure efficiency!",
  "GitHub makes collaboration easy with public and private repositories.",
  "Commits tell stories: every change matters.",
  "Branches let you test ideas without breaking the main project!",
  "Git was created to manage the Linux kernel in 2005.",
  "GitHub Actions automate your workflows effortlessly.",
  "Did you know Git works offline? It's distributed!",
  "Pull Requests encourage reviews before merging changes.",
  "Forks are independent copies to experiment safely.",
  "GitHub Pages hosts websites directly from your repositories.",
  "With `git blame`, find out who wrote each line.",
  "SHA-1 in Git secures each commit with a unique identifier.",
];

const btn = document.getElementById("btn");
const display = document.getElementById("display");

//Fn randomizer

function getRandomNumber() {
  return Math.floor(Math.random() * phrase.length);
}

//Event handler display

function displayPhrase() {
  // btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  display.textContent = phrase[randomNumber];
  // });
}
