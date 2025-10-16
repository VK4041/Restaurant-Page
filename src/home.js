import bannerImage from "./Images/home-image.jpg";

export default function showHomePage() {
  const contentDiv = document.querySelector("#content");
  const heading = document.createElement("h1");
  const homeImg = document.createElement("img");
  heading.textContent = "Authentic Indian Restaurant";
  homeImg.src = bannerImage;
  homeImg.classList.add("banner-image");

  contentDiv.appendChild(heading);
  contentDiv.appendChild(homeImg);
}
