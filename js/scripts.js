// creating a pokemon Repository
let pokemonRepository = (function () {

  // a pokemon list which is an array with objects has been created
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

  // the below function will let me add an item and then push it to the list
  function add(item) {
    pokemonList.push(item)
  }

  // the below function will fetch the pokemonList created above
  function getAll() {
    return pokemonList;
  }
  
  // the below function will add a button for each item in the pokemon list. An eve listener will also be added in the next step
  function addListItem(pokemon){
    let pokemonDetails = document.querySelector ('.pokemon-list');
    let listItems = document.createElement ('li');
    let button = document.createElement ('button');
    button.innerText = pokemon.name;
    listItems.classList.add('pokemon-list-items');
    button.classList.add('button');
    listItems.appendChild(button);
    pokemonDetails.appendChild(listItems);
    button.addEventListener('click', function () {
      showDetails (pokemon);
    });
  }

  function showDetails(pokemon){
    console.log(pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

// All of the code above is wrapped in an IIFE which protects data from being stolen.
// It will automatically execute itself with the help of ()

pokemonRepository.add({
  name: 'Pikachu',
  height: 0.4,
  weight: 6,
  type: ['Electric']
});

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
