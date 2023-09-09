import {randomNum, getPokemonData} from './randomizeData.js';
async function grabInfo() {
   // document.getElementById("p1Name").innerHTML = "get";
   var p1Name = document.getElementById("p1Name");
   var p2Name = document.getElementById("p2Name");
   
   
   
   
   var randNum1 = randomNum(60);
   var randNum2 = randomNum(40);
   var p1Data = await jsonPokemonData(randNum1);
   var p2Data = await jsonPokemonData(randNum2);

  

   p1Name.innerHTML = p1Data.name;
   p2Name.innerHTML = p2Data.name;

   await setImages(randNum1, 1);
   await setImages(randNum2, 2);
   console.log(p1Data);
   if (p1Data.types[0].type.name == "ground") {
      alert("WIN?");
   }
   
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
grabInfo();