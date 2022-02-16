let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: 'Bulbasaur',
            height: 0.7,
            weight: 6.9,
            type: ['grass', 'poison']
        },
        {
            name: 'Charmander',
            height: 0.6,
            weight: 8.5,
            type: ['fire']
        },
        {
            name: 'Squirtle',
            height: 0.5,
            weight: 9,
            type: ['Water']
        },
        {  
            name: 'Charizard',
            height: 1.7,
            weight: 90.5,
            type: ['fire', 'flying']
        }
    ];
  
    return {
      add: function(pokemon) {
        pokemonList.push(pokemon);
      },
      getAll: function() {
        return pokemonList;
      }
    };
  })();
  
  console.log(pokemonRepository.getAll());
  pokemonRepository.add({ name: 'Pikachu' });
  console.log(pokemonRepository.getAll());

  function printPokemonDetails(user){
        if (pokemonRepository[i].height <1.0 && pokemonRepository[i].height >= 0.6){
        document.write(pokemonRepository[i].name + " " + pokemonRepository[i].height + '<br>');
        }else if (pokemonRepository[i].height <=0.5){
        document.write(pokemonRepository[i].name + " " + pokemonRepository[i].height + " - Now that is small. " + '<br>');
        }
        else if (pokemonRepository[i].height >1.0){
            document.write(pokemonRepository[i].name + " " + pokemonRepository[i].height + " - That is big. " + '<br>')
        }
}

pokemonRepository.forEach(printPokemonDetails);

