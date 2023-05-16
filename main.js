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

// fetch("https://pokeapi.co/api/v2/pokedex/2/")
//   .then((reponse) => reponse.json())
//   .then((data) => {
//     pokemon = data.pokemon_entries;
//     console.log(data);
//     for (let i = 0; i < pokemon.length; i++) {
//       const nbrPo = pokemon[i];
//       console.log(nbrPo);
//     }
//     // for (let j = 0; j < entry.pokemon_species.name.length; j++) {
//     //   const species = entry.pokemon_species.name[j];
//     //   console.log(species);
//     // }
//   });
