export default function showContactPage() {
  const contentDiv = document.querySelector("#content");
  const heading = document.createElement("h1");
  const location = document.createElement("p");
  const phone = document.createElement("p");
  const email = document.createElement("p");
  const hours = document.createElement("div");
  const contactDiv = document.createElement("div");
  heading.textContent = "Contact";
  location.textContent = `Location: ${contactDetails.location}`;
  phone.textContent = `Phone: ${contactDetails.phone}`;
  email.textContent = `Email: ${contactDetails.email}`;
  contactDetails.dailyHours.forEach((dayTiming) => {
    const day = document.createElement("p");
    const timing = document.createElement("p");
    const timingDiv = document.createElement("div");
    day.textContent = Object.keys(dayTiming);
    timing.textContent = Object.values(dayTiming);
    timingDiv.classList.add("timing-div");
    timingDiv.appendChild(day);
    timingDiv.appendChild(timing);
    hours.appendChild(timingDiv);
  });
  hours.classList.add("hours");
  contentDiv.appendChild(heading);
  contentDiv.appendChild(hours);
  contactDiv.appendChild(location);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(email);
  contentDiv.appendChild(contactDiv);
}
const contactDetails = {
  location: "Melbourne, Australia",
  phone: "+61 404040404",
  email: "authenicfoods@mail.com",
  dailyHours: [
    { Monday: "10am to 9pm" },
    { Tuesday: "10am to 9pm" },
    { Wednesday: "10am to 9pm" },
    { Thursday: "10am to 9pm" },
    { Friday: "10am to 11pm" },
    { Saturday: "10am to 11pm" },
    { Sunday: "10am to 11pm" },
  ],
};
