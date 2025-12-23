const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const popupImg = document.getElementById("popupImg");

function openPopup(person) {
  if (person === "anna") {
    popupTitle.innerText = "Anna, 7";
    popupText.innerText = "Annai nepieciešama medicīniskā palīdzība.";
    popupImg.src = "images/anna.jpg";
  }

  if (person === "mark") {
    popupTitle.innerText = "Marks, 12";
    popupText.innerText = "Markam nepieciešams izglītības atbalsts.";
    popupImg.src = "images/mark.jpg";
  }

  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
}
