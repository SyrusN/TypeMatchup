import {setImage, jsonPokemonData, setTypings} from "/setData.js";
export async function setSpecificInfo(pokemonName, slotNum) {
   var pName = document.getElementById(`p${slotNum}Name`);
  
   var pData = await jsonPokemonData(pokemonName);
   var pNum = pData.id;
   if (pNum == "") {
      alert("Not valid.");
   }

   //Set the names of the Pokémon
   pName.innerHTML = pData.name;
   await setTypings(pData, slotNum);

   //Set the images of the Pokémon
   await setImage(pNum, slotNum);

   
};

