const btn = document.getElementById(`btn`);
const text = document.getElementById(`text`);
const para = document.getElementById(`para`);
const sup = document.getElementsByClassName(`del`);

btn.addEventListener(`click`, addListe);

function addListe() {
  if (text.value == "") {
    alert("veuillez écrire dans le champs avant de clicker sur add");
  } else {
    let span = document.createElement("p");
    span.classList = "add";
    span.innerHTML = text.value;
    para.appendChild(span);
  }
}


