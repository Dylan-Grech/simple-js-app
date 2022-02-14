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
function printPokemonDetails(){
    for (let i=0; i < pokemonList.length; i++){
        if (pokemonList[i].height <1.0 && pokemonList[i].height >= 0.6){
        document.write(pokemonList[i].name + " " + pokemonList[i].height + '<br>');
        }else if (pokemonList[i].height <=0.5){
        document.write(pokemonList[i].name + " " + pokemonList[i].height + " - Now that is small. " + '<br>');
        }
        else if (pokemonList[i].height >1.0){
            document.write(pokemonList[i].name + " " + pokemonList[i].height + " - That is big. " + '<br>')
        }
    }
}

printPokemonDetails();