import {randomNum, getPokemonData} from './randomizeData.js';
async function grabInfo() {
   // document.getElementById("p1Name").innerHTML = "get";
   var p1Name = document.getElementById("p1Name");
   var p2Name = document.getElementById("p2Name");
   
   //generate a random number then get the jsonified pokemon data
   var randNum1 = randomNum(60);
   var randNum2 = randomNum(40);
   var p1Data = await jsonPokemonData(randNum1);
   var p2Data = await jsonPokemonData(randNum2);

   //Set the names of the Pokémon
   p1Name.innerHTML = p1Data.name;
   p2Name.innerHTML = p2Data.name;
   await setTypings(p1Data, p2Data);

   //Set the images of the Pokémon
   await setImages(randNum1, 1);
   await setImages(randNum2, 2);
   
};

async function setImages(num, pkmNum) {
   var imageURL = document.querySelector(`#img${pkmNum}`);
   imageURL.getAttribute("src");
   imageURL.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`);
};

async function jsonPokemonData(num) {
   var pokemonData = await getPokemonData(num);
   return await pokemonData.json();
};

async function setTypings(poke1DataJSON, poke2DataJSON) {
   //Get all 4 type elements by their IDs
   var poke1type1 = document.getElementById("poke1Type1");
   var poke1type2 = document.getElementById("poke1Type2");
   var poke2type1 = document.getElementById("poke2Type1");
   var poke2type2 = document.getElementById("poke2Type2");
   
   //Change the default "???" to the respective type
   poke1type1.innerHTML = poke1DataJSON.types[0].type.name;
   if (poke1DataJSON.types.length > 1) {
      poke1type2.innerHTML = poke1DataJSON.types[1].type.name;
   } else {
      poke1type2.innerHTML = "";
   }

   poke2type1.innerHTML = poke2DataJSON.types[0].type.name;
   if (poke2DataJSON.types.length > 1) {
      poke2type2.innerHTML = poke2DataJSON.types[1].type.name;
   } else {
      poke2type2.innerHTML = "";
   }
};
grabInfo();