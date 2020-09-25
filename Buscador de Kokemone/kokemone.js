const boton = document.querySelector('#buscar');
const buscador = document.querySelector('#buscador');
const pokemon = document.querySelector('#pokemon');

boton.addEventListener('click', buscar)

function buscar(){
    const nombrePokemon = buscador.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
        .then((res)=> res.json())
        .then((json)=> mostrarPokemon(json.sprites.front_default))
        .catch((err)=> errorHandler(err, nombrePokemon))
}

function mostrarPokemon(img){
    pokemon.innerHTML = `<img src="${img}" >`;
}

function errorHandler(err, nombrePokemon){
    pokemon.innerHTML = `<p>${nombrePokemon} no existe`;
    console.warn(err)
}