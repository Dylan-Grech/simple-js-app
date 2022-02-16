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
]
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