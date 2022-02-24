// creating a pokemon Repository
let pokemonRepository = (function () {

  // a pokemon list which is an array with objects has been created
  let pokemonList = [];
  // fetching an API
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  

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
  // the function below will load a list from an external API
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
  // for each Pokemon in the list, more date about it will be given
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

// All of the code above is wrapped in an IIFE which protects data from being stolen.
// It will automatically execute itself with the help of ()

function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    console.log(pokemon);
  });
}

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});