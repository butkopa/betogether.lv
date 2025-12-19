const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");

function openPopup(person) {
  if (person === "anna") {
    popupTitle.innerText = "Anna, 7";
    popupText.innerText = "Anna needs urgent medical support.";
  }

  if (person === "mark") {
    popupTitle.innerText = "Mark, 12";
    popupText.innerText = "Mark needs educational support.";
  }

  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
}
