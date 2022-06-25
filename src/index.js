import "./styles/example.scss";
import { refs } from "./scripts/refs";
import { createLi, addLiToList } from "./scripts/markup";
import { storage } from "./scripts/storage";

const handleMount = () => {
  const listFromStorage = storage.getItem("list", []);
  const markup = listFromStorage.reduce(
    (acc, text) => acc + createLi(text),
    ""
  );
  addLiToList(markup);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const value = refs.input.value;
  const liItem = createLi(value);
  addLiToList(liItem);
  const result = storage.getItem("list", []);
  result.push(value);
  storage.addItem("list", result);

  refs.input.value = "";
};
refs.form.addEventListener("submit", handleSubmit);
addEventListener("DOMContentLoaded", handleMount);

// Логіка роботи з данними localStorage:
// 1) Прочитати localStorage
// 2) Перетворити в масив з JSON.parse
// 3) Запушити в масив нові данні
// 4) Конвертувати новий масив в JSON
// 5) Записати новий JSON у localStorage
