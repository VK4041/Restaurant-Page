export default function showContactPage() {
  const contentDiv = document.querySelector("#content");
  const heading = document.createElement("h1");
  heading.textContent = "Phone: 101481241";
  contentDiv.appendChild(heading);
}
