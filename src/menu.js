export default function showMenuPage() {
  const contentDiv = document.querySelector("#content");
  const heading = document.createElement("h1");
  const menu = document.createElement("ul");
  const menuItems = Array.from({ length: 10 }, document.createElement("li"));

  heading.textContent = "Menu";
  menu.textContent = "Main Course";
  menuItems.forEach((item) => {
    item.textContent = "Some food item";
    menu.appendChild(item);
  });

  contentDiv.appendChild(heading);
  contentDiv.appendChild(menu);
}
