export default function showFooter() {
  const footer = document.querySelector("footer");
  const footerText = document.createElement("a");

  footerText.textContent = "Made by Varun Kumar";
  footerText.href = "https://github.com/VK4041";
  footerText.target = "_blank";
  footer.appendChild(footerText);
}
