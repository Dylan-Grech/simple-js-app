let pokemonRepository = (function () {
    let pokemonList = [];
  
    function add(pokemon) {
      pokemonList.push(pokemon);
    }
  
    function getAll() {
      return pokemonList;
    }
  
    return {
      add: add,
      getAll: getAll
    };
  })();
  
undefined
pokemonList.forEach(function(pokemon) {
	if (pokemon.height <1.0 && pokemon.height >= 0.6){
        document.write(pokemon.name + " " + pokemon.height + '<br>');
        }else if (pokemon.height <=0.5){
        document.write(pokemon.name + " " + pokemon.height + " - Now that is small. " + '<br>');
        }
        else if (pokemon.height >1.0){
            document.write(pokemon.name + " " + pokemon.height + " - That is big. " + '<br>')
        }
})