let section = document.getElementById(`pokemonInfo`)



fetch("https://pokeapi.co/api/v2/pokedex/2/")
  .then((reponse) => reponse.json())
  .then((data) => {
    pokemon = data.pokemon_entries;
    console.log(data.pokemon_entries);
    for (let i = 0; i < pokemon.length; i++) {
        const nbrPo = pokemon[i].entry_number;
        const name = pokemon[i].pokemon_species.name;
        const url = pokemon[i].pokemon_species.url;
       
    
  

    fetch(url)     /* url=cont img */
      .then((reponse) => reponse.json())
      .then((pokemonData) => {
        console.log(pokemonData);
        const imageUrl = pokemonData.varieties[0].pokemon.url;
        console.log(imageUrl)
        let cardPokemon = document.createElement("p");
        cardPokemon.innerHTML=`NUMERO: ${nbrPo} , NOM : ${name} , <img src ="${imageUrl}" alt="${name}">`;
        section.append(cardPokemon);
      });
    }
  });
