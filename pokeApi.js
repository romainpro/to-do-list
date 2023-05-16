fetch("https://pokeapi.co/api/v2/pokedex/2/")
  .then((reponse) => reponse.json())
  .then((data) => {
    pokemon = data.pokemon_entries;
    console.log(data);
    for (let i = 0; i < pokemon.length; i++) {
      const nbrPo = pokemon[i];
      console.log(nbrPo);
    }
    // for (let j = 0; j < entry.pokemon_species.name.length; j++) {
    //   const species = entry.pokemon_species.name[j];
    //   console.log(species);
    // }
  });