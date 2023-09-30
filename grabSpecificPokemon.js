import {setImage, jsonPokemonData, setTypings} from "/setData.js";
export async function setSpecificInfo(pokemonName, slotNum) {
   //Get the pokemon name for a given slot number
   var pName = document.getElementById(`p${slotNum}Name`);
  
   var pData = await jsonPokemonData(pokemonName);
   var pNum = pData.id;

   //Set the names of the Pokémon
   pName.innerHTML = pData.name;
   await setTypings(pData, slotNum);

   //Set the images of the Pokémon
   await setImage(pNum, slotNum);

   
};

