export async function getPokemonData (number) {
   const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`);
   var name = pokemonData;
   return name;
};
export function randomNum(changeVariable) {
   let randomNum = Math.floor(Date.now() * changeVariable % 1011);
   return randomNum;
};
