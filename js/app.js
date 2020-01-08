let inputPokemonNumber = document.getElementById('input-pokemon-number');
let labelPokemonName = document.getElementById('label-pokemon-name');

inputPokemonNumber.addEventListener("blur", () => {
    let pokeAPI = fetch(`https://pokeapi.co/api/v2/pokemon/${inputPokemonNumber.value}/`);
    labelPokemonName.innerHTML = 'Pesquisando...';
    pokeAPI
        .then(data => data.json())
        .then(data => labelPokemonName.innerHTML = (data.name))
        .catch(data => labelPokemonName.innerHTML = 'Digite um id valido!')
});