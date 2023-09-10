export async function getPokemonData (number) {
   //Grab the pokemon data from pokeapi
   const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`);
   var name = pokemonData;
   return name;
};
export function randomNum(changeVariable) {
   //1010 number of current pokemon, so do one more than that to get all pokemon included
   let randomNum = Math.floor(Date.now() * changeVariable % 1011);
   return randomNum;
};
