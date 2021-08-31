document.querySelectorAll(".price").forEach((node) => {
  node.textContent = new Intl.NumberFormat("ru-RU", {
    currency: "rub",
    style: "currency",
  }).format(node.textContent);
});

const addLesson = document.querySelector(".add-lesson");

let i = 0;

addLesson.addEventListener("click", () => {
  i++;
  const form = document.querySelector(".add-form");
  const inputField = document.createElement("div");
  inputField.classList.add("input-field");

  const input = document.createElement("input");
  input.setAttribute("name", `lesson ${i}`);
  input.setAttribute("type", "text");

  const label = document.createElement("label");
  label.setAttribute("for", `lesson ${i}`);
  label.innerHTML = `Урок ${i}`;

  form.appendChild(inputField);
  inputField.appendChild(label);
  inputField.appendChild(input);
});
