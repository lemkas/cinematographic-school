const toCurrency = (price) => {
  return new Intl.NumberFormat("ru-RU", {
    currency: "rub",
    style: "currency",
  }).format(price);
};

document.querySelectorAll(".price").forEach((node) => {
  node.textContent = toCurrency(node.textContent);
});

const addLesson = document.querySelector(".add-lesson");

let i = 0;

// addLesson.addEventListener("click", () => {
//   i++;
//   const form = document.querySelector(".add-form");
//   const inputField = document.createElement("div");
//   inputField.classList.add("input-field");

//   const input = document.createElement("input");
//   input.setAttribute("name", `lesson ${i}`);
//   input.setAttribute("type", "text");

//   const label = document.createElement("label");
//   label.setAttribute("for", `lesson ${i}`);
//   label.innerHTML = `Урок ${i}`;

//   form.appendChild(inputField);
//   inputField.appendChild(label);
//   inputField.appendChild(input);
// });

const $card = document.querySelector("#card");
if ($card) {
  $card.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
      const id = e.target.dataset.id;

      fetch("/card/remove/" + id, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((card) => {
          if (card.courses.length) {
            const html = card.courses
              .map((c) => {
                return `
                <tr>
                    <td>${c.title}</td>
                    <td>${c.count}</td>
                    <td>
                        <button class="btn btn-small remove" data-id="${c.id}">Удалить</button>
                    </td>
                </tr>
              
              `;
              })
              .join("");
            $card.querySelector("tbody").innerHTML = html;
            $card.querySelector(".price").textContent = toCurrency(card.price);
          } else {
            $card.innerHTML = "<p> Корзина пуста</p>";
          }
        });
    }
  });
}
