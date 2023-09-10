import { typesTest } from './typesTest.js';
import { grabInfo } from './grabPokemonInfo.js';
import { compareTypes } from './compareTypes.js';
export async function runEvaluation() {
   await grabInfo();

   //For testing the types
   await typesTest();
   var poke1type1 = document.getElementById("poke1Type1").innerHTML;
   var poke1type2 = document.getElementById("poke1Type2").innerHTML;
   var poke2type1 = document.getElementById("poke2Type1").innerHTML;
   var poke2type2 = document.getElementById("poke2Type2").innerHTML;
   
   var result = await compareTypes(poke1type1, poke1type2, poke2type1, poke2type2);
   console.log(result);
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
   // console.log("Result: ", result);
}
runEvaluation();