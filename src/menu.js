import samosa from "./Images/samosa.jpg";
import bread_pakoda from "./Images/bread_pakoda.jpg";
import dosa from "./Images/dosa.jpg";
import paneer_tikka from "./Images/paneer_tikka.jpg";
import butter_chicken from "./Images/butter_chicken.jpg";
import garlic_naan from "./Images/garlic_naan.jpg";
import mango_lassi from "./Images/mango_lassi.jpg";
import gulab_jamun from "./Images/gulab_jamun.jpg";
import family_combo from "./Images/family_combo.jpg";
import drinks from "./Images/drinks.jpg";
const menuItems = [
  {
    name: "Samosa",
    description: "A crispy and savoury snack wth a spicy potato filling",
    price: "5",
    path: samosa,
  },
  {
    name: "Bread Pakoda",
    description: "Battered and fried sandwich with spicy potato filling",
    price: "8",
    path: bread_pakoda,
  },
  {
    name: "Dosa",
    description: "Thin and crispy pancake made with lentils",
    price: "15",
    path: dosa,
  },
  {
    name: "Paneer Tikka",
    description: "Tandoori roasted paneer/cottage cheese with roasted veggies",
    price: "25",
    path: paneer_tikka,
  },
  {
    name: "Butter Chicken",
    description:
      "World-famous chicken dish with a silky and smooth buttery gravy",
    price: "30",
    path: butter_chicken,
  },
  {
    name: "Garlic Naan",
    description:
      "Partner in food crime with the butter chicken, delicious tandoori bread with garlic butter garnish",
    price: "12",
    path: garlic_naan,
  },
  {
    name: "Mango Lassi",
    description: "Sweet, earthy and mango-y goodness",
    price: "15",
    path: mango_lassi,
  },
  {
    name: "Gulab Jamun",
    description: "Soft and sweet, delicious ball of goodness",
    price: "10",
    path: gulab_jamun,
  },
  {
    name: "Family Combo",
    description: "All items from our menu at a discounted rate",
    price: "60",
    path: family_combo,
  },
  {
    name: "Drinks",
    description: "Your choice of 600ml soft drink",
    price: "5",
    path: drinks,
  },
];

export default function showMenuPage() {
  const contentDiv = document.querySelector("#content");
  const heading = document.createElement("h1");
  heading.textContent = "Menu";
  contentDiv.appendChild(heading);

  menuItems.forEach((element) => {
    const item = new Item(element);
    contentDiv.appendChild(item.setItemStyles(element));
  });
}

class Item {
  constructor(itemObject) {
    this.name = itemObject.name;
    this.description = itemObject.description;
    this.price = itemObject.price;
    this.path = itemObject.path;
  }

  setItemStyles(item) {
    const itemContainer = document.createElement("div");
    const nameContainer = document.createElement("div");
    const itemPic = document.createElement("img");
    const itemName = document.createElement("div");
    const itemDesc = document.createElement("div");
    const itemPrice = document.createElement("div");

    nameContainer.appendChild(itemName);
    nameContainer.appendChild(itemDesc);

    itemContainer.appendChild(itemPic);
    itemContainer.appendChild(nameContainer);
    itemContainer.appendChild(itemPrice);

    nameContainer.classList.add("name-container");
    itemContainer.classList.add("item-container");

    itemPic.src = item.path;
    itemPic.classList.add("item-image");

    itemName.classList.add("item-name");
    itemName.textContent = item.name;

    itemDesc.classList.add("item-desc");
    itemDesc.textContent = item.description;

    itemPrice.classList.add("item-price");
    itemPrice.textContent = item.price;
    return itemContainer;
  }
}
function appendMenuItem(container) {}
