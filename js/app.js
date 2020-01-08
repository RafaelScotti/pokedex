let inputPokemonNumber = document.getElementById('input-pokemon-number');
//let labelID = document.getElementById
let labelName = document.getElementById('label-pokemon-name');
let picture = document.getElementById('picture');
// let labelHeight
// let labelWeight
// let types
// let


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
        })
        .then(() => {
            console.log(`
            id: ${pokemon.id} 
            nome: ${pokemon.name} 
            height: ${pokemon.height} 
            weight: ${pokemon.weight} 
            types: ${pokemon.types.map(x => x.type.name)} 
            stats: ${pokemon.stats}
            sprites: ${pokemon.sprites.front_default}
            `);

            picture.src = ""+pokemon.sprites.front_default;


        })
        .catch(data => labelName.innerHTML = 'Digite um id valido!')
}