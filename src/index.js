import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
const nav = document.querySelector("nav");

nav.addEventListener("click", (e) => {
  const page = e.target.textContent.toLowerCase();
  console.log(page);
  switch (page) {
    case "home":
      home();
      break;
    case "menu":
      menu();
      break;
    case "contact":
      contact();
      break;
    default:
      home();
  }
});
home();
