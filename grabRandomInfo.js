import {setImage, jsonPokemonData, setTypings} from "/TypeMatchup/setData.js";
export async function setRandomInfo() {
   var p1Name = document.getElementById("p1Name");
   var p2Name = document.getElementById("p2Name");
  
   //generate a random number then get the jsonified pokemon data, 60 and 40 are just a random offset I put
   var randNum1 = randomNum(60);
   var randNum2 = randomNum(40);
   var p1Data = await jsonPokemonData(randNum1);
   var p2Data = await jsonPokemonData(randNum2);

   //Set the names of the Pokémon
   p1Name.innerHTML = p1Data.name;
   p2Name.innerHTML = p2Data.name;
   await setTypings(p1Data, 1);
   
   await setTypings(p2Data, 2);

   //Set the images of the Pokémon
   await setImage(randNum1, 1);
   await setImage(randNum2, 2);

   
};
function randomNum(changeVariable) {
   //1025 number of current pokemon, so do one more than that to get all pokemon included
   let randomNum = Math.floor((Date.now() + 1) * changeVariable % 1026);
   return randomNum;
};

