import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
import header from "./header.js";
import footer from "./footer.js";
import "./styles.css";

header();
home();
footer();
const tabs = document.querySelectorAll("nav>button");

function showSelectedTab(tab) {
  tab.classList.add("selected");
}
function clearContent(tabs) {
  const contentDiv = document.querySelector("#content");
  tabs.forEach((tab) => tab.classList.remove("selected"));
  while (contentDiv.firstChild) {
    contentDiv.lastChild.remove();
  }
}
function tabSwitcher(event) {
  const tabName = event.target;
  const pageName = tabName.textContent.toLowerCase();

  clearContent(tabs);
  showSelectedTab(tabName);
  switch (pageName) {
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
}
tabs.forEach((tab) => tab.addEventListener("click", tabSwitcher));
