import { typesTest } from './TypeMatchup/typesTest.js';
import { setRandomInfo } from './TypeMatchup/grabRandomInfo.js';
import { compareTypes } from './TypeMatchup/compareTypes.js';
import { setSpecificInfo } from './TypeMatchup/grabSpecificPokemon.js';
async function runRandomEvaluation() {
   await setRandomInfo();

   //For testing the types
   // await typesTest();
   await compareTypesOutcome();
   
};
async function runEvaluation(pokemon, boxNum) {
   //boxNum is the text box input to be grabbing input from
   await setSpecificInfo(pokemon, boxNum);
   
   //For testing the types
   await typesTest();
   await compareTypesOutcome();
   
}

function evaluateResult(result) {
   //Compare the result for how effective the typing is
   if (result <= -4) {

      var outcome = document.getElementById("outcome");
      outcome.innerHTML = "Pokémon 1 will lose this battle.";
   
   } else if (result == -3) {
   
      var outcome = document.getElementById("outcome");
      outcome.innerHTML = "Pokémon 1 will probably lose this battle.";
   
   } else if (result == -2) {
   
      var outcome = document.getElementById("outcome");
      outcome.innerHTML = "Pokémon 1 has a great chance of losing this battle.";
   
   } else if (result == -1) {
   
      var outcome = document.getElementById("outcome");
      outcome.innerHTML = "Pokémon 1 has a moderate chance of losing this battle.";
   
   } else if (result == 0){
   
      var outcome = document.getElementById("outcome");
      outcome.innerHTML = "Either Pokémon can win the battle.";
   
   } else if (result == 1) {
   
      var outcome = document.getElementById("outcome");
      outcome.innerHTML = "Pokémon 1 has a moderate chance of winning this battle.";
   
   } else if (result == 2) {
   
      var outcome = document.getElementById("outcome");
      outcome.innerHTML = "Pokémon 1 has a great chance of winning this battle.";
   
   } else if( result == 3) {
   
      var outcome = document.getElementById("outcome");
      outcome.innerHTML = "Pokémon 1 will probably win this battle.";
   
   } else if (result >= 4) {
   
      var outcome = document.getElementById("outcome");
      outcome.innerHTML = "Pokémon 1 will win this battle.";
   
   } else {
      alert("Error");
   }
};
async function compareTypesOutcome() {
   //Grab each type
   var poke1type1 = document.getElementById("poke1Type1").innerHTML;
   var poke1type2 = document.getElementById("poke1Type2").innerHTML;
   var poke2type1 = document.getElementById("poke2Type1").innerHTML;
   var poke2type2 = document.getElementById("poke2Type2").innerHTML;
   
   //Compare the types
   var result = await compareTypes(poke1type1, poke1type2, poke2type1, poke2type2);
   if (result == -10) {
      alert("Incorrect name entered, make sure you have entered a valid Pokémon name");
      return;
   }
   
   evaluateResult(result);
}
runRandomEvaluation();
document.getElementById("buttonRandomize").addEventListener("click", function(e) {
   //Upon clicking the randomize button, run a random evaluation
   runRandomEvaluation();
   e.preventDefault();
});
document.getElementById("enterFirst").addEventListener("click", function(e) {
   //For when the user enters the first Pokemon
   var name = document.getElementById("pname1").value;
   runEvaluation(name, 1);
   e.preventDefault();
});
document.getElementById("enterSecond").addEventListener("click", function(e) {
   //For when the user enters the second Pokemon
   var name = document.getElementById("pname2").value;
   runEvaluation(name, 2);
   e.preventDefault();
});