let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // A pokemon is added to the list
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  //This function will create a button for each list item, showing the pokemons
  function addListItem(pokemon){
    let pokemonList = document.querySelector('.list-group');
    let listOfPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn-light');
    listOfPokemon.classList.add('group-list-item');
    listOfPokemon.appendChild(button);
    pokemonList.appendChild(listOfPokemon);
    button.addEventListener('click', function() {
      showDetails(pokemon);
  })
}

  //This fucntion will load a list of pokemon from apiUrl
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
          console.log(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      });
    }

  //This will load up the data of a pokemon when clicking on a button
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
    return response.json();
    }).then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.weight = details.weight;
        item.types = details.types;
        item.abilities = [];
        for (let i = 0; i < details.abilities.length; i++) {
          item.abilities.push(details.abilities[i].ability.name);
        }
      }).catch(function (e) {
        console.error(e);
      });
  }


  function showDetails(item) {
    loadDetails(item).then(function () {
      showModal(item);
    });
  }

  function showModal(item) {
    let modalTitle = $('.modal-title');
    let modalBody = $('.modal-body');

      let pokemonName = $('<h2>' + item.name + '</h2>');
      let pokemonHeight = $('<p>' + 'Height: ' + item.height + '</p>');
      let pokemonWeight = $('<p>' + 'Weight: ' + item.weight + '</p>');
      let pokemonAbilities = $('<p>' + 'Type: ' + item.abilities + '</p>');
      let pokemonImage = $('<img class=\'pokemon-modal-image\'>');
      pokemonImage.attr('src', item.imageUrl); 

      modalTitle.empty(); 
      modalBody.empty(); 

      modalTitle.append(pokemonName); 
      modalBody.append(pokemonImage); 
      modalBody.append(pokemonHeight); 
      modalBody.append(pokemonWeight); 
      modalBody.append(pokemonAbilities); 
    }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

//IIFE ends here


pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});