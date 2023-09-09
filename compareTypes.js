export async function compareTypes(type1, type2, type3, type4) {
   //types 1 & 2 -> Pokemon 1
   //types 3 & 4 -> Pokemon 2
   var secondComparison = false;
   var effectiveness1 = 1;
   var effectiveness2 = 1;


   effectiveness1 = compareTypesHelper(type1, type3);
   if (type2 == "" || type4 == "") {
      effectiveness2 = -10;
   } else {
      secondComparison = true;
      effectiveness2 = compareTypesHelper(type2, type4);
   }
   if (secondComparison) {
      if (effectiveness1 == 1 && effectiveness2 == 1) {
         return 2;
      } else if (effectiveness1 == 1 && effectiveness2 == 0) {
         return 1;
      } else if (effectiveness1 == 1 && effectiveness2 == -1) {
         return 0;
      } else if (effectiveness1 == 1 && effectiveness2 == -2) {
         return -1;
      } else if (effectiveness1 == 0 && effectiveness2 == -2) {
         return -2;
      } else if (effectiveness1 == -1 && effectiveness2 == -2) {
         return -3;
      }
   }

   // -10 = no second type
   // -2 = no effect on second poke
   // -1 = little effect on second poke
   // 0 = neutral against second poke
   // 1 = 2x effective against second poke
   // 2 = 4x effective against second poke
   
   
};
async function compareTypesHelper(poke1Type, poke2Type) {
   //Information based on the chart on https://pokemondb.net/type
   //poke1 = attacker
   //poke2 = defender
   //Return vals:
   // -2 = no effect on second poke
   // -1 = little effect on second poke
   // 0 = neutral against second poke
   // 1 = 2x effective against second poke

   switch(poke1Type) {
      //compare the attacker type in the case to the defender type
      case "normal":
         if (poke1Type == "normal" && poke2Type == "normal") {
            return 0;
         }
         if (poke1Type == "normal" && poke2Type == "fire") {
            return 0;
         }
         if (poke1Type == "normal" && poke2Type == "water") {
            return 0;
         }
         if (poke1Type == "normal" && poke2Type == "electric") {
            return 0;
         }
         if (poke1Type == "normal" && poke2Type == "grass") {
            return 0;
         }
         if (poke1Type == "normal" && poke2Type == "ice") {
            return 0;
         }
         if (poke1Type == "normal" && poke2Type == "fighting") {
            return 0;
         }
         if (poke1Type == "normal" && poke2Type == "poison") {
            return 0;
         }
         if (poke1Type == "normal" && poke2Type == "ground") {
            return 0;
         }
         if (poke1Type == "normal" && poke2Type == "flying") {
            return 0;
         }
         if (poke1Type == "normal" && poke2Type == "psychic") {
            return 0;
         }
         if (poke1Type == "normal" && poke2Type == "bug") {
            return 0;
         }
         if (poke1Type == "normal" && poke2Type == "rock") {
            return -1;
         }
         if (poke1Type == "normal" && poke2Type == "ghost") {
            return -2;
         }
         if (poke1Type == "normal" && poke2Type == "dragon") {
            return 0;
         }
         if (poke1Type == "normal" && poke2Type == "dark") {
            return 0;
         }
         if (poke1Type == "normal" && poke2Type == "steel") {
            return -1;
         }
         if (poke1Type == "normal" && poke2Type == "fairy") {
            return 0;
         }

      case "fire":
         if (poke1Type == "fire" && poke2Type == "normal") {
            return 0;
         }
         if (poke1Type == "fire" && poke2Type == "fire") {
            return -1;
         }
         if (poke1Type == "fire" && poke2Type == "water") {
            return -1;
         }
         if (poke1Type == "fire" && poke2Type == "electric") {
            return 0;
         }
         if (poke1Type == "fire" && poke2Type == "grass") {
            return 1;
         }
         if (poke1Type == "fire" && poke2Type == "ice") {
            return 1;
         }
         if (poke1Type == "fire" && poke2Type == "fighting") {
            return 0;
         }
         if (poke1Type == "fire" && poke2Type == "poison") {
            return 0;
         }
         if (poke1Type == "fire" && poke2Type == "ground") {
            return 0;
         }
         if (poke1Type == "fire" && poke2Type == "flying") {
            return 0;
         }
         if (poke1Type == "fire" && poke2Type == "psychic") {
            return 0;
         }
         if (poke1Type == "fire" && poke2Type == "bug") {
            return 1;
         }
         if (poke1Type == "fire" && poke2Type == "rock") {
            return -1;
         }
         if (poke1Type == "fire" && poke2Type == "ghost") {
            return -2;
         }
         if (poke1Type == "fire" && poke2Type == "dragon") {
            return -1;
         }
         if (poke1Type == "fire" && poke2Type == "dark") {
            return 0;
         }
         if (poke1Type == "fire" && poke2Type == "steel") {
            return 1;
         }
         if (poke1Type == "fire" && poke2Type == "fairy") {
            return 0;
         }

      case "water":
         if (poke1Type == "water" && poke2Type == "normal") {
            return 0;
         }
         if (poke1Type == "water" && poke2Type == "fire") {
            return 1;
         }
         if (poke1Type == "water" && poke2Type == "water") {
            return -1;
         }
         if (poke1Type == "water" && poke2Type == "electric") {
            return 0;
         }
         if (poke1Type == "water" && poke2Type == "grass") {
            return -1;
         }
         if (poke1Type == "water" && poke2Type == "ice") {
            return 1;
         }
         if (poke1Type == "water" && poke2Type == "fighting") {
            return 0;
         }
         if (poke1Type == "water" && poke2Type == "poison") {
            return 0;
         }
         if (poke1Type == "water" && poke2Type == "ground") {
            return 1;
         }
         if (poke1Type == "water" && poke2Type == "flying") {
            return 0;
         }
         if (poke1Type == "water" && poke2Type == "psychic") {
            return 0;
         }
         if (poke1Type == "water" && poke2Type == "bug") {
            return 1;
         }
         if (poke1Type == "water" && poke2Type == "rock") {
            return 1;
         }
         if (poke1Type == "water" && poke2Type == "ghost") {
            return 0;
         }
         if (poke1Type == "water" && poke2Type == "dragon") {
            return -1;
         }
         if (poke1Type == "water" && poke2Type == "dark") {
            return 0;
         }
         if (poke1Type == "water" && poke2Type == "steel") {
            return 0;
         }
         if (poke1Type == "water" && poke2Type == "fairy") {
            return 0;
         }

      case "electric":
         if (poke1Type == "electric" && poke2Type == "normal") {
            return 0;
         }
         if (poke1Type == "electric" && poke2Type == "fire") {
            return 0;
         }
         if (poke1Type == "electric" && poke2Type == "water") {
            return 1;
         }
         if (poke1Type == "electric" && poke2Type == "electric") {
            return -1;
         }
         if (poke1Type == "electric" && poke2Type == "grass") {
            return -1;
         }
         if (poke1Type == "electric" && poke2Type == "ice") {
            return 1;
         }
         if (poke1Type == "electric" && poke2Type == "fighting") {
            return 0;
         }
         if (poke1Type == "electric" && poke2Type == "poison") {
            return 0;
         }
         if (poke1Type == "electric" && poke2Type == "ground") {
            return -2;
         }
         if (poke1Type == "electric" && poke2Type == "flying") {
            return 1;
         }
         if (poke1Type == "electric" && poke2Type == "psychic") {
            return 0;
         }
         if (poke1Type == "electric" && poke2Type == "bug") {
            return 1;
         }
         if (poke1Type == "electric" && poke2Type == "rock") {
            return 1;
         }
         if (poke1Type == "electric" && poke2Type == "ghost") {
            return 0;
         }
         if (poke1Type == "electric" && poke2Type == "dragon") {
            return -1;
         }
         if (poke1Type == "electric" && poke2Type == "dark") {
            return 0;
         }
         if (poke1Type == "electric" && poke2Type == "steel") {
            return 0;
         }
         if (poke1Type == "electric" && poke2Type == "fairy") {
            return 0;
         }

      case "grass":
         if (poke1Type == "grass" && poke2Type == "normal") {
            return 0;
         }
         if (poke1Type == "grass" && poke2Type == "fire") {
            return -1;
         }
         if (poke1Type == "grass" && poke2Type == "water") {
            return 1;
         }
         if (poke1Type == "grass" && poke2Type == "electric") {
            return 0;
         }
         if (poke1Type == "grass" && poke2Type == "grass") {
            return -1;
         }
         if (poke1Type == "grass" && poke2Type == "ice") {
            return 0;
         }
         if (poke1Type == "grass" && poke2Type == "fighting") {
            return 0;
         }
         if (poke1Type == "grass" && poke2Type == "poison") {
            return -1;
         }
         if (poke1Type == "grass" && poke2Type == "ground") {
            return 1;
         }
         if (poke1Type == "grass" && poke2Type == "flying") {
            return -1;
         }
         if (poke1Type == "grass" && poke2Type == "psychic") {
            return 0;
         }
         if (poke1Type == "grass" && poke2Type == "bug") {
            return -1;
         }
         if (poke1Type == "grass" && poke2Type == "rock") {
            return 1;
         }
         if (poke1Type == "grass" && poke2Type == "ghost") {
            return 0;
         }
         if (poke1Type == "grass" && poke2Type == "dragon") {
            return -1;
         }
         if (poke1Type == "grass" && poke2Type == "dark") {
            return 0;
         }
         if (poke1Type == "grass" && poke2Type == "steel") {
            return -1;
         }
         if (poke1Type == "grass" && poke2Type == "fairy") {
            return 0;
         }

      case "ice":
         if (poke1Type == "ice" && poke2Type == "normal") {
            return 0;
         }
         if (poke1Type == "ice" && poke2Type == "fire") {
            return -1;
         }
         if (poke1Type == "ice" && poke2Type == "water") {
            return -1;
         }
         if (poke1Type == "ice" && poke2Type == "electric") {
            return 0;
         }
         if (poke1Type == "ice" && poke2Type == "grass") {
            return 1;
         }
         if (poke1Type == "ice" && poke2Type == "ice") {
            return -1;
         }
         if (poke1Type == "ice" && poke2Type == "fighting") {
            return 0;
         }
         if (poke1Type == "ice" && poke2Type == "poison") {
            return 0;
         }
         if (poke1Type == "ice" && poke2Type == "ground") {
            return 1;
         }
         if (poke1Type == "ice" && poke2Type == "flying") {
            return 1;
         }
         if (poke1Type == "ice" && poke2Type == "psychic") {
            return 0;
         }
         if (poke1Type == "ice" && poke2Type == "bug") {
            return 0;
         }
         if (poke1Type == "ice" && poke2Type == "rock") {
            return 0;
         }
         if (poke1Type == "ice" && poke2Type == "ghost") {
            return 0;
         }
         if (poke1Type == "ice" && poke2Type == "dragon") {
            return 1;
         }
         if (poke1Type == "ice" && poke2Type == "dark") {
            return 0;
         }
         if (poke1Type == "ice" && poke2Type == "steel") {
            return -1;
         }
         if (poke1Type == "ice" && poke2Type == "fairy") {
            return 0;
         }

      case "fighting":
         if (poke1Type == "fighting" && poke2Type == "normal") {
            return 1;
         }
         if (poke1Type == "fighting" && poke2Type == "fire") {
            return 0;
         }
         if (poke1Type == "fighting" && poke2Type == "water") {
            return 0;
         }
         if (poke1Type == "fighting" && poke2Type == "electric") {
            return 0;
         }
         if (poke1Type == "fighting" && poke2Type == "grass") {
            return 0;
         }
         if (poke1Type == "fighting" && poke2Type == "ice") {
            return 1;
         }
         if (poke1Type == "fighting" && poke2Type == "fighting") {
            return 0;
         }
         if (poke1Type == "fighting" && poke2Type == "poison") {
            return -1;
         }
         if (poke1Type == "fighting" && poke2Type == "ground") {
            return 0;
         }
         if (poke1Type == "fighting" && poke2Type == "flying") {
            return -1;
         }
         if (poke1Type == "fighting" && poke2Type == "psychic") {
            return -1;
         }
         if (poke1Type == "fighting" && poke2Type == "bug") {
            return -1;
         }
         if (poke1Type == "fighting" && poke2Type == "rock") {
            return 1;
         }
         if (poke1Type == "fighting" && poke2Type == "ghost") {
            return -2;
         }
         if (poke1Type == "fighting" && poke2Type == "dragon") {
            return 0;
         }
         if (poke1Type == "fighting" && poke2Type == "dark") {
            return 1;
         }
         if (poke1Type == "fighting" && poke2Type == "steel") {
            return 1;
         }
         if (poke1Type == "fighting" && poke2Type == "fairy") {
            return -1;
         }

      case "poison":
         if (poke1Type == "poison" && poke2Type == "normal") {
            return 0;
         }
         if (poke1Type == "poison" && poke2Type == "fire") {
            return 0;
         }
         if (poke1Type == "poison" && poke2Type == "water") {
            return 0;
         }
         if (poke1Type == "poison" && poke2Type == "electric") {
            return 0;
         }
         if (poke1Type == "poison" && poke2Type == "grass") {
            return 1;
         }
         if (poke1Type == "poison" && poke2Type == "ice") {
            return 0;
         }
         if (poke1Type == "poison" && poke2Type == "fighting") {
            return 0;
         }
         if (poke1Type == "poison" && poke2Type == "poison") {
            return -1;
         }
         if (poke1Type == "poison" && poke2Type == "ground") {
            return -1;
         }
         if (poke1Type == "poison" && poke2Type == "flying") {
            return 0;
         }
         if (poke1Type == "poison" && poke2Type == "psychic") {
            return 0;
         }
         if (poke1Type == "poison" && poke2Type == "bug") {
            return 0;
         }
         if (poke1Type == "poison" && poke2Type == "rock") {
            return -1;
         }
         if (poke1Type == "poison" && poke2Type == "ghost") {
            return -1;
         }
         if (poke1Type == "poison" && poke2Type == "dragon") {
            return 0;
         }
         if (poke1Type == "poison" && poke2Type == "dark") {
            return 0;
         }
         if (poke1Type == "poison" && poke2Type == "steel") {
            return -2;
         }
         if (poke1Type == "poison" && poke2Type == "fairy") {
            return 1;
         }

      case "ground":
         if (poke1Type == "ground" && poke2Type == "normal") {
            return 0;
         }
         if (poke1Type == "ground" && poke2Type == "fire") {
            return 1;
         }
         if (poke1Type == "ground" && poke2Type == "water") {
            return 0;
         }
         if (poke1Type == "ground" && poke2Type == "electric") {
            return 1;
         }
         if (poke1Type == "ground" && poke2Type == "grass") {
            return -1;
         }
         if (poke1Type == "ground" && poke2Type == "ice") {
            return 0;
         }
         if (poke1Type == "ground" && poke2Type == "fighting") {
            return 0;
         }
         if (poke1Type == "ground" && poke2Type == "poison") {
            return 1;
         }
         if (poke1Type == "ground" && poke2Type == "ground") {
            return 0;
         }
         if (poke1Type == "ground" && poke2Type == "flying") {
            return -2;
         }
         if (poke1Type == "ground" && poke2Type == "psychic") {
            return 0;
         }
         if (poke1Type == "ground" && poke2Type == "bug") {
            return -1;
         }
         if (poke1Type == "ground" && poke2Type == "rock") {
            return 1;
         }
         if (poke1Type == "ground" && poke2Type == "ghost") {
            return 0;
         }
         if (poke1Type == "ground" && poke2Type == "dragon") {
            return 0;
         }
         if (poke1Type == "ground" && poke2Type == "dark") {
            return 0;
         }
         if (poke1Type == "ground" && poke2Type == "steel") {
            return 1;
         }
         if (poke1Type == "ground" && poke2Type == "fairy") {
            return 0;
         }
      case "flying":
         if (poke1Type == "flying" && poke2Type == "normal") {
            return 0;
         }
         if (poke1Type == "flying" && poke2Type == "fire") {
            return 0;
         }
         if (poke1Type == "flying" && poke2Type == "water") {
            return 0;
         }
         if (poke1Type == "flying" && poke2Type == "electric") {
            return -1;
         }
         if (poke1Type == "flying" && poke2Type == "grass") {
            return 1;
         }
         if (poke1Type == "flying" && poke2Type == "ice") {
            return 0;
         }
         if (poke1Type == "flying" && poke2Type == "fighting") {
            return 1;
         }
         if (poke1Type == "flying" && poke2Type == "poison") {
            return 0;
         }
         if (poke1Type == "flying" && poke2Type == "ground") {
            return 0;
         }
         if (poke1Type == "flying" && poke2Type == "flying") {
            return 0;
         }
         if (poke1Type == "flying" && poke2Type == "psychic") {
            return 0;
         }
         if (poke1Type == "flying" && poke2Type == "bug") {
            return 1;
         }
         if (poke1Type == "flying" && poke2Type == "rock") {
            return -1;
         }
         if (poke1Type == "flying" && poke2Type == "ghost") {
            return 0;
         }
         if (poke1Type == "flying" && poke2Type == "dragon") {
            return 0;
         }
         if (poke1Type == "flying" && poke2Type == "dark") {
            return 0;
         }
         if (poke1Type == "flying" && poke2Type == "steel") {
            return -1;
         }
         if (poke1Type == "flying" && poke2Type == "fairy") {
            return 0;
         }

      case "psychic":
         if (poke1Type == "psychic" && poke2Type == "normal") {
            return 0;
         }
         if (poke1Type == "psychic" && poke2Type == "fire") {
            return 0;
         }
         if (poke1Type == "psychic" && poke2Type == "water") {
            return 0;
         }
         if (poke1Type == "psychic" && poke2Type == "electric") {
            return 0;
         }
         if (poke1Type == "psychic" && poke2Type == "grass") {
            return 0;
         }
         if (poke1Type == "psychic" && poke2Type == "ice") {
            return 0;
         }
         if (poke1Type == "psychic" && poke2Type == "fighting") {
            return 1;
         }
         if (poke1Type == "psychic" && poke2Type == "poison") {
            return 1;
         }
         if (poke1Type == "psychic" && poke2Type == "ground") {
            return 0;
         }
         if (poke1Type == "psychic" && poke2Type == "flying") {
            return 0;
         }
         if (poke1Type == "psychic" && poke2Type == "psychic") {
            return -1;
         }
         if (poke1Type == "psychic" && poke2Type == "bug") {
            return 0;
         }
         if (poke1Type == "psychic" && poke2Type == "rock") {
            return 0;
         }
         if (poke1Type == "psychic" && poke2Type == "ghost") {
            return 0;
         }
         if (poke1Type == "psychic" && poke2Type == "dragon") {
            return 0;
         }
         if (poke1Type == "psychic" && poke2Type == "dark") {
            return -2;
         }
         if (poke1Type == "psychic" && poke2Type == "steel") {
            return -1;
         }
         if (poke1Type == "psychic" && poke2Type == "fairy") {
            return 0;
         }

      case "bug":
         if (poke1Type == "bug" && poke2Type == "normal") {
            return 0;
         }
         if (poke1Type == "bug" && poke2Type == "fire") {
            return -1;
         }
         if (poke1Type == "bug" && poke2Type == "water") {
            return 0;
         }
         if (poke1Type == "bug" && poke2Type == "electric") {
            return 0;
         }
         if (poke1Type == "bug" && poke2Type == "grass") {
            return 1;
         }
         if (poke1Type == "bug" && poke2Type == "ice") {
            return 0;
         }
         if (poke1Type == "bug" && poke2Type == "fighting") {
            return -1;
         }
         if (poke1Type == "bug" && poke2Type == "poison") {
            return -1;
         }
         if (poke1Type == "bug" && poke2Type == "ground") {
            return 0;
         }
         if (poke1Type == "bug" && poke2Type == "flying") {
            return -1;
         }
         if (poke1Type == "bug" && poke2Type == "psychic") {
            return 1;
         }
         if (poke1Type == "bug" && poke2Type == "bug") {
            return 0;
         }
         if (poke1Type == "bug" && poke2Type == "rock") {
            return 0;
         }
         if (poke1Type == "bug" && poke2Type == "ghost") {
            return -1;
         }
         if (poke1Type == "bug" && poke2Type == "dragon") {
            return 0;
         }
         if (poke1Type == "bug" && poke2Type == "dark") {
            return 1;
         }
         if (poke1Type == "bug" && poke2Type == "steel") {
            return -1;
         }
         if (poke1Type == "bug" && poke2Type == "fairy") {
            return -1;
         }

      case "rock":
         if (poke1Type == "rock" && poke2Type == "normal") {
            return 0;
         }
         if (poke1Type == "rock" && poke2Type == "fire") {
            return 1;
         }
         if (poke1Type == "rock" && poke2Type == "water") {
            return 0;
         }
         if (poke1Type == "rock" && poke2Type == "electric") {
            return 0;
         }
         if (poke1Type == "rock" && poke2Type == "grass") {
            return 0;
         }
         if (poke1Type == "rock" && poke2Type == "ice") {
            return 1;
         }
         if (poke1Type == "rock" && poke2Type == "fighting") {
            return -1;
         }
         if (poke1Type == "rock" && poke2Type == "poison") {
            return 0;
         }
         if (poke1Type == "rock" && poke2Type == "ground") {
            return -1;
         }
         if (poke1Type == "rock" && poke2Type == "flying") {
            return 1;
         }
         if (poke1Type == "rock" && poke2Type == "psychic") {
            return 0;
         }
         if (poke1Type == "rock" && poke2Type == "bug") {
            return 1;
         }
         if (poke1Type == "rock" && poke2Type == "rock") {
            return 0;
         }
         if (poke1Type == "rock" && poke2Type == "ghost") {
            return 0;
         }
         if (poke1Type == "rock" && poke2Type == "dragon") {
            return 0;
         }
         if (poke1Type == "rock" && poke2Type == "dark") {
            return 0;
         }
         if (poke1Type == "rock" && poke2Type == "steel") {
            return -1;
         }
         if (poke1Type == "rock" && poke2Type == "fairy") {
            return 0;
         }

      case "ghost":
         if (poke1Type == "ghost" && poke2Type == "normal") {
            return -2;
         }
         if (poke1Type == "ghost" && poke2Type == "fire") {
            return 0;
         }
         if (poke1Type == "ghost" && poke2Type == "water") {
            return 0;
         }
         if (poke1Type == "ghost" && poke2Type == "electric") {
            return 0;
         }
         if (poke1Type == "ghost" && poke2Type == "grass") {
            return 0;
         }
         if (poke1Type == "ghost" && poke2Type == "ice") {
            return 0;
         }
         if (poke1Type == "ghost" && poke2Type == "fighting") {
            return 0;
         }
         if (poke1Type == "ghost" && poke2Type == "poison") {
            return 0;
         }
         if (poke1Type == "ghost" && poke2Type == "ground") {
            return 0;
         }
         if (poke1Type == "ghost" && poke2Type == "flying") {
            return 0;
         }
         if (poke1Type == "ghost" && poke2Type == "psychic") {
            return 1;
         }
         if (poke1Type == "ghost" && poke2Type == "bug") {
            return 0;
         }
         if (poke1Type == "ghost" && poke2Type == "rock") {
            return 0;
         }
         if (poke1Type == "ghost" && poke2Type == "ghost") {
            return 1;
         }
         if (poke1Type == "ghost" && poke2Type == "dragon") {
            return 0;
         }
         if (poke1Type == "ghost" && poke2Type == "dark") {
            return -1;
         }
         if (poke1Type == "ghost" && poke2Type == "steel") {
            return 0;
         }
         if (poke1Type == "ghost" && poke2Type == "fairy") {
            return 0;
         }

      case "dragon":
         if (poke1Type == "dragon" && poke2Type == "normal") {
            return 0;
         }
         if (poke1Type == "dragon" && poke2Type == "fire") {
            return 0;
         }
         if (poke1Type == "dragon" && poke2Type == "water") {
            return 0;
         }
         if (poke1Type == "dragon" && poke2Type == "electric") {
            return 0;
         }
         if (poke1Type == "dragon" && poke2Type == "grass") {
            return 0;
         }
         if (poke1Type == "dragon" && poke2Type == "ice") {
            return 0;
         }
         if (poke1Type == "dragon" && poke2Type == "fighting") {
            return 0;
         }
         if (poke1Type == "dragon" && poke2Type == "poison") {
            return 0;
         }
         if (poke1Type == "dragon" && poke2Type == "ground") {
            return 0;
         }
         if (poke1Type == "dragon" && poke2Type == "flying") {
            return 0;
         }
         if (poke1Type == "dragon" && poke2Type == "psychic") {
            return 0;
         }
         if (poke1Type == "dragon" && poke2Type == "bug") {
            return 0;
         }
         if (poke1Type == "dragon" && poke2Type == "rock") {
            return 0;
         }
         if (poke1Type == "dragon" && poke2Type == "ghost") {
            return 0;
         }
         if (poke1Type == "dragon" && poke2Type == "dragon") {
            return 1;
         }
         if (poke1Type == "dragon" && poke2Type == "dark") {
            return 0;
         }
         if (poke1Type == "dragon" && poke2Type == "steel") {
            return -1;
         }
         if (poke1Type == "dragon" && poke2Type == "fairy") {
            return -2;
         }

      case "dark":
         if (poke1Type == "dark" && poke2Type == "normal") {
            return 0;
         }
         if (poke1Type == "dark" && poke2Type == "fire") {
            return 0;
         }
         if (poke1Type == "dark" && poke2Type == "water") {
            return 0;
         }
         if (poke1Type == "dark" && poke2Type == "electric") {
            return 0;
         }
         if (poke1Type == "dark" && poke2Type == "grass") {
            return 0;
         }
         if (poke1Type == "dark" && poke2Type == "ice") {
            return 0;
         }
         if (poke1Type == "dark" && poke2Type == "fighting") {
            return -1;
         }
         if (poke1Type == "dark" && poke2Type == "poison") {
            return 0;
         }
         if (poke1Type == "dark" && poke2Type == "ground") {
            return 0;
         }
         if (poke1Type == "dark" && poke2Type == "flying") {
            return 0;
         }
         if (poke1Type == "dark" && poke2Type == "psychic") {
            return 1;
         }
         if (poke1Type == "dark" && poke2Type == "bug") {
            return 0;
         }
         if (poke1Type == "dark" && poke2Type == "rock") {
            return 0;
         }
         if (poke1Type == "dark" && poke2Type == "ghost") {
            return 1;
         }
         if (poke1Type == "dark" && poke2Type == "dragon") {
            return 0;
         }
         if (poke1Type == "dark" && poke2Type == "dark") {
            return -1;
         }
         if (poke1Type == "dark" && poke2Type == "steel") {
            return 0;
         }
         if (poke1Type == "dark" && poke2Type == "fairy") {
            return -1;
         }

      case "steel":
         if (poke1Type == "steel" && poke2Type == "normal") {
            return 0;
         }
         if (poke1Type == "steel" && poke2Type == "fire") {
            return -1;
         }
         if (poke1Type == "steel" && poke2Type == "water") {
            return -1;
         }
         if (poke1Type == "steel" && poke2Type == "electric") {
            return -1;
         }
         if (poke1Type == "steel" && poke2Type == "grass") {
            return 0;
         }
         if (poke1Type == "steel" && poke2Type == "ice") {
            return 1;
         }
         if (poke1Type == "steel" && poke2Type == "fighting") {
            return 0;
         }
         if (poke1Type == "steel" && poke2Type == "poison") {
            return 0;
         }
         if (poke1Type == "steel" && poke2Type == "ground") {
            return 0;
         }
         if (poke1Type == "steel" && poke2Type == "flying") {
            return 0;
         }
         if (poke1Type == "steel" && poke2Type == "psychic") {
            return 0;
         }
         if (poke1Type == "steel" && poke2Type == "bug") {
            return 0;
         }
         if (poke1Type == "steel" && poke2Type == "rock") {
            return 1;
         }
         if (poke1Type == "steel" && poke2Type == "ghost") {
            return 0;
         }
         if (poke1Type == "steel" && poke2Type == "dragon") {
            return 0;
         }
         if (poke1Type == "steel" && poke2Type == "dark") {
            return 0;
         }
         if (poke1Type == "steel" && poke2Type == "steel") {
            return -1;
         }
         if (poke1Type == "steel" && poke2Type == "fairy") {
            return 1;
         }

      case "fairy":
         if (poke1Type == "fairy" && poke2Type == "normal") {
            return 0;
         }
         if (poke1Type == "fairy" && poke2Type == "fire") {
            return -1;
         }
         if (poke1Type == "fairy" && poke2Type == "water") {
            return 0;
         }
         if (poke1Type == "fairy" && poke2Type == "electric") {
            return 0;
         }
         if (poke1Type == "fairy" && poke2Type == "grass") {
            return 0;
         }
         if (poke1Type == "fairy" && poke2Type == "ice") {
            return 0;
         }
         if (poke1Type == "fairy" && poke2Type == "fighting") {
            return 1;
         }
         if (poke1Type == "fairy" && poke2Type == "poison") {
            return -1;
         }
         if (poke1Type == "fairy" && poke2Type == "ground") {
            return 0;
         }
         if (poke1Type == "fairy" && poke2Type == "flying") {
            return 0;
         }
         if (poke1Type == "fairy" && poke2Type == "psychic") {
            return 0;
         }
         if (poke1Type == "fairy" && poke2Type == "bug") {
            return 0;
         }
         if (poke1Type == "fairy" && poke2Type == "rock") {
            return 0;
         }
         if (poke1Type == "fairy" && poke2Type == "ghost") {
            return 0;
         }
         if (poke1Type == "fairy" && poke2Type == "dragon") {
            return 1;
         }
         if (poke1Type == "fairy" && poke2Type == "dark") {
            return 1;
         }
         if (poke1Type == "fairy" && poke2Type == "steel") {
            return -1;
         }
         if (poke1Type == "fairy" && poke2Type == "fairy") {
            return 0;
         }
   }
   
   
   
}
