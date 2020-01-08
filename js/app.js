let inputPokemonNumber = document.getElementById('input-pokemon-number');
let labelID = document.getElementById('label-pokemon-id');
let labelName = document.getElementById('label-pokemon-name');
let picture = document.getElementById('picture');
let labelHeight = document.getElementById('label-pokemon-height');
let labelWeight = document.getElementById('label-pokemon-weight');
let labelTypes = document.getElementById('label-pokemon-types');
let labelStats = document.getElementById('label-pokemon-stats');

let pokemon = {
    id: 0,
    name: "",
    height: 0,
    weight: 0,
    types: [],
    stats: [],
    sprites: { front_default: "" }
}

inputPokemonNumber.addEventListener("blur", () => {
    getPokemonInfo(inputPokemonNumber.value);
});

let getPokemonInfo = (id) => {
    let pokeAPI = fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    //labelPokemonName.innerHTML = 'Pesquisando...';
    pokeAPI
        .then(data => data.json())
        .then(data => {
            pokemon = data
            picture.src = ""+pokemon.sprites.front_default;
            labelID.innerHTML = `#id: ${pokemon.id}`;
            labelName.innerHTML = `Name: ${pokemon.name}`;
            labelHeight.innerHTML = `Height: ${pokemon.height}`;
            labelWeight.innerHTML = `Weight: ${pokemon.weight}`;
            labelTypes.innerHTML = `Types: ${pokemon.types.map(x => x.type.name)} `;
            labelStats.innerText = `Stats: ${pokemon.stats.map(x => `
            ${x.stat.name}: ${x.base_stat}  Effort: ${x.effort}`)} `;
        })
        .catch(data => {
            resetLabels();
            alert("Pokemon not found!")
        })
}

let resetLabels = () => {
    labelName.innerHTML = 'Digite um id valido!'
    picture.src = "";
    labelID.innerHTML = `#id: -`;
    labelName.innerHTML = `Name: -`;
    labelHeight.innerHTML = `Height: -`;
    labelWeight.innerHTML = `Weight: -`;
    labelTypes.innerHTML = `Types: -`;
    labelStats.innerText = `Stats: -`;
}