import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
const tabs = document.querySelectorAll("button");
tabs.forEach((tab) =>
  tab.addEventListener("click", (e) => {
    const page = e.target.textContent.toLowerCase();
    clearContent();
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
  })
);

function clearContent() {
  const contentDiv = document.querySelector("#content");
  while (contentDiv.firstChild) {
    contentDiv.lastChild.remove();
  }
}
home();
