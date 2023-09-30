export async function getPokemonData (numberOrName) {
   //Grab the pokemon data from pokeapi
   const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${numberOrName}/`);
   return pokemonData;
};
