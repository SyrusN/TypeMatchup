export async function compareTypes(type1, type2, type3, type4) {
   //TODO: ISSUE IN THIS FILE FOR EXPORTING
   
   //types 1 & 2 -> Pokemon 1
   //types 3 & 4 -> Pokemon 2
   
   // -2 = no effect on second poke
   // -1 = little effect on second poke
   // 0 = neutral against second poke
   // 1 = 2x effective against second poke
   // 2 = 4x effective against second poke

   var effectiveness1 = 1;
   var effectiveness2 = 1;
   var effectiveness3 = 1;
   var effectiveness4 = 1;
   var effectiveness5 = 1;
   var effectiveness6 = 1;
   var effectiveness7 = 1;
   var effectiveness8 = 1;
   var result = 0;

   //Cross-compare the first types of the two Pokemon
   effectiveness1 = await compareTypesHelper(type1, type3);
   effectiveness5 = await compareTypesHelper(type3, type1);
   
   if (type2 != "" && type4 != "") {
      //Pokemon 1's & 2's type 2 exists
      //Cross compare both their types
      effectiveness2 = await compareTypesHelper(type1, type4);
      effectiveness3 = await compareTypesHelper(type2, type4);
      effectiveness4 = await compareTypesHelper(type2, type3);
      effectiveness6 = await compareTypesHelper(type4, type1);
      effectiveness7 = await compareTypesHelper(type4, type2);
      effectiveness8 = await compareTypesHelper(type3, type2);
      result = (effectiveness1 - effectiveness5) + (effectiveness2 - effectiveness6) + (effectiveness3 - effectiveness7) + (effectiveness4 - effectiveness8);
   } else if (type2 != "" && type4 == "") {
      //Pokemon 1's type 2 exists, Pokemon 2's doesn't
      //Cross compare Pokemon 1's two types to Pokemon 2's 1 type
      effectiveness4 = await compareTypesHelper(type2, type3);
      effectiveness8 = await compareTypesHelper(type3, type2);
      result = (effectiveness1 - effectiveness5) + (effectiveness4 - effectiveness8);

   } else if (type2 == "" && type4 != "") {
      //Pokemon 2's type 2 exists, Pokemon 1's doesn't
      //Cross compare Pokemon 2's two types to Pokemon 1's 1 type
      effectiveness2 = await compareTypesHelper(type1, type4);
      effectiveness6 = await compareTypesHelper(type4, type1);
      result = (effectiveness1 - effectiveness5) + (effectiveness2 - effectiveness6);
      
   } else {
      //Only 1 type assumed for both Pokemon
      //Cross compare both Pokemon's one type
      result = (effectiveness1 - effectiveness5);
   }
   return result;

   
   
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

   //There are 2 approaches to this type table I have tried
   //1. Using a data structure to contain all the elements and selecting the index for each typing contained in a hashtable. Uses more allocated space.
   //2. A whole lotta if statements that are easier to read for humans, but take a LOT of LOC and potentially more time to evaluate. 

   //Method 1
   const typingMap = new Map();
   typingMap.set("normal", 0);
   typingMap.set("fire", 1);
   typingMap.set("water", 2);
   typingMap.set("electric", 3);
   typingMap.set("grass", 4);
   typingMap.set("ice", 5);
   typingMap.set("fighting", 6);
   typingMap.set("poison", 7);
   typingMap.set("ground", 8);
   typingMap.set("flying", 9);
   typingMap.set("psychic", 10);
   typingMap.set("bug", 11);
   typingMap.set("rock", 12);
   typingMap.set("ghost", 13);
   typingMap.set("dragon", 14);
   typingMap.set("dark", 15);
   typingMap.set("steel", 16);
   typingMap.set("fairy", 17);
   var typingMatrix = [[0,0,0,0,0,0,0,0,0,0,0,0,-1,-2,0,0,-1,0],     //0. Normal
                       [0,-1,-1,0,1,1,0,0,0,0,0,1,-1,0,-1,0,1,0],    //1. Fire
                       [0,1,-1,0,-1,0,0,0,1,0,0,0,1,0,-1,0,0,0],     //2. Water
                       [0,0,1,-1,-1,0,0,0,-2,1,0,0,0,0,-1,0,0,0],    //3. Electric
                       [0,-1,1,0,-1,0,0,-1,1,-1,0,-1,1,0,-1,0,-1,0], //4. Grass
                       [0,-1,-1,0,1,-1,0,0,1,1,0,0,0,0,1,0,-1,0],    //5. Ice
                       [1,0,0,0,0,1,0,-1,0,-1,-1,-1,1,-2,0,1,1,-1],  //6. Fighting
                       [0,0,0,0,1,0,0,-1,-1,0,0,0,-1,-1,0,0,-2,1],   //7. Poison
                       [0,1,0,1,-1,0,0,1,0,-2,0,-1,1,0,0,0,1,0],     //8. Ground
                       [0,0,0,-1,1,0,1,0,0,0,0,1,-1,0,0,0,-1,0],     //9. Flying
                       [0,0,0,0,0,0,1,1,0,0,-1,0,0,0,0,-2,-1,0],     //10. Psychic
                       [0,-1,0,0,1,0,-1,-1,0,-1,1,0,0,-1,0,1,-1,-1], //11. Bug
                       [0,1,0,0,0,1,-1,0,-1,1,0,1,0,0,0,0,-1,0],     //12. Rock 
                       [-2,0,0,0,0,0,0,0,0,0,1,0,0,1,0,-1,0,0],      //13. Ghost
                       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,-1,-2],      //14. Dragon
                       [0,0,0,0,0,0,-1,0,0,0,1,0,0,1,0,-1,0,-1],     //15. Dark
                       [0,-1,-1,-1,0,1,0,0,0,0,0,0,1,0,0,0,-1,1],    //16. Steel
                       [0,-1,0,0,0,0,1,-1,0,0,0,0,0,0,1,1,-1,0]];    //17. Fairy

   //Simply get the x and y coordinates from the map
   var typePositionX = typingMap.get(poke1Type);
   var typePositionY = typingMap.get(poke2Type);
   console.log("X: ", typePositionX, "Y: ", typePositionY);

   //Get the table entry for from the matrix using these coorindates to return the effectiveness value
   var result = typingMatrix[typePositionX][typePositionY];
   return result;

   //Method 2
   // switch(poke1Type) {
   //    //compare the attacker type in the case to the defender type
   //    case "normal":
   //       {
   //          if (poke1Type == "normal" && poke2Type == "normal") {
   //             return 0;
   //          }
   //          if (poke1Type == "normal" && poke2Type == "fire") {
   //             return 0;
   //          }
   //          if (poke1Type == "normal" && poke2Type == "water") {
   //             return 0;
   //          }
   //          if (poke1Type == "normal" && poke2Type == "electric") {
   //             return 0;
   //          }
   //          if (poke1Type == "normal" && poke2Type == "grass") {
   //             return 0;
   //          }
   //          if (poke1Type == "normal" && poke2Type == "ice") {
   //             return 0;
   //          }
   //          if (poke1Type == "normal" && poke2Type == "fighting") {
   //             return 0;
   //          }
   //          if (poke1Type == "normal" && poke2Type == "poison") {
   //             return 0;
   //          }
   //          if (poke1Type == "normal" && poke2Type == "ground") {
   //             return 0;
   //          }
   //          if (poke1Type == "normal" && poke2Type == "flying") {
   //             return 0;
   //          }
   //          if (poke1Type == "normal" && poke2Type == "psychic") {
   //             return 0;
   //          }
   //          if (poke1Type == "normal" && poke2Type == "bug") {
   //             return 0;
   //          }
   //          if (poke1Type == "normal" && poke2Type == "rock") {
   //             return -1;
   //          }
   //          if (poke1Type == "normal" && poke2Type == "ghost") {
   //             return -2;
   //          }
   //          if (poke1Type == "normal" && poke2Type == "dragon") {
   //             return 0;
   //          }
   //          if (poke1Type == "normal" && poke2Type == "dark") {
   //             return 0;
   //          }
   //          if (poke1Type == "normal" && poke2Type == "steel") {
   //             return -1;
   //          }
   //          if (poke1Type == "normal" && poke2Type == "fairy") {
   //             return 0;
   //          }
   //          break;
   //       }
         

   //    case "fire":
   //       {
   //          if (poke1Type == "fire" && poke2Type == "normal") {
   //             return 0;
   //          }
   //          if (poke1Type == "fire" && poke2Type == "fire") {
   //             return -1;
   //          }
   //          if (poke1Type == "fire" && poke2Type == "water") {
   //             return -1;
   //          }
   //          if (poke1Type == "fire" && poke2Type == "electric") {
   //             return 0;
   //          }
   //          if (poke1Type == "fire" && poke2Type == "grass") {
   //             return 1;
   //          }
   //          if (poke1Type == "fire" && poke2Type == "ice") {
   //             return 1;
   //          }
   //          if (poke1Type == "fire" && poke2Type == "fighting") {
   //             return 0;
   //          }
   //          if (poke1Type == "fire" && poke2Type == "poison") {
   //             return 0;
   //          }
   //          if (poke1Type == "fire" && poke2Type == "ground") {
   //             return 0;
   //          }
   //          if (poke1Type == "fire" && poke2Type == "flying") {
   //             return 0;
   //          }
   //          if (poke1Type == "fire" && poke2Type == "psychic") {
   //             return 0;
   //          }
   //          if (poke1Type == "fire" && poke2Type == "bug") {
   //             return 1;
   //          }
   //          if (poke1Type == "fire" && poke2Type == "rock") {
   //             return -1;
   //          }
   //          if (poke1Type == "fire" && poke2Type == "ghost") {
   //             return -2;
   //          }
   //          if (poke1Type == "fire" && poke2Type == "dragon") {
   //             return -1;
   //          }
   //          if (poke1Type == "fire" && poke2Type == "dark") {
   //             return 0;
   //          }
   //          if (poke1Type == "fire" && poke2Type == "steel") {
   //             return 1;
   //          }
   //          if (poke1Type == "fire" && poke2Type == "fairy") {
   //             return 0;
   //          }
   //          break;
   //       }

   //    case "water":
   //       {
   //          if (poke1Type == "water" && poke2Type == "normal") {
   //             return 0;
   //          }
   //          if (poke1Type == "water" && poke2Type == "fire") {
   //             return 1;
   //          }
   //          if (poke1Type == "water" && poke2Type == "water") {
   //             return -1;
   //          }
   //          if (poke1Type == "water" && poke2Type == "electric") {
   //             return 0;
   //          }
   //          if (poke1Type == "water" && poke2Type == "grass") {
   //             return -1;
   //          }
   //          if (poke1Type == "water" && poke2Type == "ice") {
   //             return 1;
   //          }
   //          if (poke1Type == "water" && poke2Type == "fighting") {
   //             return 0;
   //          }
   //          if (poke1Type == "water" && poke2Type == "poison") {
   //             return 0;
   //          }
   //          if (poke1Type == "water" && poke2Type == "ground") {
   //             return 1;
   //          }
   //          if (poke1Type == "water" && poke2Type == "flying") {
   //             return 0;
   //          }
   //          if (poke1Type == "water" && poke2Type == "psychic") {
   //             return 0;
   //          }
   //          if (poke1Type == "water" && poke2Type == "bug") {
   //             return 1;
   //          }
   //          if (poke1Type == "water" && poke2Type == "rock") {
   //             return 1;
   //          }
   //          if (poke1Type == "water" && poke2Type == "ghost") {
   //             return 0;
   //          }
   //          if (poke1Type == "water" && poke2Type == "dragon") {
   //             return -1;
   //          }
   //          if (poke1Type == "water" && poke2Type == "dark") {
   //             return 0;
   //          }
   //          if (poke1Type == "water" && poke2Type == "steel") {
   //             return 0;
   //          }
   //          if (poke1Type == "water" && poke2Type == "fairy") {
   //             return 0;
   //          }
   //          break;
   //       }

   //    case "electric":
   //       {
   //          if (poke1Type == "electric" && poke2Type == "normal") {
   //             return 0;
   //          }
   //          if (poke1Type == "electric" && poke2Type == "fire") {
   //             return 0;
   //          }
   //          if (poke1Type == "electric" && poke2Type == "water") {
   //             return 1;
   //          }
   //          if (poke1Type == "electric" && poke2Type == "electric") {
   //             return -1;
   //          }
   //          if (poke1Type == "electric" && poke2Type == "grass") {
   //             return -1;
   //          }
   //          if (poke1Type == "electric" && poke2Type == "ice") {
   //             return 1;
   //          }
   //          if (poke1Type == "electric" && poke2Type == "fighting") {
   //             return 0;
   //          }
   //          if (poke1Type == "electric" && poke2Type == "poison") {
   //             return 0;
   //          }
   //          if (poke1Type == "electric" && poke2Type == "ground") {
   //             return -2;
   //          }
   //          if (poke1Type == "electric" && poke2Type == "flying") {
   //             return 1;
   //          }
   //          if (poke1Type == "electric" && poke2Type == "psychic") {
   //             return 0;
   //          }
   //          if (poke1Type == "electric" && poke2Type == "bug") {
   //             return 1;
   //          }
   //          if (poke1Type == "electric" && poke2Type == "rock") {
   //             return 1;
   //          }
   //          if (poke1Type == "electric" && poke2Type == "ghost") {
   //             return 0;
   //          }
   //          if (poke1Type == "electric" && poke2Type == "dragon") {
   //             return -1;
   //          }
   //          if (poke1Type == "electric" && poke2Type == "dark") {
   //             return 0;
   //          }
   //          if (poke1Type == "electric" && poke2Type == "steel") {
   //             return 0;
   //          }
   //          if (poke1Type == "electric" && poke2Type == "fairy") {
   //             return 0;
   //          }
   //          break;
   //       }

   //    case "grass":
   //       {
   //          if (poke1Type == "grass" && poke2Type == "normal") {
   //             return 0;
   //          }
   //          if (poke1Type == "grass" && poke2Type == "fire") {
   //             return -1;
   //          }
   //          if (poke1Type == "grass" && poke2Type == "water") {
   //             return 1;
   //          }
   //          if (poke1Type == "grass" && poke2Type == "electric") {
   //             return 0;
   //          }
   //          if (poke1Type == "grass" && poke2Type == "grass") {
   //             return -1;
   //          }
   //          if (poke1Type == "grass" && poke2Type == "ice") {
   //             return 0;
   //          }
   //          if (poke1Type == "grass" && poke2Type == "fighting") {
   //             return 0;
   //          }
   //          if (poke1Type == "grass" && poke2Type == "poison") {
   //             return -1;
   //          }
   //          if (poke1Type == "grass" && poke2Type == "ground") {
   //             return 1;
   //          }
   //          if (poke1Type == "grass" && poke2Type == "flying") {
   //             return -1;
   //          }
   //          if (poke1Type == "grass" && poke2Type == "psychic") {
   //             return 0;
   //          }
   //          if (poke1Type == "grass" && poke2Type == "bug") {
   //             return -1;
   //          }
   //          if (poke1Type == "grass" && poke2Type == "rock") {
   //             return 1;
   //          }
   //          if (poke1Type == "grass" && poke2Type == "ghost") {
   //             return 0;
   //          }
   //          if (poke1Type == "grass" && poke2Type == "dragon") {
   //             return -1;
   //          }
   //          if (poke1Type == "grass" && poke2Type == "dark") {
   //             return 0;
   //          }
   //          if (poke1Type == "grass" && poke2Type == "steel") {
   //             return -1;
   //          }
   //          if (poke1Type == "grass" && poke2Type == "fairy") {
   //             return 0;
   //          }
   //          break;
   //       }

   //    case "ice":
   //       {
   //          if (poke1Type == "ice" && poke2Type == "normal") {
   //             return 0;
   //          }
   //          if (poke1Type == "ice" && poke2Type == "fire") {
   //             return -1;
   //          }
   //          if (poke1Type == "ice" && poke2Type == "water") {
   //             return -1;
   //          }
   //          if (poke1Type == "ice" && poke2Type == "electric") {
   //             return 0;
   //          }
   //          if (poke1Type == "ice" && poke2Type == "grass") {
   //             return 1;
   //          }
   //          if (poke1Type == "ice" && poke2Type == "ice") {
   //             return -1;
   //          }
   //          if (poke1Type == "ice" && poke2Type == "fighting") {
   //             return 0;
   //          }
   //          if (poke1Type == "ice" && poke2Type == "poison") {
   //             return 0;
   //          }
   //          if (poke1Type == "ice" && poke2Type == "ground") {
   //             return 1;
   //          }
   //          if (poke1Type == "ice" && poke2Type == "flying") {
   //             return 1;
   //          }
   //          if (poke1Type == "ice" && poke2Type == "psychic") {
   //             return 0;
   //          }
   //          if (poke1Type == "ice" && poke2Type == "bug") {
   //             return 0;
   //          }
   //          if (poke1Type == "ice" && poke2Type == "rock") {
   //             return 0;
   //          }
   //          if (poke1Type == "ice" && poke2Type == "ghost") {
   //             return 0;
   //          }
   //          if (poke1Type == "ice" && poke2Type == "dragon") {
   //             return 1;
   //          }
   //          if (poke1Type == "ice" && poke2Type == "dark") {
   //             return 0;
   //          }
   //          if (poke1Type == "ice" && poke2Type == "steel") {
   //             return -1;
   //          }
   //          if (poke1Type == "ice" && poke2Type == "fairy") {
   //             return 0;
   //          }
   //          break;
   //       }

   //    case "fighting":
   //       {
   //          if (poke1Type == "fighting" && poke2Type == "normal") {
   //             return 1;
   //          }
   //          if (poke1Type == "fighting" && poke2Type == "fire") {
   //             return 0;
   //          }
   //          if (poke1Type == "fighting" && poke2Type == "water") {
   //             return 0;
   //          }
   //          if (poke1Type == "fighting" && poke2Type == "electric") {
   //             return 0;
   //          }
   //          if (poke1Type == "fighting" && poke2Type == "grass") {
   //             return 0;
   //          }
   //          if (poke1Type == "fighting" && poke2Type == "ice") {
   //             return 1;
   //          }
   //          if (poke1Type == "fighting" && poke2Type == "fighting") {
   //             return 0;
   //          }
   //          if (poke1Type == "fighting" && poke2Type == "poison") {
   //             return -1;
   //          }
   //          if (poke1Type == "fighting" && poke2Type == "ground") {
   //             return 0;
   //          }
   //          if (poke1Type == "fighting" && poke2Type == "flying") {
   //             return -1;
   //          }
   //          if (poke1Type == "fighting" && poke2Type == "psychic") {
   //             return -1;
   //          }
   //          if (poke1Type == "fighting" && poke2Type == "bug") {
   //             return -1;
   //          }
   //          if (poke1Type == "fighting" && poke2Type == "rock") {
   //             return 1;
   //          }
   //          if (poke1Type == "fighting" && poke2Type == "ghost") {
   //             return -2;
   //          }
   //          if (poke1Type == "fighting" && poke2Type == "dragon") {
   //             return 0;
   //          }
   //          if (poke1Type == "fighting" && poke2Type == "dark") {
   //             return 1;
   //          }
   //          if (poke1Type == "fighting" && poke2Type == "steel") {
   //             return 1;
   //          }
   //          if (poke1Type == "fighting" && poke2Type == "fairy") {
   //             return -1;
   //          }
   //          break;
   //       }

   //    case "poison":
   //       {
   //          if (poke1Type == "poison" && poke2Type == "normal") {
   //             return 0;
   //          }
   //          if (poke1Type == "poison" && poke2Type == "fire") {
   //             return 0;
   //          }
   //          if (poke1Type == "poison" && poke2Type == "water") {
   //             return 0;
   //          }
   //          if (poke1Type == "poison" && poke2Type == "electric") {
   //             return 0;
   //          }
   //          if (poke1Type == "poison" && poke2Type == "grass") {
   //             return 1;
   //          }
   //          if (poke1Type == "poison" && poke2Type == "ice") {
   //             return 0;
   //          }
   //          if (poke1Type == "poison" && poke2Type == "fighting") {
   //             return 0;
   //          }
   //          if (poke1Type == "poison" && poke2Type == "poison") {
   //             return -1;
   //          }
   //          if (poke1Type == "poison" && poke2Type == "ground") {
   //             return -1;
   //          }
   //          if (poke1Type == "poison" && poke2Type == "flying") {
   //             return 0;
   //          }
   //          if (poke1Type == "poison" && poke2Type == "psychic") {
   //             return 0;
   //          }
   //          if (poke1Type == "poison" && poke2Type == "bug") {
   //             return 0;
   //          }
   //          if (poke1Type == "poison" && poke2Type == "rock") {
   //             return -1;
   //          }
   //          if (poke1Type == "poison" && poke2Type == "ghost") {
   //             return -1;
   //          }
   //          if (poke1Type == "poison" && poke2Type == "dragon") {
   //             return 0;
   //          }
   //          if (poke1Type == "poison" && poke2Type == "dark") {
   //             return 0;
   //          }
   //          if (poke1Type == "poison" && poke2Type == "steel") {
   //             return -2;
   //          }
   //          if (poke1Type == "poison" && poke2Type == "fairy") {
   //             return 1;
   //          }
   //          break;
   //       }

   //    case "ground":
   //       {
   //          if (poke1Type == "ground" && poke2Type == "normal") {
   //             return 0;
   //          }
   //          if (poke1Type == "ground" && poke2Type == "fire") {
   //             return 1;
   //          }
   //          if (poke1Type == "ground" && poke2Type == "water") {
   //             return 0;
   //          }
   //          if (poke1Type == "ground" && poke2Type == "electric") {
   //             return 1;
   //          }
   //          if (poke1Type == "ground" && poke2Type == "grass") {
   //             return -1;
   //          }
   //          if (poke1Type == "ground" && poke2Type == "ice") {
   //             return 0;
   //          }
   //          if (poke1Type == "ground" && poke2Type == "fighting") {
   //             return 0;
   //          }
   //          if (poke1Type == "ground" && poke2Type == "poison") {
   //             return 1;
   //          }
   //          if (poke1Type == "ground" && poke2Type == "ground") {
   //             return 0;
   //          }
   //          if (poke1Type == "ground" && poke2Type == "flying") {
   //             return -2;
   //          }
   //          if (poke1Type == "ground" && poke2Type == "psychic") {
   //             return 0;
   //          }
   //          if (poke1Type == "ground" && poke2Type == "bug") {
   //             return -1;
   //          }
   //          if (poke1Type == "ground" && poke2Type == "rock") {
   //             return 1;
   //          }
   //          if (poke1Type == "ground" && poke2Type == "ghost") {
   //             return 0;
   //          }
   //          if (poke1Type == "ground" && poke2Type == "dragon") {
   //             return 0;
   //          }
   //          if (poke1Type == "ground" && poke2Type == "dark") {
   //             return 0;
   //          }
   //          if (poke1Type == "ground" && poke2Type == "steel") {
   //             return 1;
   //          }
   //          if (poke1Type == "ground" && poke2Type == "fairy") {
   //             return 0;
   //          }
   //          break;
   //       }

   //    case "flying":
   //       {
   //          if (poke1Type == "flying" && poke2Type == "normal") {
   //             return 0;
   //          }
   //          if (poke1Type == "flying" && poke2Type == "fire") {
   //             return 0;
   //          }
   //          if (poke1Type == "flying" && poke2Type == "water") {
   //             return 0;
   //          }
   //          if (poke1Type == "flying" && poke2Type == "electric") {
   //             return -1;
   //          }
   //          if (poke1Type == "flying" && poke2Type == "grass") {
   //             return 1;
   //          }
   //          if (poke1Type == "flying" && poke2Type == "ice") {
   //             return 0;
   //          }
   //          if (poke1Type == "flying" && poke2Type == "fighting") {
   //             return 1;
   //          }
   //          if (poke1Type == "flying" && poke2Type == "poison") {
   //             return 0;
   //          }
   //          if (poke1Type == "flying" && poke2Type == "ground") {
   //             return 0;
   //          }
   //          if (poke1Type == "flying" && poke2Type == "flying") {
   //             return 0;
   //          }
   //          if (poke1Type == "flying" && poke2Type == "psychic") {
   //             return 0;
   //          }
   //          if (poke1Type == "flying" && poke2Type == "bug") {
   //             return 1;
   //          }
   //          if (poke1Type == "flying" && poke2Type == "rock") {
   //             return -1;
   //          }
   //          if (poke1Type == "flying" && poke2Type == "ghost") {
   //             return 0;
   //          }
   //          if (poke1Type == "flying" && poke2Type == "dragon") {
   //             return 0;
   //          }
   //          if (poke1Type == "flying" && poke2Type == "dark") {
   //             return 0;
   //          }
   //          if (poke1Type == "flying" && poke2Type == "steel") {
   //             return -1;
   //          }
   //          if (poke1Type == "flying" && poke2Type == "fairy") {
   //             return 0;
   //          }
   //          break;   
   //       }   

   //    case "psychic":
   //       {
   //          if (poke1Type == "psychic" && poke2Type == "normal") {
   //             return 0;
   //          }
   //          if (poke1Type == "psychic" && poke2Type == "fire") {
   //             return 0;
   //          }
   //          if (poke1Type == "psychic" && poke2Type == "water") {
   //             return 0;
   //          }
   //          if (poke1Type == "psychic" && poke2Type == "electric") {
   //             return 0;
   //          }
   //          if (poke1Type == "psychic" && poke2Type == "grass") {
   //             return 0;
   //          }
   //          if (poke1Type == "psychic" && poke2Type == "ice") {
   //             return 0;
   //          }
   //          if (poke1Type == "psychic" && poke2Type == "fighting") {
   //             return 1;
   //          }
   //          if (poke1Type == "psychic" && poke2Type == "poison") {
   //             return 1;
   //          }
   //          if (poke1Type == "psychic" && poke2Type == "ground") {
   //             return 0;
   //          }
   //          if (poke1Type == "psychic" && poke2Type == "flying") {
   //             return 0;
   //          }
   //          if (poke1Type == "psychic" && poke2Type == "psychic") {
   //             return -1;
   //          }
   //          if (poke1Type == "psychic" && poke2Type == "bug") {
   //             return 0;
   //          }
   //          if (poke1Type == "psychic" && poke2Type == "rock") {
   //             return 0;
   //          }
   //          if (poke1Type == "psychic" && poke2Type == "ghost") {
   //             return 0;
   //          }
   //          if (poke1Type == "psychic" && poke2Type == "dragon") {
   //             return 0;
   //          }
   //          if (poke1Type == "psychic" && poke2Type == "dark") {
   //             return -2;
   //          }
   //          if (poke1Type == "psychic" && poke2Type == "steel") {
   //             return -1;
   //          }
   //          if (poke1Type == "psychic" && poke2Type == "fairy") {
   //             return 0;
   //          }
   //          break;
   //       }

   //    case "bug":
   //       {
   //          if (poke1Type == "bug" && poke2Type == "normal") {
   //             return 0;
   //          }
   //          if (poke1Type == "bug" && poke2Type == "fire") {
   //             return -1;
   //          }
   //          if (poke1Type == "bug" && poke2Type == "water") {
   //             return 0;
   //          }
   //          if (poke1Type == "bug" && poke2Type == "electric") {
   //             return 0;
   //          }
   //          if (poke1Type == "bug" && poke2Type == "grass") {
   //             return 1;
   //          }
   //          if (poke1Type == "bug" && poke2Type == "ice") {
   //             return 0;
   //          }
   //          if (poke1Type == "bug" && poke2Type == "fighting") {
   //             return -1;
   //          }
   //          if (poke1Type == "bug" && poke2Type == "poison") {
   //             return -1;
   //          }
   //          if (poke1Type == "bug" && poke2Type == "ground") {
   //             return 0;
   //          }
   //          if (poke1Type == "bug" && poke2Type == "flying") {
   //             return -1;
   //          }
   //          if (poke1Type == "bug" && poke2Type == "psychic") {
   //             return 1;
   //          }
   //          if (poke1Type == "bug" && poke2Type == "bug") {
   //             return 0;
   //          }
   //          if (poke1Type == "bug" && poke2Type == "rock") {
   //             return 0;
   //          }
   //          if (poke1Type == "bug" && poke2Type == "ghost") {
   //             return -1;
   //          }
   //          if (poke1Type == "bug" && poke2Type == "dragon") {
   //             return 0;
   //          }
   //          if (poke1Type == "bug" && poke2Type == "dark") {
   //             return 1;
   //          }
   //          if (poke1Type == "bug" && poke2Type == "steel") {
   //             return -1;
   //          }
   //          if (poke1Type == "bug" && poke2Type == "fairy") {
   //             return -1;
   //          }
   //          break;
   //       }

   //    case "rock":
   //       {
   //          if (poke1Type == "rock" && poke2Type == "normal") {
   //             return 0;
   //          }
   //          if (poke1Type == "rock" && poke2Type == "fire") {
   //             return 1;
   //          }
   //          if (poke1Type == "rock" && poke2Type == "water") {
   //             return 0;
   //          }
   //          if (poke1Type == "rock" && poke2Type == "electric") {
   //             return 0;
   //          }
   //          if (poke1Type == "rock" && poke2Type == "grass") {
   //             return 0;
   //          }
   //          if (poke1Type == "rock" && poke2Type == "ice") {
   //             return 1;
   //          }
   //          if (poke1Type == "rock" && poke2Type == "fighting") {
   //             return -1;
   //          }
   //          if (poke1Type == "rock" && poke2Type == "poison") {
   //             return 0;
   //          }
   //          if (poke1Type == "rock" && poke2Type == "ground") {
   //             return -1;
   //          }
   //          if (poke1Type == "rock" && poke2Type == "flying") {
   //             return 1;
   //          }
   //          if (poke1Type == "rock" && poke2Type == "psychic") {
   //             return 0;
   //          }
   //          if (poke1Type == "rock" && poke2Type == "bug") {
   //             return 1;
   //          }
   //          if (poke1Type == "rock" && poke2Type == "rock") {
   //             return 0;
   //          }
   //          if (poke1Type == "rock" && poke2Type == "ghost") {
   //             return 0;
   //          }
   //          if (poke1Type == "rock" && poke2Type == "dragon") {
   //             return 0;
   //          }
   //          if (poke1Type == "rock" && poke2Type == "dark") {
   //             return 0;
   //          }
   //          if (poke1Type == "rock" && poke2Type == "steel") {
   //             return -1;
   //          }
   //          if (poke1Type == "rock" && poke2Type == "fairy") {
   //             return 0;
   //          }
   //          break;
   //       }

   //    case "ghost":
   //       {
   //          if (poke1Type == "ghost" && poke2Type == "normal") {
   //             return -2;
   //          }
   //          if (poke1Type == "ghost" && poke2Type == "fire") {
   //             return 0;
   //          }
   //          if (poke1Type == "ghost" && poke2Type == "water") {
   //             return 0;
   //          }
   //          if (poke1Type == "ghost" && poke2Type == "electric") {
   //             return 0;
   //          }
   //          if (poke1Type == "ghost" && poke2Type == "grass") {
   //             return 0;
   //          }
   //          if (poke1Type == "ghost" && poke2Type == "ice") {
   //             return 0;
   //          }
   //          if (poke1Type == "ghost" && poke2Type == "fighting") {
   //             return 0;
   //          }
   //          if (poke1Type == "ghost" && poke2Type == "poison") {
   //             return 0;
   //          }
   //          if (poke1Type == "ghost" && poke2Type == "ground") {
   //             return 0;
   //          }
   //          if (poke1Type == "ghost" && poke2Type == "flying") {
   //             return 0;
   //          }
   //          if (poke1Type == "ghost" && poke2Type == "psychic") {
   //             return 1;
   //          }
   //          if (poke1Type == "ghost" && poke2Type == "bug") {
   //             return 0;
   //          }
   //          if (poke1Type == "ghost" && poke2Type == "rock") {
   //             return 0;
   //          }
   //          if (poke1Type == "ghost" && poke2Type == "ghost") {
   //             return 1;
   //          }
   //          if (poke1Type == "ghost" && poke2Type == "dragon") {
   //             return 0;
   //          }
   //          if (poke1Type == "ghost" && poke2Type == "dark") {
   //             return -1;
   //          }
   //          if (poke1Type == "ghost" && poke2Type == "steel") {
   //             return 0;
   //          }
   //          if (poke1Type == "ghost" && poke2Type == "fairy") {
   //             return 0;
   //          }
   //          break;
   //       }

   //    case "dragon":
   //       {
   //          if (poke1Type == "dragon" && poke2Type == "normal") {
   //             return 0;
   //          }
   //          if (poke1Type == "dragon" && poke2Type == "fire") {
   //             return 0;
   //          }
   //          if (poke1Type == "dragon" && poke2Type == "water") {
   //             return 0;
   //          }
   //          if (poke1Type == "dragon" && poke2Type == "electric") {
   //             return 0;
   //          }
   //          if (poke1Type == "dragon" && poke2Type == "grass") {
   //             return 0;
   //          }
   //          if (poke1Type == "dragon" && poke2Type == "ice") {
   //             return 0;
   //          }
   //          if (poke1Type == "dragon" && poke2Type == "fighting") {
   //             return 0;
   //          }
   //          if (poke1Type == "dragon" && poke2Type == "poison") {
   //             return 0;
   //          }
   //          if (poke1Type == "dragon" && poke2Type == "ground") {
   //             return 0;
   //          }
   //          if (poke1Type == "dragon" && poke2Type == "flying") {
   //             return 0;
   //          }
   //          if (poke1Type == "dragon" && poke2Type == "psychic") {
   //             return 0;
   //          }
   //          if (poke1Type == "dragon" && poke2Type == "bug") {
   //             return 0;
   //          }
   //          if (poke1Type == "dragon" && poke2Type == "rock") {
   //             return 0;
   //          }
   //          if (poke1Type == "dragon" && poke2Type == "ghost") {
   //             return 0;
   //          }
   //          if (poke1Type == "dragon" && poke2Type == "dragon") {
   //             return 1;
   //          }
   //          if (poke1Type == "dragon" && poke2Type == "dark") {
   //             return 0;
   //          }
   //          if (poke1Type == "dragon" && poke2Type == "steel") {
   //             return -1;
   //          }
   //          if (poke1Type == "dragon" && poke2Type == "fairy") {
   //             return -2;
   //          }
   //          break;
   //       }

   //    case "dark":
   //       {
   //          if (poke1Type == "dark" && poke2Type == "normal") {
   //             return 0;
   //          }
   //          if (poke1Type == "dark" && poke2Type == "fire") {
   //             return 0;
   //          }
   //          if (poke1Type == "dark" && poke2Type == "water") {
   //             return 0;
   //          }
   //          if (poke1Type == "dark" && poke2Type == "electric") {
   //             return 0;
   //          }
   //          if (poke1Type == "dark" && poke2Type == "grass") {
   //             return 0;
   //          }
   //          if (poke1Type == "dark" && poke2Type == "ice") {
   //             return 0;
   //          }
   //          if (poke1Type == "dark" && poke2Type == "fighting") {
   //             return -1;
   //          }
   //          if (poke1Type == "dark" && poke2Type == "poison") {
   //             return 0;
   //          }
   //          if (poke1Type == "dark" && poke2Type == "ground") {
   //             return 0;
   //          }
   //          if (poke1Type == "dark" && poke2Type == "flying") {
   //             return 0;
   //          }
   //          if (poke1Type == "dark" && poke2Type == "psychic") {
   //             return 1;
   //          }
   //          if (poke1Type == "dark" && poke2Type == "bug") {
   //             return 0;
   //          }
   //          if (poke1Type == "dark" && poke2Type == "rock") {
   //             return 0;
   //          }
   //          if (poke1Type == "dark" && poke2Type == "ghost") {
   //             return 1;
   //          }
   //          if (poke1Type == "dark" && poke2Type == "dragon") {
   //             return 0;
   //          }
   //          if (poke1Type == "dark" && poke2Type == "dark") {
   //             return -1;
   //          }
   //          if (poke1Type == "dark" && poke2Type == "steel") {
   //             return 0;
   //          }
   //          if (poke1Type == "dark" && poke2Type == "fairy") {
   //             return -1;
   //          }
   //          break;
   //       }

   //    case "steel":
   //       {
   //          if (poke1Type == "steel" && poke2Type == "normal") {
   //             return 0;
   //          }
   //          if (poke1Type == "steel" && poke2Type == "fire") {
   //             return -1;
   //          }
   //          if (poke1Type == "steel" && poke2Type == "water") {
   //             return -1;
   //          }
   //          if (poke1Type == "steel" && poke2Type == "electric") {
   //             return -1;
   //          }
   //          if (poke1Type == "steel" && poke2Type == "grass") {
   //             return 0;
   //          }
   //          if (poke1Type == "steel" && poke2Type == "ice") {
   //             return 1;
   //          }
   //          if (poke1Type == "steel" && poke2Type == "fighting") {
   //             return 0;
   //          }
   //          if (poke1Type == "steel" && poke2Type == "poison") {
   //             return 0;
   //          }
   //          if (poke1Type == "steel" && poke2Type == "ground") {
   //             return 0;
   //          }
   //          if (poke1Type == "steel" && poke2Type == "flying") {
   //             return 0;
   //          }
   //          if (poke1Type == "steel" && poke2Type == "psychic") {
   //             return 0;
   //          }
   //          if (poke1Type == "steel" && poke2Type == "bug") {
   //             return 0;
   //          }
   //          if (poke1Type == "steel" && poke2Type == "rock") {
   //             return 1;
   //          }
   //          if (poke1Type == "steel" && poke2Type == "ghost") {
   //             return 0;
   //          }
   //          if (poke1Type == "steel" && poke2Type == "dragon") {
   //             return 0;
   //          }
   //          if (poke1Type == "steel" && poke2Type == "dark") {
   //             return 0;
   //          }
   //          if (poke1Type == "steel" && poke2Type == "steel") {
   //             return -1;
   //          }
   //          if (poke1Type == "steel" && poke2Type == "fairy") {
   //             return 1;
   //          }
   //          break;
   //       }

   //    case "fairy":
   //       {
   //          if (poke1Type == "fairy" && poke2Type == "normal") {
   //             return 0;
   //          }
   //          if (poke1Type == "fairy" && poke2Type == "fire") {
   //             return -1;
   //          }
   //          if (poke1Type == "fairy" && poke2Type == "water") {
   //             return 0;
   //          }
   //          if (poke1Type == "fairy" && poke2Type == "electric") {
   //             return 0;
   //          }
   //          if (poke1Type == "fairy" && poke2Type == "grass") {
   //             return 0;
   //          }
   //          if (poke1Type == "fairy" && poke2Type == "ice") {
   //             return 0;
   //          }
   //          if (poke1Type == "fairy" && poke2Type == "fighting") {
   //             return 1;
   //          }
   //          if (poke1Type == "fairy" && poke2Type == "poison") {
   //             return -1;
   //          }
   //          if (poke1Type == "fairy" && poke2Type == "ground") {
   //             return 0;
   //          }
   //          if (poke1Type == "fairy" && poke2Type == "flying") {
   //             return 0;
   //          }
   //          if (poke1Type == "fairy" && poke2Type == "psychic") {
   //             return 0;
   //          }
   //          if (poke1Type == "fairy" && poke2Type == "bug") {
   //             return 0;
   //          }
   //          if (poke1Type == "fairy" && poke2Type == "rock") {
   //             return 0;
   //          }
   //          if (poke1Type == "fairy" && poke2Type == "ghost") {
   //             return 0;
   //          }
   //          if (poke1Type == "fairy" && poke2Type == "dragon") {
   //             return 1;
   //          }
   //          if (poke1Type == "fairy" && poke2Type == "dark") {
   //             return 1;
   //          }
   //          if (poke1Type == "fairy" && poke2Type == "steel") {
   //             return -1;
   //          }
   //          if (poke1Type == "fairy" && poke2Type == "fairy") {
   //             return 0;
   //          }
   //          break;
   //       }
   // }
};
