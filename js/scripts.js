// creating a pokemon Repository
let pokemonRepository = (function () {

  // a pokemon list which is an array with objects has been created
  let pokemonList = [];
  // fetching an API
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
  // the below function will let me add an item and then push it to the list
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("Pokemon Data is incorrect!");
    }
  }

  // the below function will fetch the pokemonList created above
  function getAll() {
    return pokemonList;
  }

 // the below function will add a button for each item in the pokemon list. An eve listener will also be added in the next step
  function addListItem(pokemon){
    let pokemonDetails = document.querySelector (".pokemon-list");
    let listItem = document.createElement ("li");
    let button = document.createElement ("button");
    button.innerText = pokemon.name;
    listItem.classList.add("pokemon-list-items");
    button.classList.add("button-class");
    listItem.appendChild(button);
    pokemonDetails.appendChild(listItem);
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    })
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
          console.log(pokemon);
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

  // upon calling this function, Modal will appear
  function showDetails(pokemon){
    pokemonRepository.loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon.name, pokemon.height, pokemon.imageUrl);
    })
  }

  // creating a modal which will show further details of a pokemon
  function showModal(name, height, image){
    let modalContainer = document.querySelector('#modal-container');
    console.log(`modalContainer: ${modalContainer}`);
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = name;

    let contentElement = document.createElement('p');
    contentElement.innerText = "Height:" + height;

    let imageElement = document.createElement('img');
    imageElement.classList.add('pokemon-image-class');
    imageElement.src = image;

    console.log(`imageElement.className is: ${imageElement.className}`);

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imageElement);
    modalContainer.appendChild(modal);
    modalContainer.classList.add('is-visible');
  }

  // this function will hide the Modal when called
  function hideModal(){
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  let modalContainer = document.querySelector('#modal-container');
  window.addEventListener('keydown', (e) =>{
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
          hideModal();
      }
  });

  modalContainer.addEventListener('click', (e) =>{
    let target = e.target;
    if (target ===modalContainer){
      hideModal();
    }
  });

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