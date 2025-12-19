function openPopup(person) {
  const title = document.getElementById("popupTitle");
  const text = document.getElementById("popupText");

  if (person === "anna") {
    title.innerText = "Anna, 7";
    text.innerText = "Anna needs medical treatment support.";
  }

  if (person === "mark") {
    title.innerText = "Mark, 12";
    text.innerText = "Mark needs educational and care support.";
  }

  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
