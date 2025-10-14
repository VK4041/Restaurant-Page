export default function showHomePage() {
  const contentDiv = document.querySelector("#content");
  const heading = document.createElement("h1");
  const subHeading = document.createElement("p");

  heading.textContent = "Poozoo Bites Restaurant";
  subHeading.textContent = "Authentic Indian Cuisine";

  contentDiv.appendChild(heading);
  contentDiv.appendChild(subHeading);
}
