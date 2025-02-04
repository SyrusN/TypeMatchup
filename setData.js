import { getPokemonData} from './TypeMatchup/grabData.js';
export async function setImage(num, pkmNum) {
   //Change the URL of the image to the pokeapi github for a specific pokemon
   var imageURL = document.querySelector(`#img${pkmNum}`);
   imageURL.getAttribute("src");
   imageURL.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`);
};

export async function jsonPokemonData(num) {
   var pokemonData = await getPokemonData(num);
   return await pokemonData.json();
};

export async function setTypings(poke1DataJSON, pokeNum) {
   //Get all 4 type elements by their IDs
   var poke1type1 = document.getElementById(`poke${pokeNum}Type1`);
   var poke1type2 = document.getElementById(`poke${pokeNum}Type2`);
   console.log(poke1DataJSON);
   //Change the default "???" to the respective type
   poke1type1.innerHTML = poke1DataJSON.types[0].type.name;
   if (poke1DataJSON.types.length > 1) {
      poke1type2.innerHTML = poke1DataJSON.types[1].type.name;
   } else {
      poke1type2.innerHTML = "";
   }
};