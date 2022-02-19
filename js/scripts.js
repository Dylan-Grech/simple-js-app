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

  function add(item) {
    pokemonList.push(item)
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.add({
  name: 'Pikachu',
  height: 0.4,
  weight: 6,
  type: ['Electric']
});

pokemonRepository.getAll().forEach(function(pokemon) {
  document.write(pokemon.name + ' height : ' + pokemon.height + '<br>');
});
