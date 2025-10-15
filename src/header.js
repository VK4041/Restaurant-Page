export default function showHeader() {
  const header = document.querySelector("header");
  const nav = document.createElement("nav");
  const tabNames = ["Home", "Menu", "Contact"];
  const tabs = Array.from({ length: 3 }, () =>
    document.createElement("button")
  );
  tabs.forEach((tab, index) => {
    tab.textContent = tabNames[index];
    nav.appendChild(tab);
  });
  header.appendChild(nav);
}
